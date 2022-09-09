import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import { faCirclePause } from '@fortawesome/free-regular-svg-icons/faCirclePause'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons/faCirclePlay'
import { useRoute } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CountdownTimer = ({ navigation }) => {
    const route = useRoute();
    //states
    const [isPlaying, setIsPlaying] = useState(true);
    const [timeIndex, setTimeIndex] = useState(0);
    const [thing, setThing] = useState('');
    const [set, setSets] = useState(route.params.Sets);
    const [counT, setCount] = useState(1);
    //array storing the values from previous page
    const duration = [0.000001, route.params.Prepare, route.params.Work, route.params.Rest, route.params.Cooldown, 0.000001];
    var newIndex;
    const setTHING = () => {
        if (newIndex == 1) { setThing('Prepare'); }
        else if (newIndex == 2) { setThing('Work'); }
        else if (newIndex == 3) { setThing('Rest'); }
        else if (newIndex == 4) { setThing('Cooldown'); }
    }



    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.setsTitle}>
                <Text style={styles.setsText}>Sets left: {set}</Text>
            </View>
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
                        if (newIndex == duration.length) {
                            setCount(counT + 1);
                            setSets(set - 1);
                            if (route.params.Sets != counT) {
                                return 0;
                            }
                            else if (route.params.Sets == counT) {
                                return 5;
                            }
                        }
                        setTHING();
                        return newIndex;
                    });
                    if (newIndex == 5 && route.params.Sets == counT) {
                        setThing('Workout Finished');
                        alert("Workout Finished")


                    }
                }}>
                {({ remainingTime }) => (
                    <Animated.Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>

                        {thing}{"\n"}
                        {remainingTime}{"\n"}
                        Seconds
                    </Animated.Text>

                )}

            </CountdownCircleTimer>
            <View style={styles.buttons}>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => { setIsPlaying((prev) => !prev) }} //switches button icons when paused
                    >
                        {!isPlaying ? <FontAwesomeIcon icon={faCirclePlay} size={65} /> : <FontAwesomeIcon icon={faCirclePause} size={65} color={'#a9a9a9'} />}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Timer")}  ><FontAwesomeIcon icon={faCircleXmark} size={65} color={'#a9a9a9'} //navigates back to Timer screen
                    />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgb(77, 77, 77)',
        padding: 8,
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '2.5%',

    },
    setsTitle: {
        marginVertical: '5%',
        borderColor: 'white',
        backgroundColor: '#a9a9a9',
        borderWidth: 3,
        padding: 20,
        paddingLeft: '25%',
        paddingRight: '25%',
        borderRadius: 30,

    },
    setsText: {
        fontSize: 30,
    }

})

export { CountdownTimer }; //tes