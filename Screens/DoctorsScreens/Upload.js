
 import React, { useState } from "react";
 import {
     Image,
     StyleSheet,
     Picker,
     Text,
     TouchableOpacity,
     View,
     TextInput,
 } from "react-native";
 
 import { Card } from "react-native-paper";
 import { UploadVideo } from "../../firebase";
 import * as ImagePicker from 'expo-image-picker';
 
 export default function Clone({ navigation, Log }) {
     const [selectedValue, setSelectedValue] = useState("stroke"),
         [title, setTitle] = useState(),
         [description, setDescpription] = useState(),
         [selectedImage, setSelectedImage] = useState(null),
         openImagePickerAsync = async () => {
             let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
 
             if (permissionResult.granted === false) {
                 alert('Permission to access camera roll is required!');
                 return;
             }
 
             let pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: 'Videos' });
             if (pickerResult.cancelled === true) {
                 return;
             }
 
             setSelectedImage({ localUri: pickerResult.uri });
         },
         Run = () =>{
             openImagePickerAsync();
             selectedImage?(
               UploadVideo(selectedImage.localUri, title, description, selectedValue, Log ),
               navigation.goBack()
               ):null
             
         }
 
     return (
         <View style={styles.container}>
             <Text style={styles.header}>Fill in Info. below:</Text>
 
             <Card style={styles.txtCards}>
                 <View style={{ flexDirection: "row" }}>
                     <TextInput
                         style={styles.txtField}
                         name="username"
                         placeholder="Title"
                         onChangeText={text=>setTitle(text)}
                     />
                 </View>
             </Card>
 
             <Picker
                 selectedValue={selectedValue}
                 style={styles.picker}
                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
             >
                 <Picker.Item label="Stroke" value="stroke" />
                 <Picker.Item label="Heart-Attack" value="heart-attack" />
                 <Picker.Item label="Epilepsy" value="epilepsy" />
                 <Picker.Item label="CPR" value="cpr" />
                 <Picker.Item label="Drowning" value="drowning" />
                 <Picker.Item label="Choking" value="choking" />
                 <Picker.Item label="Java" value="java" />
                 <Picker.Item label="Burns" value="burns" />
             </Picker>
 
             <Card style={styles.txtCards}>
                 <View style={{ flexDirection: "row" }}>
                     <TextInput
                         style={styles.txtField}
                         name="password"
                         placeholder="Description"
                         onChangeText={text=>setDescpription(text)}
                     />
                 </View>
             </Card>
 
             <TouchableOpacity onPress={Run} style={{ marginTop: 30 }}>
                 Upload
             </TouchableOpacity>
         </View>
     );
 }
 
 const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      height: 800
    },
    header: {
      paddingTop: 30,
      fontSize: 28,
      textAlign: "center",
      color: "#F47066",
    },
    paragraph: {
      marginBottom: 350, 
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#F96056'
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: { width: -2,     height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    input1:{
      width: 280,
      height: 40,
      borderRadius: 10,
      marginTop: -280,
      marginLeft: 17,
      padding: 20,
      fontSize: 16,
      borderColor: '#F96056', 
      borderWidth: 1,
      outlineColor: 'transparent',
    },
    input2:{
      width: 280,
      height: 40,
      borderRadius: 10,
      marginTop: -220,
      marginLeft: 17,
      padding: 20,
      fontSize: 16,
      borderColor: '#F96056',
      borderWidth: 1,
      outlineColor: 'transparent',
    },
  });
