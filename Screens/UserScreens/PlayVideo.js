/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 09:30:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { Video, } from 'expo-av';
import { Likes } from '../../firebase/Functions/Likes'
import { Dislikes } from '../../firebase/Functions/Dislikes'
import { auth, firestore, Collect, Post, ShareItem } from '../../firebase';
import { Comments } from '../../Components';

export default function VideoScreen({ navigation, route}) {

  const {data} = route.params
  const [userName, setUserName] = useState(data.owner)
  const [videoPlay, setVideoPlay] = useState(data.url)
  const [videoVisible, setVideoVisible] = useState(true)
  const [count, setCount] = useState(0)
  const refrence = useRef(data.url)
  const [info, setInfo] = useState() 
  const [comments, setComments] = useState([]),
    [comment, setComment] = useState(""),
    [visibleStatusBar, setVisibleStatusBar] = useState(false),
    changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar);
    },
    changeStyleStatusBar = () => {
      const styleId = styleTypes.indexOf(styleStatusBar) + 1;
      if (styleId === styleTypes.length) {
        return setStyleStatusBar(styleTypes[0]);
      }
      return setStyleStatusBar(styleTypes[styleId]);
    },
    addAct = async () => {
      let metadata = firestore.collection('Videos').doc(data.firestore).collection('Acts')
      let found = (await metadata.doc(auth.currentUser.uid).get()).exists
      found ? (
        null
      ) : (
        metadata.doc(auth.currentUser.uid).set({
          liked: false,
          disliked: false,
          comments: [null],
          ref: auth.currentUser.uid
        })
      )
    },
    Navigate = async() =>{
      let match = data.match
      navigation.navigate('Doctor', {match}) 
    };

  useEffect(() => {
    addAct()
  }, [])

  useEffect(()=>{
    Collect(data.firestore, setComments, setCount)
  }, [])
  
  return (
    <View style={styles.contain}>
      <View style={{ width: 315, marginLeft: 10, marginTop: 50 }}>
        <Video
          ref={refrence}
          source={{ uri: videoPlay }}
          useNativeControls
          resizeMode="contain"
          isLooping
          style={{ borderRadius: 25, width: 350, height: 180, }}
        />
      </View>

      <View style={styles.descriptionContainer}>
        {!visibleStatusBar ? (
          <View>
            <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>
              <TouchableOpacity
                title="topNav"
                onPress={() => changeVisibilityStatusBar()}>
                <AntDesign
                  name="downcircle"
                  size={18}
                  color="black"
                  style={styles.dropDown}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 10, paddingLeft: 35 }}>
              {data.views} views - {data.stamp}
            </Text>

            <Card
              style={{
                borderColor: 'black',
                width: 315,
                marginTop: 5,
                marginLeft: 25,
              }}>
              <View
                style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3 }}>
                <View>
                  <Likes data={data.firestore} />
                </View>

                <View style={{ marginLeft: 32, marginTop: 3 }}>
                  <Dislikes data={data.firestore} />
                </View>

                <TouchableOpacity style={{ marginLeft: 40 }} onPress={()=>ShareItem(data.url)}>
                  <FontAwesome5
                    name="share"
                    size={20}
                    color="black"
                    style={{ marginLeft: 11 }}
                    onPress={()=>ShareItem(data.url)}
                  />
                  <Text style={{ paddingTop: 5 }}> Share </Text>
                </TouchableOpacity>

                <View style={{ marginLeft: 32 }}>
                  <Entypo
                    name="save"
                    size={20}
                    color="black"
                    style={{ marginLeft: 8 }}
                  />
                  <Text style={{ paddingTop: 5 }}> Save </Text>
                </View>
              </View>
            </Card>

            <View
              style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row' }}>
              <Avatar
                rounded
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
                size="medium"
                onPress={Navigate}
              />
              <Text style={{ paddingTop: 15, paddingLeft: 15 }} >
                {data.owner}
              </Text>
            </View>

              <Card style={[styles.txtCards, styles.shadowProp]}>
                <View style={{ flexDirection: 'row'}}>   
                  <TextInput
                    style={styles.comment}
                    name="comment"
                    placeholder="Write a comment" 
                  onChangeText={text=>setComment(text)}
                  />
                  <View style={{width: 90, height: 70, borderRadius: 25, marginTop: 7, marginRight: 10,}}>
                  <Button color="#F47066" onPress={()=>Post(comment, data.firestore)} title='Comment'
                  />
                  </View>
                </View> 
              </Card>

          </View>
        ) : (
          //Hidden Description  

          <View>
            <Card
              style={{
                width: 315,
                height: 300,
                marginLeft: 10,
                borderRadius: 20,
                backgroundColor: '#fff',
                marginTop: 15,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Description:
                  <Text>
                    {data.description}
                  </Text>
                </Text>

                <TouchableOpacity onPress={() => changeVisibilityStatusBar()}>
                  <AntDesign
                    name="closecircle"
                    size={18}
                    color="black"
                    style={{ marginLeft: 182 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 10, paddingLeft: 50, paddingTop: 5 }}>
                {data.views} views - {data.stamps}
              </Text>
              <Card
                style={{
                  marginTop: 10,
                  marginLeft: 12,
                  width: 255,
                }}>
                <Text>Stroke Emergency Video</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>
                {data.views} Views
                </Text>
              </Card>
              <View
                style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row' }}>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                  }}
                  size="medium"
                />
                <Text>{userName}</Text>
              </View>
            </Card>
          </View>
        )}
      </View>
      {/* <Comments video={data.firestore} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={{ height: 120, width: 315, marginTop: 5, marginLeft:15 }}>
          <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Comments: {count}</Text>

{comments.map((item, index) =>
            <Card style={{
              backgroundColor: 'silver', height: 100,
              marginTop: 10
            }}
            key={index}>
              <SafeAreaView style={{ paddingLeft: 20, paddingTop: 10 }}>
              <Text><Text style={{ color: 'red' }}>{item.user}</Text>: {item.comment}</Text>
              </SafeAreaView>
              </Card>
            )}

        </Card>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  dropDown: {
    marginLeft: 110,
  },
  txtCards: {
    marginLeft: 20,
    backgroundColor: 'lightgrey',
    width: 315,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1, 
    borderColor: '#F47066'
  },

  comment: {
    width: 260, 
    height: 38,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  }, 

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  comment: {
    width: 260,
    height: 38,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

