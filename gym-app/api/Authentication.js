import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";


export const registerFunction = async (auth,
  registerEmail,
  registerPassword,
  username,
  setError) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    ); 
   
    await setDoc(doc(db, "users", `${registerEmail.toLowerCase()}`), 
    {
      name: username,
      schedule: [],
      preset: [],
      calchistory: [],
      mealplans: [],
    },)
  
  } catch (error) {
    alert("Email already in use")
    console.log(error)
  }
};

export const loginFunction = async (auth,
  loginEmail,
  loginPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
  } catch (error) {
    alert("Error! Incorrect User/Pass")
    console.log(error.message);
  }
};

export const logoutFunction = async (auth) => {
  await signOut(auth);
};