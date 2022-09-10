import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";


export const setDbUser = async (object) => {

    await setDoc(doc(db, "users", `${auth.currentUser.email}`),
        object,
        { merge: true }
    )

}

export const getDbUser = async () => {
    const docRef = doc(db, "users", `${auth.currentUser?.email}`);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}