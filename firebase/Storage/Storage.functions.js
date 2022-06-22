import { storage, app, auth, firestore } from '../config'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid'

var atob = require('atob')

const Collect = async (doc, SetCollection, Count) => {
    var count
    var set = []
    await firestore.collection('Videos').doc(doc).collection('Acts')
        .onSnapshot(query=>{
            query.forEach(async doc=>{
                let locator
                let user
                let comment
                let time
                let load = []

                if(doc.data().comments !== undefined){
                    if(doc.data().comments[0] !== null)
                        count = doc.data().comments.length
                }

                if(doc.data().comments !== undefined){
                    if(doc.data().comments[0] !== null){
                        for(var i = 0; i < doc.data().comments.length; i++){
                            locator = doc.data().ref
                            user = await firestore.collection("Users").doc(locator).get().then(doc=>doc.data().username)
                            comment = doc.data().comments[i].comment
                            time = doc.data().comments[i].time.toDate()
                            load = [...load, { user, comment, time }]
                        }
                    }
                }
                set = [...set, ...load]
                return { set , count}
            })
            SetCollection(set)
            Count(count)
        })
}

const Post = (comment, video) =>{
    let time = new Date()
    firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).get()
        .then(doc=>{
            if(doc.data().comments[0] !== null){
                firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
                    comments: [...doc.data().comments, {  comment, time}]
                })
            }
            else{
                firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
                    comments: [{  comment, time }]
                })
            }
        })
}
const LoadSet = (Load, query) => {

    var content = []
    var i = 0
    var getLink
    var data = firestore.collection('Videos')
    const getTimeFrame = (date) =>{
        let today = new Date()
        let frame
        let frag
        if(today.getFullYear() === date.getFullYear()){
            if(today.getMonth() === date.getMonth()){
                if(date.getDay() !== today.getDay()){
                    if(today.getDate() === date.getDate()){
                        if(today.getHours() === date.getHours()){
                            if(today.getMinutes() === date.getMinutes()){
                                if(today.getSeconds() === date.getSeconds()){
                                    frame = "Now"
                                }else{
                                    frame = "A few seconds ago"
                                }
                            }else{
                                frame = (today.getMinutes() - date.getMinutes()) !== 1?(today.getMinutes() - date.getMinutes()) +" minutes ago." : (today.getMinutes() - date.getMinutes()) +" minute ago."
                            }
                        }else{
                            frame = (today.getHours() - date.getHours()) !== 1?(today.getHours() - date.getHours()) +" hours ago." : (today.getHours() - date.getHours()) +" hour ago."
                        }
                    }else{
                        frame = (today.getDate() - date.getDate()) !== 1?(today.getDate() - date.getDate()) +" days ago." : (today.getDate() - date.getDate()) +" day ago."
                    }
                }else{
                    frame = ((today.getDate() - date.getDate())/7) !== 1?((today.getDate() - date.getDate())/7) + " weeks ago." : ((today.getDate() - date.getDate())/7) + " weeks ago."
                }
            }else{
                frame = (today.getMonth() - date.getMonth()) !== 1?(today.getMonth() - date.getMonth()) +" months ago." : (today.getMonth() - date.getMonth()) +" month ago."
            }
        }else{
            if(((date.getMonth()+1)-(today.getMonth()+1) >= 1)){
                frag = ((date.getMonth()+1)-(today.getMonth()+1))
                frag = 12 - frag
                frame = frag !== 1?frag + " months ago." : frag + " months ago."
            }else{
                frame = (today.getFullYear() - date.getFullYear()) + " years ago"
            }
        }
        return frame
    }

    query?(
        storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(async itemRef => {
                
                var views = 0
                views = await data.doc(itemRef.name.split('.')[0]).collection('Acts').where("viewed", "==", true).get()
                    .then(doc=>{
                        doc.forEach(item=>{
                            item?views+=1:null
                            return views
                        })
                        return views
                    })
                getLink = itemRef.getDownloadURL().then(url => url)
                let link = await getLink
                let find = await data.doc(itemRef.name.split('.')[0]).get().then(data => data.data())
                let name = find.title
                let match = find.match
                let owner = find.owner
                let firestore = itemRef.name.split('.')[0]
                let description = find.description
                let tag = find.tag
                let dateAdded = find.added.toDate()
                let stamp = getTimeFrame(dateAdded)
                content = [...content, { id: i++, url: link, title: name, description, stamp, owner, firestore, tag, match, views}]
                content = content.filter(item=>item.tag===query)
                Load(content)
            })
        })
        .catch(err => {
            return null
        })

    ):(
    storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(async itemRef => {
                var views = 0
                views = await data.doc(itemRef.name.split('.')[0]).collection('Acts').where("viewed", "==", true).get()
                    .then(doc=>{
                        doc.forEach(item=>{
                            item?views+=1:null
                            return views
                        })
                        return views
                    })
                getLink = itemRef.getDownloadURL().then(url => url)
                let link = await getLink
                let find = await data.doc(itemRef.name.split('.')[0]).get().then(data => data.data())
                let name = find.title
                let owner = find.owner
                let firestore = itemRef.name.split('.')[0]
                let description = find.description
                let match = find.match
                let tag = find.tag
                let dateAdded = find.added.toDate()
                let stamp = getTimeFrame(dateAdded)
                content = [...content, { id: i++, url: link, title: name, description, stamp, owner, firestore, tag, match, views}]
                Load(content)
            })
            
        })
        .catch(err => {
            return null
        })
    )
}

const UploadVideo = async (uri, title, description, cat, Log) => {

    var id = uuidv4()
    var byteString = atob(uri.split(',')[1])
    var MIMEstring = uri.split(',')[0].split(':')[1].split(';')[0]

    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }

    var bb = new Blob([ab], { type: MIMEstring })
    var upload = storage.ref().child(`${id}.mp4`).put(bb)

    firestore.collection('Videos').doc(id).set({
        title: title,
        tag: cat,
        ref: await auth.currentUser.uid,
        description: description,
        added: new Date()
    })

    upload.on('state_changed',
        snapshot => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            Log(progress)
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    // console.log("Task paused")
                    break
                case firebase.storage.TaskState.RUNNING:
                    // console.log("Task running")
                    break
            }

        },
        err => {
            console.log(err)
        })
}

export { LoadSet, UploadVideo, Collect, Post }
