import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Socials = ({ text, number }) => {
    return (
        <View style={styles.socials}>
            <Text style={{ textAlign: 'center' }}>{number}</Text>
            <Text style={{ textAlign: 'center' }}>{text}</Text>
        </View>

    )
}

export default Socials
const styles = StyleSheet.create({
    socials: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
})