import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import { firestore, auth } from '..';

function Counter({ video }) {
  const [count, setCount] = useState(0),
    [pressed, setPressed] = useState(false),
    Check = async () => {
      firestore.collection('Videos').doc(video).collection('Acts').where("disliked", "==", true)
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
      thisDislike ? (
        firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
          disliked: false
        }),
        setPressed(!pressed)
      ) : (
        thisLike ? (
          firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
            liked: false,
            disliked: true
          }),
          setPressed(!pressed)
        ) : (
          firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
            disliked: true
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
            name="thumbs-down"
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

const Dislikes = ({ data }) => (
  <Counter video={data} />
);

export { Dislikes }