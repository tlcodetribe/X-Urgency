import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDO12EmJ-c1VihjgzDK2b9NAF5y4-8bdhY",
    authDomain: "x-urgency.firebaseapp.com",
    projectId: "x-urgency",
    storageBucket: "x-urgency.appspot.com",
    messagingSenderId: "605437690069",
    appId: "1:605437690069:web:1340e6ab040e5c637c625c",
    measurementId: "G-K6LBM2CR1G"
})

const auth = app.auth()
const firestore = app.firestore()
const storage = app.storage()
export { app ,auth, firestore, storage }