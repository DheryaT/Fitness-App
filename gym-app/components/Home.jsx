import React from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button} from 'react-native';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";
import { useState } from "react";

const Home = ({navigation, route}) => {

    const [number, setNumber] = useState(0);
    
    const updateNum = () => {
        setNumber(number + 1)
    }
    

    const sendUser = async () => {
        await setDoc(doc(db, "users", `${route.params.user?.email}`), 
        {
            schedule: 
            [{id: '1', name: "back", workout:[{sets: '1', exercise: 'rows', reps: '12'}, {sets: '3', exercise: 'pull ups', reps: '12'}, {sets: '3', exercise: 'pull ups', reps: '12'}, {sets: '3', exercise: 'pull ups', reps: '12'},{sets: '3', exercise: 'pull ups', reps: '12'}]}, {id: '2', name: "back", workout:[{sets: '1', exercise: 'rows', reps: '12'}]}]

        },
        {merge: true}
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Title}>Hi {route.params.user?.email} {"\n"}Let's check your activity {number}</Text>
            <Button title= "Hello" onPress={sendUser}></Button>
            <Button title= "update" onPress={updateNum}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    Title:{
        fontSize: 22
    },

})
export { Home };