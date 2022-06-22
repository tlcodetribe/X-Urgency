import React, {useState, useEffect} from 'react';
import {ScrollView, Text, SafeAreaView, TextInput } from 'react-native';
import {Card} from 'react-native-paper'
import { firestore } from '../firebase';

const Count = async doc =>{

    let count = await firestore.collection('Videos').doc(doc).collection('Acts').where("comments", "!=", null )
        .onSnapshot(query=>{
            let total
            query.forEach(doc=>{
                let item = doc.data()
                let span = item.length
                total+= span
                return total
            })
            return total
        })
    
    return count
}

const Loader = async doc =>{
    let comments = await firestore.collection('Videos').doc(doc).collection('Acts').where("comments", "!=", null )
        .onSnapshot(query=>(query.forEach(doc=>(doc.data()))))
    return comments
}

export const Comments = ({ video }) => {

    const [count, setCount] = useState(Count(video)),
        [comments, setComments] = useState(Loader(video)),
        [user, setUser] = useState(null)

    useEffect(()=>{
        console.log(count)

    },[])

    return (
        <>{
        comments?(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={{ height: 120, width: 315, marginTop: 5, marginLeft: 10 }}>
                <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Comments: {count}</Text>
                <TextInput placeholder="Comment" />
                <Card style={{
                    backgroundColor: 'silver', height: 100,
                    marginTop: 10
                }}>
                    <Text style={{ paddingLeft: 20, paddingTop: 10 }}>
                        <SafeAreaView style={{ color: 'red' }}>{user}</SafeAreaView>: dfhbdnd dgnsgn gfsnxgb
                        dfdbxgb fgbgb fgnjdcg nchgn gnfg gbgf fgfxxfngn xgngfn hnhnhn.
                    </Text>
                </Card>
            </Card>
        </ScrollView>
        ):null
    }</>
    )
}