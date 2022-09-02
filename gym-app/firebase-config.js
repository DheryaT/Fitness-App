// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJLWOCNp7CHDIFEuN-apdFHfRsgMeLCx0",
  authDomain: "gym-app-5ab44.firebaseapp.com",
  projectId: "gym-app-5ab44",
  storageBucket: "gym-app-5ab44.appspot.com",
  messagingSenderId: "847146779193",
  appId: "1:847146779193:web:54ba5857392e7cb2e8c3e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);