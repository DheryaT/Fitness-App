// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDppvDI-MOGHPEgQl_VDjFR60rEMMkFn3o",
  authDomain: "gymappside.firebaseapp.com",
  projectId: "gymappside",
  storageBucket: "gymappside.appspot.com",
  messagingSenderId: "603543289718",
  appId: "1:603543289718:web:6d6d82507cdb6005fe8457",
  measurementId: "G-BJRB53TCH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);