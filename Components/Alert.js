import React from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const AlertNote = ({ modalVisible, setModalVisible, msg, excess }) => {
    const Press = () => {
        excess ? excess(true) : null
        setModalVisible(false)
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <Pressable style={styles.backdrop} onPress={() => setModalVisible(false)} ></Pressable>
            <View style={styles.modal}>
                <View style={styles.alertBox}>
                    <Text style={styles.text}>{msg}</Text>
                    <TouchableOpacity style={styles.button} onPress={Press}>
                        <Text style={styles.btnText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...Platform.select({
            ios: {
                backgroundColor: "#000000",
                opacity: 0.3
            },
            android: {
                backgroundColor: "#232f34",
                opacity: 0.32
            },
            web: {
                backgroundColor: '#000',
                opacity: 0.3
            },
            default: {
                backgroundColor: '#000',
                opacity: 0.3
            }
        })
    },
    alertBox: {
        backgroundColor: '#F47066',
        width: '80%',
        height: 250,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#fff'
    },
    button: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 40,
        marginTop: 20,
        borderRadius: 25,
    },
    btnText: {
        fontSize: 15,
        color: '#F47066'
    }
})
export { AlertNote }