import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import { faCirclePause } from '@fortawesome/free-regular-svg-icons/faCirclePause'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons/faCirclePlay'
import { Timer } from 'react-native-stopwatch-timer';
import { useRoute } from '@react-navigation/native';

const CountdownTimer = ({ navigation }) => {
    const route = useRoute();
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.sectionStyle}>
                <Text style={styles.TextS}> Prepare</Text>
                <Timer
                    totalDuration={route.params.Prepare*1000}
                    start={isTimerStart}
                    reset={resetTimer}
                    options={options}

                />
                <Text style={styles.TextS}> Sets</Text>

                <Timer
                    totalDuration={route.params.Sets*1000}
                    start={isTimerStart}
                    reset={resetTimer}
                    options={options}

                />
                <Text style={styles.TextS}> Work</Text>
                <Timer
                    totalDuration={route.params.Work*1000}
                    start={isTimerStart}
                    reset={resetTimer}
                    options={options}

                />
                <Text style={styles.TextS}> Rest</Text>
                <Timer
                    totalDuration={route.params.Rest*1000}
                    start={isTimerStart}
                    reset={resetTimer}
                    options={options}

                />
                 <Text style={styles.TextS}> Cooldown</Text>
                <Timer
                    totalDuration={route.params.Cooldown*1000}
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
                <TouchableOpacity title="Start" style={styles.ExitIcon} onLongPress={() => navigation.navigate("Timer")}  ><FontAwesomeIcon icon={faCircleXmark} size={50} /></TouchableOpacity>

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
        top: '3%',
    },
    title: {
        fontSize: 22
    },
    textStyle: {
        fontSize: 30,
    },
    TextS: {
        fontSize: 25,
        textAlign: "center",

    },
    buttonText: {
        fontSize: 20,
        left:'45%',
        top: '30%',
      },

})
const options = {
    container: {
        backgroundColor: '#000000',
        padding: 1,
        borderRadius: 20,
        left: '10%',
        width: '80%',
        alignItems: 'center',
    },
    text: {
        fontSize: 65,
        color: '#FFF',

    },
};

export { CountdownTimer }; //tes