// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDisI45qQj-X3HbhkQDnSdwVbE7wcsPXaw",
    authDomain: "react-a87a1.firebaseapp.com",
    projectId: "react-a87a1",
    storageBucket: "react-a87a1.appspot.com",
    messagingSenderId: "479735214624",
    appId: "1:479735214624:web:2a7b14b7e18b40c3a84245"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);  //functionality for autitication
export const FirebaseDb = getFirestore(FirebaseApp);