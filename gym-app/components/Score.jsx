import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { faArrowTrendUp, faChevronDown, faChevronUp, faPenToSquare, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const Score = ({ history, clearHist, deleteItem }) => {

    history.sort(function (a, b) { return a.id < b.id })
    
    return (
        <View style={styles.listItem}>
            <View style={styles.headerContent}>
                <Text style={styles.header}>
                    History:
                </Text>
                <TouchableOpacity style={styles.HeaderBut} onPress={() => clearHist(history)} >
                    <FontAwesomeIcon icon={faTrashCan} size={25} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.HeaderText}>
                <Text style={styles.headerFontLeft}>Reps</Text>
                <Text style={styles.headerFontMid}>Weight</Text>
                <Text style={styles.headerFontRight}>Max</Text>
                <Text style={styles.headerFontRight}>Remove</Text>
            </View>
            {history.map((item, index) =>
                <View key={index} style={styles.historyItems}>
                    <View style={styles.lineContainer} key={index}>
                        <Text style={{ color: 'white', fontSize: 20, width: '25%', textAlign: "center" }}>{item.Reps}</Text>
                        <Text style={{ color: 'white', fontSize: 20, width: '25%', textAlign: "center" }}>{item.Weight}</Text>
                        <Text style={{ color: 'white', fontSize: 20, width: '25%', textAlign: "center" }}>{item.Max}</Text>
                        <TouchableOpacity style={{ width: '25%' }} onPress={() => deleteItem(item.id)}>
                            <FontAwesomeIcon style={{ marginLeft: '40%' }} icon={faXmark} size={25} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '90%',
        color: 'white',
        fontSize: 26,
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        backgroundColor: 'rgb(51, 51, 51)',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    listItem: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'white',
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
    },
    historyItems: {
        flex: 1,
    },
    HeaderText: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        marginBottom: '2.5%',
        backgroundColor: 'rgb(51, 51, 51)',
        justifyContent: "space-evenly",
        width: '100%',
    },
    headerFontMid: {
        width: '25%',
        textAlign: 'center',
        color: 'white'
    },
    headerFontLeft: {
        width: '25%',
        textAlign: 'center',
        color: 'white'
    },
    headerFontRight: {
        width: '25%',
        textAlign: 'center',
        color: 'white'
    },
})

export { Score };