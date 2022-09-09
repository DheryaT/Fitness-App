import React from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, ComponentProvider} from 'react-native';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";
import { useState } from "react";
import { Pedometer } from 'expo-sensors';
import { Colors } from "react-native/Libraries/NewAppScreen";

const Home = ({navigation, route}) => {

    const [pastStepCount, setNumber] = useState(0);
    
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        setNumber(result.steps);
      },
    );
  

    return(
        <View style={styles.container}>
                        <Text style={styles.Title}>Hi {route.params.user?.email} </Text>

        <View style={styles.steps}>

            <Text style={styles.stepText}>Your Activity:</Text>
            <Text style={styles.stepText}>Steps: {pastStepCount}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        padding: 20,
        backgroundColor: 'rgb(77, 77, 77)',


    },
    steps: {
        alignItems:"center",
        padding: 30,
        backgroundColor: "#D3D3D3",
        borderWidth:3,
        borderRadius:20,
        borderColor:'white'

    },
    Title:{
        fontSize: 22
    },
    stepText:{
        fontSize: 30,
        color:'white'
    },

})
export { Home };