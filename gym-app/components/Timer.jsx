import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownTimer } from "./CountdownTimer";
import { Tabs } from "./Tabs";




const Timer = ({ navigation }) => {
    // State to store count value
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const DecrementCount = () => {
        setCount(count - 1);
    };
    const Stacks = createNativeStackNavigator();

    return (



        <ScrollView style={styles.container}>



            <View style={styles.quickhead}>
                <Text style={styles.textStyle}>Quick Start:</Text >
            </View>


            <View style={styles.body}>
                <Text style={styles.textSets}>Prepare:{"\n"} {"\n"} {"\n"}{"\n"}Sets:{"\n"} {"\n"}{"\n"} {"\n"}Work:{"\n"} {"\n"} {"\n"}{"\n"}Rest:{"\n"} {"\n"} {"\n"}{"\n"}Cooldown:</Text >

                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/659/659892.png', }} style={styles.image1} /></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png', }} style={styles.image2} /></TouchableOpacity>

                <CountDown

                    style={styles.TimerS}
                    size={15}
                    timeToShow={['M', 'S']}
                    //onFinish={() => alert('finished')}
                    //onPress={() => alert('Timer started')}
                    timeLabels={{ m: 'min', s: 'sec' }}
                    showSeparator
                    until={count}

                    digitStyle={{
                        backgroundColor: '#e0e0e0',

                    }}

                />
                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/659/659892.png', }} style={styles.image1} /></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png', }} style={styles.image2} /></TouchableOpacity>

                <CountDown
                    style={styles.TimerS}
                    size={15}
                    timeToShow={['M', 'S']}
                    //onFinish={() => alert('finished')}
                    //onPress={() => alert('Timer started')}
                    showSeparator
                    timeLabels={{ m: 'min', s: 'sec' }}
                    until={count}
                    digitStyle={{
                        backgroundColor: '#e0e0e0',

                    }}
                />
                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/659/659892.png', }} style={styles.image1} /></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png', }} style={styles.image2} /></TouchableOpacity>

                <CountDown
                    style={styles.TimerS}
                    size={15}
                    timeToShow={['M', 'S']}
                    //onFinish={() => alert('finished')}
                    //onPress={() => alert('Timer started')}
                    showSeparator
                    timeLabels={{ m: 'min', s: 'sec' }}
                    until={count}
                    digitStyle={{
                        backgroundColor: '#e0e0e0',

                    }}
                />
                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/659/659892.png', }} style={styles.image1} /></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png', }} style={styles.image2} /></TouchableOpacity>

                <CountDown
                    style={styles.TimerS}
                    size={15}

                    timeToShow={['M', 'S']}
                    //onFinish={() => alert('finished')}
                    //onPress={() => alert('Timer started')}
                    showSeparator
                    timeLabels={{ m: 'min', s: 'sec' }}
                    until={count}
                    digitStyle={{
                        backgroundColor: '#e0e0e0',
                        borderColor: "#fff",

                    }}
                />

                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/659/659892.png', }} style={styles.image1} /></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262038.png', }} style={styles.image2} /></TouchableOpacity>

                <CountDown
                    style={styles.TimerS}
                    size={15}

                    timeToShow={['M', 'S']}
                    //onFinish={() => alert('finished')}
                    //onPress={() => alert('Timer started')}
                    showSeparator
                    timeLabels={{ m: 'min', s: 'sec' }}
                    until={count}
                    digitStyle={{
                        backgroundColor: '#e0e0e0',

                    }}
                />
                <Button title="Start" style={styles.startBut} onPress={() => navigation.navigate('CountdownTimer')} > </Button>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex: 1,
    },
    body: {
        backgroundColor: '#e0e0e0',
        flex: 1,
    },
    quickhead: {
        backgroundColor: '#D3D3D3',
        padding: "5%",
        alignItems: "left",
        justifyContent: "center"

    },
    image1: {
        width: 25,
        height: 25,
        top: "12%",
        left: "42%",
    },
    image2: {
        width: 25,
        height: 25,
        top: "7%",
        left: "78%",
    },

    textStyle: {
        fontSize: 30,
        marginLeft: "5%",
    },
    textSets: {
        fontSize: 23,
        marginLeft: "10%",
        marginTop: "14%",
        position: 'absolute',

    },
    TimerS: {
        marginLeft: "35%",
    },
    startBut: {
        left: "10%",

    }
})
export { Timer }; 