/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 12:33:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
export default function Button({ name }) {
  return (
    <TouchableOpacity style={styles.signIn}>
      <Text style={{ color: '#fff' }}>{name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  signIn: {
    height: 50,
    width: 200,
    marginLeft: 85,
    marginTop: 45,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
