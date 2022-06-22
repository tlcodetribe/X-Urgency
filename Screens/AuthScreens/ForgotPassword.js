/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:18:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { handleResetPassword } from '../../firebase'

export default function ForgotPassword({ navigation }) {
  const forgotPassword = () => {
    handleResetPassword("lindiwe.mpondo@gmail.com")
  }
  const Exit = () => {
    alert("Successfully logged out")
  }
  return (
    <View >
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={76} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 20 }}> X-urgency </Text>
      </Card>
      <View style={styles.header} >
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5, marginLeft: 110 }}>Reset Password</Text>
      </View>
      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={20} color="black" style={{ marginTop: 4, marginLeft: 5 }} />
            <TextInput style={styles.txtUser}
              name='username' placeholder='Username'
            />
          </View>
        </Card>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 2, }} />
            <TextInput style={styles.txtPass}
              name='password' placeholder='New Password'
            />
          </View>
        </Card>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 2, }} />
            <TextInput style={styles.txtRePass}
              name='password' placeholder='Confirm Password'
            />
          </View>
        </Card>
        <TouchableOpacity style={styles.signIn} onPress={forgotPassword}>
          <Text style={{ color: '#fff' }}>RESET PASSWORD </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signIn} onPress={Exit}>
          <Text style={{ color: '#fff' }}>EXIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    height: 950,
    backgroundColor: '#fff'
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
    marginLeft: 30,
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  header: {
    paddingTop: 5
  },

  txtUser: {
    width: 260,
    height: 35,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: '#ffffff',
    padding: 8,
    paddingTop: 5
  },

  txtPass: {
    width: 260,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5,
    paddingTop: 5
  },

  txtRePass: {
    width: 260,
    height: 50,
    borderRadius: 10,
    border: 0,
    backgroundColor: '#fff',
    padding: 5,
    paddingTop: 5
  },

  txtCards: {
    backgroundColor: '#fff',
    width: 280,
    height: 50,
    borderRadius: 10,
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#F47066',
    marginLeft: 50,
  },

  signIn: {
    height: 50,
    width: 200,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 80,
  },

});