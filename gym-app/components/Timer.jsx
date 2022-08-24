import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


const Timer = () => {

    return (
        <ScrollView style={styles.container}>

            <View style={styles.quickhead}>

                <Text style={styles.textStyle}>Quick Start:</Text >
            </View>

            <Text style={styles.textSets}>Prepare: {"\n"} {"\n"} {"\n"}Sets:{"\n"} {"\n"} {"\n"}Work:{"\n"} {"\n"} {"\n"}Rest:{"\n"} {"\n"} {"\n"}Cooldown:</Text >
            <CountDown
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
            <CountDown
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
            />
            <CountDown
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
            />
            <CountDown
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
            />

            <CountDown
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
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex: 1,
    },
    quickhead: {
        backgroundColor: '#D3D3D3',
        padding:"5%",
        
        alignItems: "left",
        justifyContent: "center"

    },

    textStyle: {
        fontSize: 30,
        marginLeft: "5%",
    },
    textSets: {
        fontSize: 20,
        marginLeft: "10%",
        marginTop:"28%",
        position: 'absolute',

    },
    TimerS: {
        marginLeft: "20%",
        marginTop: "4%",

    }
})
export { Timer }; 