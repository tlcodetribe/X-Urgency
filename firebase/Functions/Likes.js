import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons'
import { firestore, auth } from '..';

function Counter({ video }) {

  const [count, setCount] = useState(0),
    [pressed, setPressed] = useState(false),
    Check = async () => {
      firestore.collection('Videos').doc(video).collection('Acts').where("liked", "==", true)
        .onSnapshot(query => {
          setCount(0)
          query.forEach(doc => {
            setCount(count + 1)
          })
        })
    },
    Like = async () => {
      let thisLike = await firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).get()
        .then(doc => (doc.data().liked))
      let thisDislike = await firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).get()
        .then(doc => (doc.data().disliked))
      thisLike ? (
        firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
          liked: false
        }),
        setPressed(!pressed)
      ) : (
        thisDislike?(
          firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
            liked: true,
            disliked: false
          }),
          setPressed(!pressed)
        ):(

        firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
          liked: true
        }),
        setPressed(!pressed)
        )
      )
    };

  useEffect(() => {
    Check()
  }, [pressed])

  return (
    <View>

      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={Like}>
          <Entypo
            name="thumbs-up"
            size={20}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <Text style={{ paddingTop: 6 }}> {count}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Likes = ({ data }) => {

  return(
    <Counter video={data} />
  )
};

export { Likes }