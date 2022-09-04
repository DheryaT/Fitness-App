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
            countdown: {
                rest: 10,
                sets: 15
            },
            max: {
                bench: 10
            }

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