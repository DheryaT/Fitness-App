import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";


export const setDbUser = async (object) => {

    await setDoc(doc(db, "users", `${auth.currentUser.email}`),
        object,
        { merge: true }
    )
    
}