import React, { useRef, useEffect } from 'react'
import { View, StyleSheet } from "react-native"
import { gsap } from 'gsap'

const HeartBeat = () => {
    const dot = useRef();
    const tl = useRef();
    const Run = () => {
    }
    useEffect(() => {
        setInterval(() => {
            tl.current = gsap.timeline()
                .to(dot.current, {
                    marginLeft: '+=40%',
                    opacity: 1,
                    duration: 0.3
                })
                .to(dot.current, {
                    marginLeft: '+=10%',
                    marginTop: "-=160",
                    opacity: 1,
                    duration: 0.10
                })
                .to(dot.current, {
                    marginLeft: '+=10%',
                    marginTop: "+=320",
                    opacity: 1,
                    duration: 0.05
                })
                .to(dot.current, {
                    marginLeft: '+=10%',
                    marginTop: "-=160",
                    opacity: 1,
                    duration: 0.10
                })
                .to(dot.current, {
                    marginLeft: '+=40%',
                    opacity: 1,
                    duration: 0.3
                })
                .to(dot.current, {
                    marginLeft: '+=20%',
                    opacity: 0,
                    duration: 0.3
                })
                .to(dot.current, {
                    marginLeft: '-=130%',
                    opacity: 0,
                    duration: 0.3
                })
        }, 3000)
    })
    return (
        <View>
            <View style={styles.dot1} ref={dot} />
            {/* <View style={[styles.dot1, styles.dot2]}  ref={dotf}/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    dot1: {
        position: 'absolute',
        backgroundColor: "#000",
        width: 20,
        height: 20,
        marginLeft: -30,
        borderRadius: 50,
        marginTop: 100
    },
    dot2: {
        opacity: 0.9,
        marginLeft: -30,
    }
    // image:{
    //     width: 100,
    //     height: 100,
    //     backgroundColor: '#000'
    // }
})
export { HeartBeat }