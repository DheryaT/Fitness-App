import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import { doc, DocumentSnapshot, getDoc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";




export default function Timer({ navigation }){
    // State to store count value
    const [Prepare, setCount] = useState(0)
    const [Sets, setCount1] = useState(0)
    const [Work, setCount2] = useState(0)
    const [Rest, setCount3] = useState(0)
    const [Cooldown, setCount4] = useState(0)
    const incrementPrepare = () => {setCount(Prepare + 1);}
    const DecrementPrepare =() => {if(Prepare>0){setCount(Prepare - 1);}}
    const incrementSets= () => {setCount1(Sets + 1);}
    const DecrementSets = () => {if(Sets>0){setCount1(Sets - 1);}}
    const incrementWork = () => {setCount2(Work + 1);}
    const DecrementWork = () => {if(Work>0){setCount2(Work - 1);}}
    const incrementRest = () => {setCount3(Rest + 1);}
    const DecrementRest = () => {if(Rest>0){setCount3(Rest - 1);}}
    const incrementCooldown = () => {setCount4(Cooldown + 1);}
    const DecrementCooldown = () => {if(Cooldown>0){setCount4(Cooldown - 1);}}

    const SavePreset = async () => {
        await setDoc(doc(db, "users",`${auth.currentUser.email}`), 
        {
          time1: { Prepare: Prepare,
            Sets: Sets,
            Work: Work,
            Rest: Rest,
            Cooldown: Cooldown}
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
    const preset1 = async () => { doc(db, "users",`${auth.currentUser.email}`);}
    const getPreset1= async () => { await getDoc(preset1);}

    return (
<SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1, height: 850}}>
                <View style={styles.quickhead}>
                    <Text style={styles.textStyle}>Quick Start:</Text >
                </View>


                <View style={styles.body}>
                    <Text style={styles.textSets}>Prepare:</Text >
                    <Text style={styles.textSets}>Sets:</Text >
                    <Text style={styles.textSets}>Work:</Text >
                    <Text style={styles.textSets}>Rest:</Text >
                    <Text style={styles.textSets}>Cooldown:</Text >

                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementPrepare()}}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementPrepare()}}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <Text style={styles.timeStyle}>{Prepare}{"\n"}Secs </Text>



                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementSets() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementSets() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <Text style={styles.timeStyle}>{Sets}{"\n"}Secs </Text>


                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementWork() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementWork() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <Text style={styles.timeStyle}>{Work}{"\n"}Secs </Text>


                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementRest() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementRest() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <Text style={styles.timeStyle}>{Rest}{"\n"}Secs </Text>

                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementCooldown() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.image2} onPress={() => { incrementCooldown() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                    <Text style={styles.timeStyle}>{Cooldown}{"\n"}Secs </Text>

                   
                </View>
                
                    <TouchableOpacity style={styles.startBut} onPress={() => StartTimer()} ><FontAwesomeIcon icon={faCirclePlay} size={50} /></TouchableOpacity>
                    <Text style={styles.textStart}>Start</Text>
                    <TouchableOpacity style={styles.saveBut} onPress={() => { SavePreset()}} ><FontAwesomeIcon icon={faBookmark} size={50} /></TouchableOpacity>
                    <Text style={styles.textSave}>Bookmark</Text>
                    <View style={styles.quickSave}>

                    <Text style={styles.textStyle}> Presets</Text>
                    
                    </View>
                    <Text>Bookmark</Text>

                
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
    quickSave: {
        backgroundColor: '#D3D3D3',
        padding: "5%",
        alignItems: "left",
        justifyContent: "center",
        bottom:'12%',

    },

    image1: {
        width: 25,
        height: 25,
        zIndex:1,
        bottom: "62%",
        left: "45%",
    },
    image2: {
        width: 25,
        height: 19,
        zIndex:1,
        bottom: "67%",
        left: "85%",
    },

    textStyle: {
        bottom: '30%',
        fontSize: 30,
        left: '6%',
    },
    textSave: {
        fontSize: 20,
        left: '68%',
        bottom: '18%',
    },
    textStart: {
        fontSize: 20,
        left: '14%',
        bottom: '9%', 
    },
    textSets: {
        fontSize: 23,
        marginLeft: "10%",
        marginTop: "14%",
    },
    
    TimerS: {
        left: "20%",
    },
    startBut: {
        left: '13%',
        bottom: '10%',
       },
    saveBut: {
        bottom: '19%',
        left: '72%',
    },
    timeStyle: {
        fontSize: 15,
        left:'20%',
        bottom: '70%',
        textAlign: 'center',
    },
})
export { Timer }; 