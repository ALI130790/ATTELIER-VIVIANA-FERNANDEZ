import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestone"

const firebaseConfig = {
  apiKey: "AIzaSyAJvqKb5wpY1HeeeqW0F3rhVMEXwOAISMo",
  authDomain: "atelier-viviana-fernandez.firebaseapp.com",
  projectId: "atelier-viviana-fernandez",
  storageBucket: "atelier-viviana-fernandez.appspot.com",
  messagingSenderId: "353471898816",
  appId: "1:353471898816:web:b80b40d86c340a996b7925"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export default db