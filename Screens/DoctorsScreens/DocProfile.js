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
import { View, StyleSheet, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { auth } from '../../firebase';
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
      <View style={{ marginTop: 50, marginLeft: 10 }}>
        <Avatar style={styles.avatar}
          source={{
            uri: 'https://randomuser.me/api/portraits/men/28.jpg',
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    height: 850,
  },
  textTitle: {
    color: 'red',
    fontSize: 25,
    marginTop: 5,
  },
  textTitle2: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 5,
  },
  box: {
    flexDirection: 'row',
  },
  tab: {
    paddingLeft: 5,
    width: 380,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margingTop: 80,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    elevation: 1,
  },
  words: {
    width: 250,
    textAlign: 'center',
    alignSelf: 'center'
  },
});

