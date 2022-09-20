
import firebaseConfig from "./FirebaseConfigeration";
import { initializeApp } from "firebase/app";


const InitializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default InitializeAuthentication