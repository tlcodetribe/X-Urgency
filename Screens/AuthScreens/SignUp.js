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
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleSignUp } from '../../firebase';
import { AlertNote } from '../../Components/Alert';

export default function SignUp({ navigation }) {

  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [ConfirmPassword, setConfirmPassword] = useState(""),
    [displayModal, setDisplayModal] = useState(false),
    [message, setMessage] = useState("")
  const Register = async () => {
    handleSignUp(name, email, password, ConfirmPassword, setMessage)
    setDisplayModal(true)
  }
  return (
    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplayModal} msg={message} />
      
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> X-urgency </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>SignUp</Text>
      </View>

      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtUser}
              name='username' placeholder='Username' onChangeText={text => setName(text)}
            />
          </View>
        </Card>

        <Card style={[styles.txtCards, styles.shadowProp]}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtUser}
              name='eamil' placeholder='Email' onChangeText={text => setEmail(text)}
            />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 8, marginLeft: 4 }} />
            <TextInput style={styles.txtPass}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black"
              style={{ marginTop: 9, marginLeft: 4 }}
            />
            <TextInput style={styles.txtRePass}
              name='password' placeholder='Re-enter Password'
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
        </Card>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={() => { navigation.navigate('Home') }}>
            <Text style={{ color: '#fff' }} >SIGN_UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 850,
    backgroundColor: '#fff',
  },

  card: {
    position: 'absolute',
    backgroundColor: '#F47066',
    width: 325,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  header: {
    paddingTop: 205,
    textAlign: 'center',
  },

  txtUser: {
    width: 220,
    height: 38,
    marginTop: 5,
    paddingLeft: 8,
    paddingTop: 12,
    borderRadius: 10,
    outlineColor: '#fff',
  },

  txtPass: {
    width: 220,
    height: 38,
    marginTop: 5,
    paddingLeft: 8,
    paddingTop: 15,
    borderRadius: 10,
    outlineColor: '#fff',
  },

  txtCards: {
    width: 285,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 75,
    borderWidth: 1,
    borderColor: '#F47066',
  },
  
  signIn: {
    height: 40,
    width: 150,
    marginTop: 45,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

