import React from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button} from 'react-native';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";

const Home = ({navigation, route}) => {

    const sendUser = async () => {
        await setDoc(doc(db, "users", `${route.params.user?.email}`), {
            name: `${route.params.user?.email}`,
            sched: { day: "back"}
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Title}>Hi {route.params.user?.email} {"\n"}Let's check your activity</Text>
            <Button title= "Hello" onPress={sendUser}></Button>
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