/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 12:02:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { auth, firestore } from '../firebase'

export default function Header({done}) {

  const [image, setImage] = useState()
  const [initial, setInitial] = useState()
  const getProfile = async () =>{
    let name
    setImage(auth.currentUser.photoURL)
    // name = await firestore.collection("Users").doc(auth.currentUser.uid).get().then(()=>doc.data().username)
    name = auth.currentUser.displayName
    setInitial(name.substring(0,1))
  }
  
  useEffect(()=>{
    getProfile()
    console.log(done)
  }, [])
  return (
    <View style={styles.contain}>
      <View> 
        <TouchableOpacity
            onPress={Logout}>
             <Image
               source={require("../images/logOut.png")}
               style={styles.logoutIMG}
             />
           </TouchableOpacity>
      </View>
      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row', width: 295, marginTop:40, justifyContent: 'flex-start' }}>
        <View >
          <Text style={styles.header}>
            What's your
          </Text>
          <Text style={styles.header}>
            EMERGENCY ?
          </Text>
        </View>
        <View style={{ marginTop: 50, marginLeft: 10 }}>
          {image?(
            <Avatar style={styles.avatar}
            rounded
            source={{
              uri: image,
            }}
            size="large"
          />
          ):(
            <View style={styles.temp}>
              <Text style={styles.temp_text}>
                {initial}
              </Text>
            </View>
          )}
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 15,
    height: 15,
    
  },

  header: {
    flexDirection: 'column',
    color: '#F96056',
    fontSize: 36,
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
  temp:{
    // flex: 1,
    width: 70,
    height: 70,
    borderRadius: 50,
    margingTop: 80,
    backgroundColor: 'turquoise',
    textAlign: 'center',
    justifyContent: 'center'
  },
  temp_text:{
    fontSize:40,
    color: '#fff',
  }
})
