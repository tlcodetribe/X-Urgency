import { auth } from "../config"
// import { alertNote } from "../../Components"
const handleSignIn = (email, password, setMessage) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setMessage("Welcome back")
            
        })
        .catch(err => {
            switch (err.code) {
                case "auth/wrong-password":
                    setMessage("Your password is incorrect")
                    break;
                case "auth/user-not-found":
                    setMessage("User not found")
                    break;
                case 'auth/invalid-email':
                    setMessage("Invalid email address")
                    break
            }
        })
}
export { handleSignIn }