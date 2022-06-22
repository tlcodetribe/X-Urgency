/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 08/11/2021 - 10:27:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { UploadVideo } from '../../firebase'

export default function UploadVideo({ navigation }) {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
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
  };

  // let openShareDialogAsync = async () => {
  //   if (!(await Sharing.isAvailableAsync())) {
  //     alert(`Uh oh, sharing isn't available on your platform`);
  //     return;
  //   }

  //   await Sharing.shareAsync(selectedImage.localUri);
  // };
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={() => { Upload(selectedImage.localUri) }} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        To upload a Video from your phone, just press the button below!
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 850,
  },
  imgContainer: {
    alignItems: 'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    paddingTop: 150, 
  }, 
  logo: {
    width: 270,
    height: 270,
    marginLeft: 20,
    marginTop: 20,
  },
  thumbnail: {
    width: 300,
    height: 300,
    marginTop: 100,
    resizeMode: 'contain',
  },
  button1: {
    backgroundColor: '#F47066',
    padding: 20,
    marginTop: 30,
    marginLeft: 20, 
    borderRadius: 5,  
  },
  button: {
    backgroundColor: '#F47066',
    padding: 20,
    marginTop: 30,
    borderRadius: 5,  
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff', 
  },
});
