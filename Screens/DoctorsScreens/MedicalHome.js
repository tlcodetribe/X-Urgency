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
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { Video, } from 'expo-av';
import { auth, LoadSet, firestore } from "../../firebase";
import { ProgressBar } from '../../Components';
import { VideoList } from "../../Components";

export default function MedicalHome({ navigation, progress, Log, setMatch }) {
  const [videos, setLoad] = useState(null)
  const Logout = () => {
    auth.signOut();
    setDone(false);
  },
  FirstTimeUser = async () =>{
    await firestore.collection("Users").doc(auth.currentUser.uid).get().then(doc=>doc.exists)?(
      null
    ):(
   firestore.collection("Users").doc(auth.currentUser.uid).set({
     username: auth.currentUser.displayName,
     doctor: false,
     email: auth.currentUser.email,
     cred: null
   })
   )
  },
  VideoScreen = (data) => {
    let match = data.match
    setMatch(match)
    navigation.navigate("PlayVideo", {data});
  };

  useEffect(()=>{
    FirstTimeUser()
  }, [])

  useEffect(() => {
    LoadSet(setLoad);
  }, []);

  const [status, setStatus] = useState({}),
    [loading, setLoading] = useState(null);
  const link = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

  useEffect(()=>{
    if(progress === 100)Log(null)
  },[progress])

  return (
    <View style={styles.contain}>
      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 36,
              paddingLeft: 30,
              color: "turquoise",
              textShadowColor: "grey",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 1,
            }}
            onPress={Logout}
          >
            Dr. DoLittle
          </Text>

          <Text
            style={{
              fontSize: 36,
              paddingLeft: 30,
              color: "red",
              textShadowColor: "grey",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 1,
            }}
          >
            In Da House
          </Text>
        </View>
        {progress?<ProgressBar status={progress}/>: null}

        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Doctor') }}>
            <Avatar
              style={styles.avatar}
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/men/45.jpg",
              }}
              size="large"
            />

            <Badge
              status="success"
              containerStyle={{ position: "absolute", top: -4, right: -4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*---------------------- Video Scroll View--------------------*/}
      {loading ? <ProgressBar status={loading} /> : null}
      <Card style={styles.menu2}>
        <View>
          <VideoList videos={videos} VideoScreen={VideoScreen} />
        </View>
      </Card>
      <TouchableOpacity
        style={styles.btnUpload}
        onPress={() => {
          navigation.navigate("Upload");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 26 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  header: {
    flexDirection: 'column',
    paddingTop: 50,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 55, 
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },
  menu2: {
    width: 355, 
    height: 550,
    marginLeft: 10,
    marginTop: 50,
    borderRadius: 15,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  btnUpload: { 
    backgroundColor: '#F47066',
    height: 40,
    width: 40,
    borderRadius: 50, 
    textAlign: 'center',
    marginLeft: 290, 
    marginTop: 15        
  },
});