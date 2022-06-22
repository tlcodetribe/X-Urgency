import { auth } from "..";
const Exit = () => {
    auth.signOut()
        .then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
}
export default Exit;