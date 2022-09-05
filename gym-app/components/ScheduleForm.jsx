import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item, TouchableOpacity} from 'react-native';
import { faChevronDown, faChevronUp, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ScheduleForm = ({editing, setShowForm}) => {


    return(
        <View >
                <View style = {styles.ListItem}>
                    <TextInput style = {styles.input}/>
                </View>
                <Button title= "Cancel" onPress={()=> setShowForm(false)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    Title:{
        fontSize: 22
    },
    ListItem: {
        padding: '5%',
        margin: '5%',
        backgroundColor: 'black',
        borderRadius: '10px',
        borderColor: '',
        alignItems: 'center'
    },
    Header: {
        flex: 1,
        flexDirection: 'row',
        padding: '1%',
        marginBottom: '2.5%'
    },
    HeaderBut: {
        width: '10%'
    },
    HeaderTitle: {
        width: '80%',
        color: 'white', 
        fontSize: 26,
        alignContent: 'center',
        textAlign: 'center'
    },
    input: {
        backgroundColor: "#FFFFFF",
        width: '80%',
        padding: 5,
        fontSize: 16,
        borderRadius: 5,
        margin: 5,
        color: "#000000",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        
    }

})

export { ScheduleForm };