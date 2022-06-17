// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_Z9sqoJwGusY7qBm8dNNIB5qODmdbuBs",
    authDomain: "jobtask-6f5c6.firebaseapp.com",
    projectId: "jobtask-6f5c6",
    storageBucket: "jobtask-6f5c6.appspot.com",
    messagingSenderId: "513347926003",
    appId: "1:513347926003:web:1a0eb9c2d42bcc19534486",
    measurementId: "G-DP7MHGVHGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;