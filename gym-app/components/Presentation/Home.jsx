import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, ComponentProvider } from 'react-native';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useState } from "react";
import { Pedometer } from 'expo-sensors';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons/faPersonWalking';
import { faHand } from '@fortawesome/free-solid-svg-icons/faHand';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const getCurrentDate = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + '-' + month + '-' + year;
}
const Home = ({ navigation, route }) => {

    const [pastStepCount, setNumber] = useState(0);

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
        result => {
            setNumber(result.steps);
        },
    );

    return (
        <View style={styles.container}>
            <View style={styles.head}>

                <Text style={styles.Title}>Hi {auth.currentUser?.email}<FontAwesomeIcon icon={faHand} size={30} color={'#a9a9a9'} /> </Text>

            </View>

            <View style={styles.steps}>
                <Text style={styles.stepText}>{getCurrentDate()}</Text>
                <Text style={styles.stepText}>Your Activity today:</Text>
                <Text style={styles.stepText}><FontAwesomeIcon icon={faPersonWalking} size={30} color={'#a9a9a9'} />Steps: {pastStepCount}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'rgb(77, 77, 77)',


    },
    steps: {
        alignItems: "center",
        padding: 30,
        backgroundColor: "#D3D3D3",
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'white',
        marginVertical: '30%',
    },
    head: {
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        width: '100%',
        paddingBottom: 50,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
    },
    Title: {
        fontSize: 30,
        top: '50%',
    },
    stepText: {
        fontSize: 30,
        color: 'white'
    },

})
export { Home };