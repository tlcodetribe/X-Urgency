import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export const ProgressBar = ({ status }) => {

    const [inner, setInner] = useState({
        width: `${status}%`,
        height: 15,
        backgroundColor: '#F47066'
    })

    useEffect(() => {
        console.log(status)
        setInner({
            width: `${status}%`,
            height: 15,
            backgroundColor: '#F47066'
        })
    }, [status])
    return (
        <View style={styles.outer}>
            <View style={inner}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    width: '100%',
    height: 15,
    backgroundColor: 'transparent'
})