/**
 * @description      : 
 * @author           : MLab
 * @group            : 
 * @created          : 07/10/2021 - 10:07:05
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/10/2021
 * - Author          : MLab
 * - Modification    : 
 **/
import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import {Card} from 'react-native-paper';
import {FontAwesome, AntDesign, EvilIcons} from '@expo/vector-icons';
import {handleSignIn} from '../../firebase/Auth/SignIn.function'
import {AlertNote} from '../../Components';

export default function SignIn({navigation, setDone}) {
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState("");

  const Login = () => {
    handleSignIn(email, password, setMessage, setDone)
    setDisplaModal(true)
  }
  
  return (
    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#51535D' }}>{`LogIn`}</Text>
      </View>

      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={22} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtUser}
              name='username' placeholder='Username' onChangeText={text => setEmail(text)}
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

        <TouchableOpacity onPress={() => { navigation.navigate('Reset Password') }}>
          <Text style={{ paddingLeft: 180, paddingTop: 10, color: '#F47066' }}>{`Forgot Password?`} </Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Login}>
            <Text style={{ color: '#fff' }}>{`LOGIN`} </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingTop: 5 }}>
            New User?
          </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Sign Up') }}>
            <Text style={{ paddingTop: 5, color: '#F47066' }}> {`SignUp`}</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ paddingTop: 10, textAlign: 'center', justifyContent: 'center' }}>
          Medical Personel?
        </Text>

        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Doctor SignIn') }}>
            <Text style={{ color: '#F47066' }}> {`SignIn`} </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 979,
    backgroundColor: '#fff',
  },
 
  card: {
    backgroundColor: '#F47066',
    width: 325,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    paddingTop: 25,
  },
txtUser: {
    width: 220,
    height: 38,
    marginTop: 5,
    paddingLeft: 8,
    paddingTop: 15,
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
    height: 50,
    width: 200,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
