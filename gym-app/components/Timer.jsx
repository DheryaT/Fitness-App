import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";




export default function Timer({ navigation }){
    // State to store count value
    const [Prepare, setCount] = useState(0)
    const [Sets, setCount1] = useState(0)
    const [Work, setCount2] = useState(0)
    const [Rest, setCount3] = useState(0)
    const [Cooldown, setCount4] = useState(0)
    const incrementPrepare = () => {setCount(Prepare + 1);}
    const DecrementPrepare =() => {if(Prepare>=0){setCount(Prepare - 1);}}
    const incrementSets= () => {setCount1(Sets + 1);}
    const DecrementSets = () => {if(Sets>=0){setCount1(Sets - 1);}}
    const incrementWork = () => {setCount2(Work + 1);}
    const DecrementWork = () => {if(Work>=0){setCount2(Work - 1);}}
    const incrementRest = () => {setCount3(Rest + 1);}
    const DecrementRest = () => {if(Rest>=0){setCount3(Rest - 1);}}
    const incrementCooldown = () => {setCount4(Cooldown + 1);}
    const DecrementCooldown = () => {if(Cooldown>=0){setCount4(Cooldown - 1);}}

    const SavePreset = async () => {
        await setDoc(doc(db, "users",`${auth.currentUser.email}`), 
        {
            Prepare: Prepare,
            Sets: Sets,
            Work: Work,
            Rest: Rest,
            Cooldown: Cooldown,
        },
        {merge: true}
        )
    }
    const StartTimer = () => {
        navigation.navigate('CountdownTimer',{      
            Prepare: Prepare,
            Sets: Sets,
            Work: Work,
            Rest: Rest,
            Cooldown: Cooldown,
        })
    }

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.quickhead}>
                    <Text style={styles.textStyle}>Quick Start:</Text >
                </View>


                <View style={styles.body}>
                    <Text style={styles.textSets}>Prepare:{"\n"} {"\n"} {"\n"}{"\n"}Sets:{"\n"} {"\n"}{"\n"} {"\n"}Work:{"\n"} {"\n"} {"\n"}{"\n"}Rest:{"\n"} {"\n"} {"\n"}{"\n"}Cooldown:</Text >

                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementPrepare()}}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementPrepare()}}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>

                    <CountDown
                        
                        style={styles.TimerS}
                        size={15}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: 'min', s: 'sec' }}
                        showSeparator
                        running={false}
                        until={Prepare}

                        digitStyle={{
                            backgroundColor: '#e0e0e0',

                        }}

                    />

                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementSets() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementSets() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <CountDown
                        style={styles.TimerS}
                        size={15}
                        timeToShow={['M', 'S']}
                        showSeparator
                        timeLabels={{ m: 'min', s: 'sec' }}
                        running={false}
                        until={Sets}
                        digitStyle={{
                            backgroundColor: '#e0e0e0',

                        }}
                    />

                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementWork() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementWork() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <CountDown
                        style={styles.TimerS}
                        size={15}
                        timeToShow={['M', 'S']}
                        showSeparator
                        timeLabels={{ m: 'min', s: 'sec' }}
                        running={false}
                        until={Work}
                        digitStyle={{
                            backgroundColor: '#e0e0e0',

                        }}
                    />

                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementRest() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementRest() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>

                    <CountDown
                        style={styles.TimerS}
                        size={15}

                        timeToShow={['M', 'S']}
                        showSeparator
                        timeLabels={{ m: 'min', s: 'sec' }}
                        running={false}
                        until={Rest}
                        digitStyle={{
                            backgroundColor: '#e0e0e0',
                            borderColor: "#fff",

                        }}
                    />
                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementCooldown() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementCooldown() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>

                    <CountDown
                        style={styles.TimerS}
                        size={15}

                        timeToShow={['M', 'S']}
                        showSeparator
                        timeLabels={{ m: 'min', s: 'sec' }}
                        running={false}
                        until={Cooldown}
                        digitStyle={{
                            backgroundColor: '#e0e0e0',

                        }}
                    />

                </View>
                <View style={styles.container1}>
                    <TouchableOpacity style={styles.startBut} onPress={() => StartTimer()} ><FontAwesomeIcon icon={faCirclePlay} size={50} /></TouchableOpacity>
                    <Text style={styles.textStart}>Start</Text>
                    <TouchableOpacity style={styles.saveBut} onPress={() => { SavePreset()}} ><FontAwesomeIcon icon={faBookmark} size={50} /></TouchableOpacity>
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
        zIndex:1,
        top: "12%",
        left: "45%",
    },
    image2: {
        width: 25,
        height: 25,
        zIndex:1,
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
        bottom: '30%',
    },
    textStart: {
        fontSize: 20,
        left: '11%',
        top: "20%"
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
        top: "20%"
    },
    saveBut: {
        bottom: '30%',
        left: '75%',
    }
})
export { Timer }; 