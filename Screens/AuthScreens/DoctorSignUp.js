/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 26/10/2021 - 11:55:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/10/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { handleDoctorSignUp } from '../../firebase';
import { AlertNote } from '../../Components/Alert';

export default function DoctorSignUp({ navigation, setDetails }) {

    const [email, setEmail] = useState(""),
        [name, setName] = useState(""),
        [surname, setSurname] = useState(""),
        [qualification, setQualification] = useState(""),
        [specialization, setSpecialization] = useState(""),
        [branch, setBranch] = useState(""),
        [contactdetails, setContactDetails] = useState(""),
        [password, setPassword] = useState(""),
        [confirmpassword, setConfirmPassword] = useState(""),
        [displayModal, setDisplayModal] = useState(false),
        [message, setMessage] = useState(""),
        [visibleStatusBar, setVisibleStatusBar] = useState(false),

    changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar);
    },

   DoctorRegister = () => {
    if (password !== confirmpassword) {
      setMessage("Password Doesn't Match")
      // setDisplaModal(true)
    } else {
      handleDoctorSignUp(email, password, name, confirmpassword + " " + surname, qualification, specialization, branch, contactdetails, setEmail, setPassword, setConfirmPassword, setMessage)
      setDisplaModal(true)
    }
  }

  return (
    <View style={styles.container}>
      <AlertNote
        modalVisible={displayModal}
        setModalVisible={setDisplayModal}
        msg={message}
      />

      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: "#fff", fontSize: 28, marginLeft: 8 }}>
          {" "}
          X-urgency
        </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 5 }}>
          Doctor SignUp
        </Text>
      </View>

      {!visibleStatusBar ? (
      <View>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Name"
                placeholder="Name"
                onChangeText={(text) => setName(text)}
              />
            </View>
          </Card>
          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Surname"
                placeholder="Surname"
                onChangeText={(text) => setSurname(text)}
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Email"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Password"
                placeholder="Password"
                onChangeText={(text) => setContactDetails(text)}
              />
            </View>
          </Card>
          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Confirm password"
                placeholder="Confirm password"
                onChangeText={(text) => setContactDetails(text)}
              />
            </View>
          </Card>

          <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.signIn} onPress={() => {changeVisibilityStatusBar(!visibleStatusBar)}}>
            <Text style={{ color: "#fff" }}>{`NEXT`} </Text>
          </TouchableOpacity>
        </View>

          </View>
          ) : (
            <View>
            <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Specialization"
                placeholder="Specialization"
                onChangeText={(text) => setSpecialization(text)}
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Qualification"
                placeholder="Qualification"
                onChangeText={(text) => setQualification(text)}
              />
            </View>
          </Card>
          
          
          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Branch"
                placeholder="Branch"
                onChangeText={(text) => setBranch(text)}
              />
            </View>
          </Card>
          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Contact Details"
                placeholder="Contact Details"
                onChangeText={(text) => setContactDetails(text)}
              />
            </View>
          </Card>

          <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.signIn} onPress={DoctorRegister}>
            <Text style={{ color: "#fff" }}>{`SIGNIN`} </Text>
          </TouchableOpacity>
        </View>

          </View>
          )}       


        
       
        
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#fff',
    height: 850
  },
  card: {
    backgroundColor: "#F47066",
    width: 325,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heartIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  header: {
    paddingTop: 10,
  },
  txtField: {
    width: 285,
    height: 35,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: "lightgrey",
    paddingLeft: 10,
  },
  txtCards: {
    backgroundColor: "lightgrey",
    width: 285,
    height: 40,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#F47066'
  },
  signIn: {
    height: 50,
    width: 200,
    marginTop: 280,
    borderRadius: 10,
    backgroundColor: "#F47066",
    alignItems: "center",
    justifyContent: "center",
  },

});
