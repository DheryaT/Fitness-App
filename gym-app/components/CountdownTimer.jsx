import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import { faCirclePause } from '@fortawesome/free-regular-svg-icons/faCirclePause'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons/faCirclePlay'

import { Timer } from 'react-native-stopwatch-timer';

const CountdownTimer = ({ navigation }) => {
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(5000);
    const [resetTimer, setResetTimer] = useState(false);

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>WE GOOO JIM</Text>
            <TouchableOpacity title="Start" style={styles.ExitIcon} onLongPress={() => navigation.navigate("Timer")}  ><FontAwesomeIcon icon={faCircleXmark} size={50} /></TouchableOpacity>
            <View style={styles.sectionStyle}>
                <Timer
                    totalDuration={timerDuration}
                    start={isTimerStart}
                    reset={resetTimer}
                    options={options}

                />
                <TouchableHighlight
                    onPress={() => {
                        setIsTimerStart(!isTimerStart);
                        setResetTimer(false);
                    }}>
                    <Text style={styles.buttonText}>
                        {!isTimerStart ? <FontAwesomeIcon icon={faCirclePause} size={50} /> : <FontAwesomeIcon icon={faCirclePlay} size={50} /> }
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        setIsTimerStart(false);
                        setResetTimer(true);
                    }}>
                    <Text style={styles.buttonText}>RESET</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        textAlign: "center",
    },
    ExitIcon: {
        left: "45%",
        top: "75%",
    },
    title: {
        fontSize: 22
    },
    textStyle: {
        fontSize: 30,
        marginLeft: "25%",
        marginTop:"5%",
    },
    buttonText: {
        fontSize: 20,
        marginTop: 30,
        left:'43%',
      },
})
const options = {
    container: {
        backgroundColor: '#000000',
        padding: 5,
        borderRadius: 20,
        left: '5%',
        width: '90%',
        alignItems: 'center',
    },
    text: {
        fontSize: 85,
        color: '#FFF',

    },
};

export { CountdownTimer }; //tes