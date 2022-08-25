import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
const CountdownTimer = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text >Timer Display</Text>
            <TouchableOpacity title="Start" style={styles.ExitIcon} onLongPress={() => navigation.navigate("Timer")}  ><FontAwesomeIcon icon={faCircleXmark} size={50}/></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        textAlign:"center",
    },
    ExitIcon:{
        left: "45%",
        top:"75%",
    },
    Title:{
        fontSize: 22
    },

})
export { CountdownTimer }; //tes