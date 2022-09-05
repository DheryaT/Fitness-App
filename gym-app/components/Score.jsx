import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";

const Score = () =>{

    
    return (
        <View style = {styles.ScoreBoard}>
            <Text style={styles.header}>
                History:
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ScoreBoard: {
        backgroundColor: 'red',
        alignContent: "center",
        alignItems: "center",
    },
    header: {

    },
})

export { Score };