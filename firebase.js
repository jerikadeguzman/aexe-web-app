// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref } from "firebase/storage";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJ9cRIz5vjNbSX8BF_vsoNA1YOP4lgp74",
  authDomain: "aexe-b0bf9.firebaseapp.com",
  databaseURL: "https://aexe-b0bf9-default-rtdb.firebaseio.com",
  projectId: "aexe-b0bf9",
  storageBucket: "aexe-b0bf9.appspot.com",
  messagingSenderId: "920746655869",
  appId: "1:920746655869:web:a4c69f1312e71a6b5df114",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);

// Storage
export async function upload(file, currentUser, getDownloaddURL) {
  const fileref = ref(storage, currentUser.uid + '.png');
  getDownloaddURL(true);
  const snapshot = await uploadBytes(fileref, file);
  getDownloaddURL(false);
  alert("Uploaded file!");
}

