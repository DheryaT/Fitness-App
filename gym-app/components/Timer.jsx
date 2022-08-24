import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


const Timer = () => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.quickhead}>

                <Text style={styles.textStyle}>Quick Start:</Text >
            </View>

            <Text style={styles.textSets}>Prepare: <CountDown
                style={styles.TimerS}
                size={15}
                timeToShow={['M', 'S']}
                //onFinish={() => alert('finished')}
                onPress={() => alert('Timer started')}
                timeLabels={{ m: 'min', s: 'sec' }}
                showSeparator
                digitStyle={{
                    backgroundColor: '#e0e0e0',
                    margintop: 20,
                }}
            />
            </Text >
            <Text style={styles.textSets}>Sets:    <CountDown
                style={styles.TimerS}
                size={15}

                timeToShow={['M', 'S']}
                //onFinish={() => alert('finished')}
                onPress={() => alert('Timer started')}
                showSeparator
                timeLabels={{ m: 'min', s: 'sec' }}
                digitStyle={{
                    backgroundColor: '#e0e0e0',
                    margintop: 20,
                }}
            /></Text >
            <Text style={styles.textSets}>Work:    <CountDown
                style={styles.TimerS}
                size={15}

                timeToShow={['M', 'S']}
                //onFinish={() => alert('finished')}
                onPress={() => alert('Timer started')}
                timeLabels={{ m: 'min', s: 'sec' }}
                showSeparator
                digitStyle={{
                    backgroundColor: '#e0e0e0',
                    margintop: 20,
                }}
            /></Text >
            <Text style={styles.textSets}>Rest:    <CountDown
                style={styles.TimerS}
                size={15}

                timeToShow={['M', 'S']}
                //onFinish={() => alert('finished')}
                onPress={() => alert('Timer started')}
                showSeparator
                timeLabels={{ m: 'min', s: 'sec' }}
                digitStyle={{
                    backgroundColor: '#e0e0e0',
                    margintop: 20,
                }}
            /></Text >
            <Text style={styles.textSets}>Cooldown:<CountDown
                style={styles.TimerS}
                size={15}

                timeToShow={['M', 'S']}
                //onFinish={() => alert('finished')}
                onPress={() => alert('Timer started')}
                timeLabels={{ m: 'min', s: 'sec' }}
                showSeparator

                digitStyle={{
                    backgroundColor: '#e0e0e0',
                    margintop: 20,
                }}
            />
            </Text >


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex: 1,
    },
    quickhead: {
        backgroundColor: '#D3D3D3',
        maxHeight: "10%",
        flex: 1,
        alignItems: "left",
        justifyContent: "center"

    },

    textStyle: {
        fontSize: 30,
        marginLeft: 30,
    },
    textSets: {
        fontSize: 20,
        marginLeft: 30,
    },
    TimerS: {
        marginRight: 50,
        alignItems: 'center'

    }
})
export { Timer }; 