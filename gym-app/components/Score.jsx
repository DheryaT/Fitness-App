import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, Pressable, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { faArrowTrendUp, faChevronDown, faChevronUp, faPenToSquare, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const Score = ({ history, expanded, clearHist, deleteItem }) => {

    const toggle = () => {
        if (expanded == true) {
            expanded = false;
        }
        else {
            expanded = true;
        }
    }

    
    const rev = () => {
        for(let k = 0 ; k < history.length ; k++){
            history.push(history.shift())
        }
    }

    history.sort(function(a, b){return a.id < b.id})
    return (
        <View style={styles.listItem}>
            <View style={styles.headerContent}>
                <Text style={styles.header}>
                    History:
                </Text>
                <TouchableOpacity style={styles.HeaderBut} onPress={() => clearHist(history)} >
                    <FontAwesomeIcon icon={faTrashCan} size={25} color={'white'}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.HeaderText}>
                <Text style= {styles.headerFontLeft}>Reps</Text>
                <Text style= {styles.headerFontMid}>Weight</Text>
                <Text style= {styles.headerFontRight}>Max</Text>
                <Text style= {styles.headerFontRight}>Remove</Text>
            </View>
            {history.map((item, index) =>
                <View key={index} style={styles.historyItems}>
                    <View style={styles.lineContainer} key={index}>
                        <Text style={{ color: 'white', fontSize: 20}}>{item.Reps}</Text>
                        <Text style={{ color: 'white', fontSize: 20, justifyContent: 'center'}}>{item.Weight}</Text>
                        <Text style={{ color: 'white', fontSize: 20}}>{item.Max}</Text>
                        <TouchableOpacity style = {styles.itemBut}  onPress={() => deleteItem(item.id)}>
                            <FontAwesomeIcon icon={faXmark} size={25} color={'white'}/>
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
    headerFontMid:{
        
        textAlign: 'center',
        color: 'white'
    },
    headerFontLeft:{
        
        textAlign: 'center',
        color: 'white'
    },
    headerFontRight:{
        
        textAlign: 'center',
        color: 'white'
    },
})

export { Score };