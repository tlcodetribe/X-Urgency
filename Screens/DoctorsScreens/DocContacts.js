/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:05:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 14:22:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { Video, AVPlaybackStatus } from 'expo-av';
import { auth } from '../firebase';
export default function MedicalHome({ navigation }) {
  const Logout = () => {
    auth.signOut()
    setDone(false)
  }
  const videos = [
    {
      id: 1,
      title: "Stroke",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 2,
      title: "Heart-Attack",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 3,
      title: "Epilepsy",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 4,
      title: "CPR",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 5,
      title: "Bleeding",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 6,
      title: "Choking",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 7,
      title: "Drowning",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 8,
      title: "Burn",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
  ];

  const video = React.useRef('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');
  const [status, setStatus] = React.useState({});
  const link = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

  return (
    <View style={styles.contain}>
      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.header}>
          <Text style={{
            fontSize: 36, paddingLeft: 30,
            color: 'turquoise',
            textShadowColor: 'grey', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 1
          }}
          >
            Dr. DoLittle
          </Text>
          <Text style={{
            fontSize: 36, paddingLeft: 30, color: 'red',
            textShadowColor: 'grey', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 1
          }}>In Da House
          </Text>
        </View>
        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <Avatar style={styles.avatar}
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/45.jpg',
            }}
            size="large"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>
      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false} >
        <Card style={styles.menu2}>
          <View style={{ alignItems: 'center' }}>
            {videos.map(vid => (
              <ol >
                <TouchableOpacity onPress={() => { navigation.navigate('Strokes') }}>
                  <Video
                    ref={video}
                    source={{ uri: link }}
                    // useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    style={{
                      width: 315, marginLeft: -
                        40, borderRadius: 25
                    }}
                  />
                  <h4>{vid.title}</h4>
                </TouchableOpacity>
              </ol>
            ))}
          </View>
        </Card  >
      </ScrollView >
      <TouchableOpacity onPress={() => { navigation.navigate('Upload') }}>
        <Text style={{ color: '#F47066' }}>Upload</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    flexDirection: 'column',
    paddingTop: 50
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margingTop: 80,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },

  menu2: {
    width: 355,
    height: 260,
    marginLeft: 10,
    marginTop: 50,
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: {
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

