import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Score = ({ history, expanded, set, clearHist }) => {

    const toggle = () => {
        if (expanded == true) {
            expanded = false;
        }
        else {
            expanded = true;
        }
    }


    return (
        <View style={styles.listItem}>
            <View style={styles.headerContent}>
                <Text style={styles.header}>
                    History:
                </Text>

            </View>
            {history.map((item, index) =>
                <View key={index} style={styles.historyItems}>
                    <View style={styles.lineContainer} key={index}>
                        <Text style={{ color: 'white', fontSize: 20}}>{item.Reps}</Text>
                        <Text style={{ color: 'white', fontSize: 20, justifyContent: 'center'}}>{item.Weight}</Text>
                        <Text style={{ color: 'white', fontSize: 20}}>{item.Max}</Text>
                    </View>
                </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
    },
    headerContent: {
        
    },
    listItem: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'rgb(0, 115, 153)',
        margin: '5%',
        backgroundColor: 'rgb(64, 64, 64)',
        borderRadius: '10px',
        alignItems: 'center',
        shadowOpacity: .5,
        shadowOffset: { width: 10, height: 10 }
    },
    lineContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '1%',
        paddingHorizontal: '1%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        justifyContent: "space-evenly",
    },
    historyItems: {
        flex: 1,
    }
})

export { Score };