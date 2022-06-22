import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { AuthScreens, DoctorsScreens, UserScreens } from "../../Screens";
import { firestore, auth } from "..";

const Check = ({ details, id }) => {

    const [statement, setStatement] = useState(null)
    const [busy, setBusy] = useState(true)
    const Main = () =>{
        firestore.collection("Doctors").doc(id).set({
                Branch:details.Branch,
                Contact:details.Contact,
                Qualification:details.Qualification,
                Specilization:details.Specilization,
                verified:details.verified,
            })
                .then(doc => {
                    setStatement(true)
                    setBusy(false)
                })
    }
    details? (
        useEffect(() => {
            Main()
            return Main()
        }, [])
    ) : (
        useEffect(() => {
            firestore.collection("Doctors").doc(id).get()
                .then(doc => {
                    setStatement(doc.exists)
                    setBusy(false)
                })

        }, [])
    )

    // console.log(What)
    return (
        busy ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        ) : (
            statement ? (
                <DoctorsScreens />
            ) : (
                <UserScreens />
            )
        )
    )

}

const Detector = ({ id }) => {

    const [details, setDetails] = useState(null)

    return (
        id ? (
            <Check id={id} details={details}/>
        ) : (
            <AuthScreens setDetails={setDetails} />
        )
    )

}

const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { Detector }