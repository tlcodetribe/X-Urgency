import { firestore } from ".."

const Count = async doc =>{

    let count = await firestore.collection('Videos').doc(doc).collection('Acts')
        .onSnapshot(query=>{
            var total = 0
            query.forEach(doc=>{
                let item = doc.data()
                let span = item.length
                total += span
                return total
            })
            return total
        })
    
    return count
}

const Collect = async(doc) =>{
    let collector = await firestore.collection('Videos').doc(doc).collection('Acts')
    let comments = await collector.onSnapshot(async query=>{
            let throwback = await query.forEach(doc=>{
                let filter = doc.data()
                return filter.comments
            })
            return throwback
        })

    return comments
}

export {Count, Collect}