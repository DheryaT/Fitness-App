import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Pressable, Animated, Button, Alert } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import { faCirclePause } from '@fortawesome/free-regular-svg-icons/faCirclePause'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons/faCirclePlay'
import { Timer } from 'react-native-stopwatch-timer';
import { useRoute } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CountdownTimer = ({ navigation }) => {
    const route = useRoute();
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [timeIndex, setTimeIndex] = React.useState(0);
    const [thing, setThing] = React.useState('');

    const duration = [0.000001,route.params.Prepare, route.params.Sets, route.params.Work, route.params.Rest, route.params.Cooldown,0.000001];
    var newIndex;
    const setTHING = () => {
        if (newIndex == 1) {
            setThing('Prepare');

        }
        else if (newIndex == 2) {
            setThing('Sets');

        }
        else if (newIndex == 3) {
            setThing('Work');

        }
        else if (newIndex == 4) {
            setThing('Rest');

        }
        else if (newIndex == 5) {
            setThing('Cooldown');

        }
    }

    return (

        <SafeAreaView style={styles.container}>
                <CountdownCircleTimer
                    size={350}
                    key={timeIndex}
                    isPlaying={isPlaying}
                    duration={duration[timeIndex]}
                    colors={[
                        ['#FFFF00', 0.4],
                        ['#0000ff', 0.4],
                    ]}
                    onComplete={() => {
                        
                        setTimeIndex((index) => {
       
                            newIndex = index + 1;
                            console.log(newIndex,":   ",index);
                            setTHING();
                            if (newIndex == duration.length) {
                                return 6;
                            }
                            
                            return newIndex;
                        });
                        if (newIndex == 6) {
                            setThing('Finished');
                
                        }}}

                >

                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text style={{ color: animatedColor, fontSize: 40, textAlign: 'center' }}>

                            {thing}{"\n"}
                            {remainingTime}
                        </Animated.Text>

                    )}

                </CountdownCircleTimer>
                <Pressable style={styles.pause}
                    onPress={() => {
                        setIsPlaying((prev) => !prev)
                    }}>

                    {!isPlaying ? <FontAwesomeIcon icon={faCirclePlay} size={50} /> : <FontAwesomeIcon icon={faCirclePause} size={50} />}

                </Pressable>


                <TouchableOpacity style={styles.exit} onLongPress={() => navigation.navigate("Timer")}  ><FontAwesomeIcon icon={faCircleXmark} size={50} /></TouchableOpacity>

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    pause: {
        top: '5%',
        right: '20%',
    },
    exit: {
        bottom: '3%',
        left: '20%',
    },

})

export { CountdownTimer }; //tes