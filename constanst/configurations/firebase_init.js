// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ9cRIz5vjNbSX8BF_vsoNA1YOP4lgp74",
  authDomain: "aexe-b0bf9.firebaseapp.com",
  projectId: "aexe-b0bf9",
  storageBucket: "aexe-b0bf9.appspot.com",
  messagingSenderId: "920746655869",
  appId: "1:920746655869:web:28b4806195b7e2815df114",
  measurementId: "G-X5QEGNL5LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore_db = getFirestore(app)

export default firestore_db;