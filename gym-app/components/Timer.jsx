import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownTimer } from "./CountdownTimer";
import { Tabs } from "./Tabs";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus'




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


        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>



            <View style={styles.quickhead}>
                <Text style={styles.textStyle}>Quick Start:</Text >
            </View>


            <View style={styles.body}>
                <Text style={styles.textSets}>Prepare:{"\n"} {"\n"} {"\n"}{"\n"}Sets:{"\n"} {"\n"}{"\n"} {"\n"}Work:{"\n"} {"\n"} {"\n"}{"\n"}Rest:{"\n"} {"\n"} {"\n"}{"\n"}Cooldown:</Text >

                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><FontAwesomeIcon icon={faCircleMinus} size={30}/></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><FontAwesomeIcon icon={faCirclePlus} size={30}/></TouchableOpacity>

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
               
               <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><FontAwesomeIcon icon={faCircleMinus} size={30}/></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><FontAwesomeIcon icon={faCirclePlus} size={30}/></TouchableOpacity>
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
           
           <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><FontAwesomeIcon icon={faCircleMinus} size={30}/></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><FontAwesomeIcon icon={faCirclePlus} size={30}/></TouchableOpacity>
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
           
           <TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><FontAwesomeIcon icon={faCircleMinus} size={30}/></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><FontAwesomeIcon icon={faCirclePlus} size={30}/></TouchableOpacity>

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

                
<TouchableOpacity style={styles.image1} onPress={() => { DecrementCount }}><FontAwesomeIcon icon={faCircleMinus} size={30}/></TouchableOpacity>
                <TouchableOpacity style={styles.image2} onPress={() => { incrementCount }}><FontAwesomeIcon icon={faCirclePlus} size={30}/></TouchableOpacity>

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

            </View>
            <View style={styles.container1}>
            <TouchableOpacity style={styles.startBut}  onPress={() => navigation.navigate('CountdownTimer')} ><FontAwesomeIcon icon={faCirclePlay} size={50}/></TouchableOpacity>
                    <Text style={styles.textStart}>Start</Text>
                    <TouchableOpacity style={styles.saveBut}  onPress={() => {alert("save preset")}} ><FontAwesomeIcon icon={faBookmark} size={50}/></TouchableOpacity>
                    <Text style={styles.textSave}>Bookmark</Text>
            </View>
            <View style={styles.quickhead}>
                    <Text style={styles.textStyle}> Presets</Text>
            </View>


        </ScrollView>
            </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex: 1,
        
        
    },
    container1: {
        backgroundColor: '#e0e0e0',
        flex: 1,
        margin: 30,
        borderColor: '#000000',
        
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
        left: "45%",
    },
    image2: {
        width: 25,
        height: 25,
        top: "7%",
        left: "85%",
    },

    textStyle: {
        fontSize: 30,
        marginLeft: "5%",
    },
    textSave: {
        fontSize: 20,
        left: '70%',
        bottom:'30%',
    },
    textStart: {
        fontSize: 20,
        left: '11%',
        top:"20%"
    },
    textSets: {
        fontSize: 23,
        marginLeft: "10%",
        marginTop: "14%",
        position: 'absolute',
        

    },
    TimerS: {
        left: "20%",
    },
    startBut: {
        left: '10%',
        top:"20%"
    },    
    saveBut: {
        bottom: '30%',
        left: '75%',
    }
})
export { Timer }; 