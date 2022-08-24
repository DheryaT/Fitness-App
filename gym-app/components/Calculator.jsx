import React, {useState} from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const Calculator = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('One Rep Max');
    const [items, setItems] = useState([
    {label: 'One Rep Max', value: 'One Rep Max'},
    {label: 'Strength Level', value: 'Strength Level'}
    ])

    return(
        <View style = {styles.container}>
            <View style = {styles.content}>
                <Text style = {styles.calculatorTitle}>
                    Calculator for
                </Text>
                <DropDownPicker style = {styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme = "DARK"
                />
            </View>
        </View>
    );
}

const styles  = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "black",
    },
    content : {
        backgroundColor: '#171717',
        borderRadius: '5%',
        borderRadius: 10,
        margin: '3%',
        alignItems: "Center",
        alignContent: "Center",
        
    },
    calculatorTitle : {
        alignItems: "Center",
        alignContent: "Center",
        margin: '2%',
        fontSize: 32,
        color: "white",
    },
    dropdown : {
        alignItems: "Center",
        alignContent: "Center",
        color: "white",
        backgroundColor: '#171717',
        borderRadius: '5%',
        fontSize: 32,
        color: "white",
    }
})

export { Calculator }; //tes