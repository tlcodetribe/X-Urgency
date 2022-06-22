import { auth } from "../config"
const handleResetPassword = (email) => {
    auth.sendPasswordResetEmail(email)
        .then(() => alert("check your email"))
        .catch(err => {
            console.log(err)
        })
}
export { handleResetPassword }