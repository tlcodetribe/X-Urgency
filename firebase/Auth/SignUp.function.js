import { firestore } from '..';
import { auth } from '../config'
const handleSignUp = (name, email, password, Confirmpassword, setMessage) => {
    if (password !== Confirmpassword) {
        setMessage("Password Doesn't Match")
    }
    else {
        auth.createUserWithEmailAndPassword(email, password)
            .then(async result=>{
                await result.user.updateProfile({
                    displayName: name
                })
                setMessage("Welcome")
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'auth/invalid-email':
                        setMessage("Invalid email address")
                        break
                    case 'auth/weak-password':
                        setMessage("Password too weak")
                        break
                }
            });
    }
    // setEmail("")
    // setPassword("")
    // setConfirmPassword("")
}

const handleDoctorSignUp = (email, password, name, setMessage) => {

        
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                user.user.updateProfile({
                    displayName:name
                })
                .catch(err=>console.log(err))
                firestore.collection("Users").doc(auth.currentUser.uid).set({
                    user: name,
                    number: number,
                    doctor: false,
                    email: email,
                })
                .then(()=>{
                    firestore.collection("Users").doc(auth.currentUser.uid).collection("cred").doc(auth.currentUser.uid).set({
                        qualification: qualification,
                        specialization: specialization,
                        branch: branch,
                        subcribers: []
                    })
                })
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setMessage("Invalid email address")
                        break
                    case 'auth/weak-password':
                        setMessage("Password too weak")
                        break
                }
            });
}
export { handleSignUp, handleDoctorSignUp }