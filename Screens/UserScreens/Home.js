 import React, { useState, useEffect, useRef } from "react";
 import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Image,
 } from "react-native";
 import { Card } from "react-native-paper";
 import { auth, LoadSet, firestore } from "../../firebase";
 import Header from "../../Components/Header";
 import Menu from "../../Components/Menu";
 import { VideoList } from "../../Components";
 
 export default function Home({ navigation, setMatch }) {
   const [videos, setLoad] = useState(null),
     ref = useRef(null),
     VideoScreen = (data) => {
       let match = data.match
       setMatch(match)
       navigation.navigate("PlayVideo", {data});
     },
     FirstTimeUser = async () =>{
      //  auth.currentUser.updateProfile({
      //    displayName: await firestore.collection("Users").doc(auth.currentUser.uid).get().then(doc=>doc.data().username)
      //  })
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
     Logout = () => {
       auth.signOut();
     };
 
  useEffect(()=>{
    FirstTimeUser()
    // console.log(auth.currentUser.displayName)
  }, [])

  useEffect(() => {
     LoadSet(setLoad);
   }, []);
 
   const [status, setStatus] = React.useState({});
   return (
     <View style={styles.container}>
       <View style={{ width: 295 }}>
         <View
           style={{
             flexDirection: "row",
             alignItems: "flex-end",
             justifyContent: "space-between",
           }}
         >
           <Header />
           
         </View>
 
         <Menu list={videos} setVids={setLoad} />
         {/*---------------------- Video Scroll View--------------------*/}
         {/* <ScrollView style={{height:555}} 
       vertical={true} showsVerticalScrollIndicator={false}> */}
         <Card style={styles.menu2}>
           <View>
             <VideoList videos={videos} VideoScreen={VideoScreen} />
           </View>
         </Card>
         {/* </ScrollView> */}
       </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     backgroundColor: "#fff",
   },
 
   
 
   header: {
     fontWeight: "medium",
     fontSize: 18,
     color: "#F96056",
     paddingTop: 20,
     borderBottomWidth: 3,
     borderColor: "turquoise",
     shadowColor: "grey",
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.4,
     elevation: 1,
   },
 
   avatar: {
     width: 70,
     height: 70,
     borderRadius: 50,
     borderBottomWidth: 3,
     borderColor: "turquoise",
     shadowColor: "grey",
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.4,
     elevation: 1,
   },
 
   menu: {
     flexDirection: "row",
     width: 320,
     marginTop: 20,
     borderRadius: 15,
   },
   menu2: {
     width: 320,
     height: 520,
     borderRadius: 15,
     shadowOffset: {},
     shadowOpacity: 0.8,
     shadowRadius: 3.84,
     elevation: 5,
   },
   categoryListText: {
     paddingLeft: 15,
     fontSize: 17,
     fontWeight: "bold",
   },
 
   vidTitle: {
     fontSize: 16,
     fontWeight: "bold",
   },
 
   tag: {
     paddingVertical:2,
     fontSize: 12,
   },
 });
 