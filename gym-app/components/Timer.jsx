import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Pressable, Button, Modal,TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { doc, DocumentSnapshot, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";




const Timer = ({ navigation, route }) => {
    // State to store count value
    const [modalVisible, setModalVisible] = useState(false);
    const [presetnames, setPresetNames] = useState('');
    const [times1, setTime] = useState([])
    const [Prepare, setCount] = useState(0)
    const [Sets, setCount1] = useState(0)
    const [Work, setCount2] = useState(0)
    const [Rest, setCount3] = useState(0)
    const [Cooldown, setCount4] = useState(0)
    const incrementPrepare = () => { setCount(Prepare + 1); }
    const DecrementPrepare = () => { if (Prepare > 0) { setCount(Prepare - 1); } }
    const incrementSets = () => { setCount1(Sets + 1); }
    const DecrementSets = () => { if (Sets > 0) { setCount1(Sets - 1); } }
    const incrementWork = () => { setCount2(Work + 1); }
    const DecrementWork = () => { if (Work > 0) { setCount2(Work - 1); } }
    const incrementRest = () => { setCount3(Rest + 1); }
    const DecrementRest = () => { if (Rest > 0) { setCount3(Rest - 1); } }
    const incrementCooldown = () => { setCount4(Cooldown + 1); }
    const DecrementCooldown = () => { if (Cooldown > 0) { setCount4(Cooldown - 1); } }
    const update = () => {
        setCount(times1.Prepare)
        setCount1(times1.Sets)
        setCount2(times1.Work)
        setCount3(times1.Rest)
        setCount4(times1.Cooldown)
    }
    const SavePreset = async () => {
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                time1: {
                    Prepare: Prepare,
                    Sets: Sets,
                    Work: Work,
                    Rest: Rest,
                    Cooldown: Cooldown
                },
            },
            { merge: true }
        )
    }
    const StartTimer = () => {
        if (!Prepare == 0 && !Sets == 0 && !Work == 0 && !Rest == 0 && !Cooldown == 0) {
            navigation.navigate('CountdownTimer', {
                Prepare: Prepare,
                Sets: Sets,
                Work: Work,
                Rest: Rest,
                Cooldown: Cooldown,
            })
        }
        else {
            alert("Fill all timers");
        }
    }
    const docRef = doc(db, "users", `${auth.currentUser.email}`);
    const getTime = async () => {
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setTime(docSnap.data().time1)
        } else {
            console.log("No such document!");
        }
    };


    useEffect(() => { getTime(); }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.quickhead}>
                    <Text style={styles.textStyle}>Quick Start:</Text >
                </View>


                <View style={styles.body}>
                    <View style={styles.titleandbutton}>
                        <View style={styles.titles}>
                            <Text style={styles.textSets}>Prepare:</Text >
                            <Text style={styles.textSets}>Sets:</Text >
                            <Text style={styles.textSets}>Work:</Text >
                            <Text style={styles.textSets}>Rest:</Text >
                            <Text style={styles.textSets}>Cooldown:</Text >
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles. verticalalignment}>
                                <View style = {styles.horizontalalignment}> 
                                <TouchableOpacity style={styles.image1} onPress={() => { DecrementPrepare() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                                <Text style={styles.timeStyle}>{Prepare}{"\n"}Secs </Text>
                                <TouchableOpacity style={styles.image2} onPress={() => { incrementPrepare() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                                </View>


                                <View style = {styles.horizontalalignment}> 
                                <TouchableOpacity style={styles.image1} onPress={() => { DecrementSets() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                                <Text style={styles.timeStyle}>{Sets}{"\n"}Secs </Text>
                                <TouchableOpacity style={styles.image2} onPress={() => { incrementSets() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                                </View>
                                <View style = {styles.horizontalalignment}> 
                                <TouchableOpacity style={styles.image1} onPress={() => { DecrementWork() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                                <Text style={styles.timeStyle}>{Work}{"\n"}Secs </Text>
                                <TouchableOpacity style={styles.image2} onPress={() => { incrementWork() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                                </View>
                                <View style = {styles.horizontalalignment}> 
                                <TouchableOpacity style={styles.image1} onPress={() => { DecrementRest() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                                <Text style={styles.timeStyle}>{Rest}{"\n"}Secs </Text>
                                <TouchableOpacity style={styles.image2} onPress={() => { incrementRest() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                                </View>
                                <View style = {styles.horizontalalignment}> 
                                <TouchableOpacity style={styles.image1} onPress={() => { DecrementCooldown() }}><FontAwesomeIcon icon={faCircleMinus} size={30} /></TouchableOpacity>
                                <Text style={styles.timeStyle}>{Cooldown}{"\n"}Secs </Text>
                                <TouchableOpacity style={styles.image2} onPress={() => { incrementCooldown() }}><FontAwesomeIcon icon={faCirclePlus} size={30} /></TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        
                            <View style={styles.inputView}>
                        <TextInput style={styles.TextInput} placeholder="Preset Name" placeholderTextColor="black" onChangeText={newText => setPresetNames(newText)} defaultValue={presetnames}


/></View>                     
                            <View style={styles.SaveCan}>   
                            <Pressable 
                                onPress={() => {SavePreset(),setPresetNames(presetnames),setModalVisible(!modalVisible)}}
                            >   
                                <Text style={styles.texts}>Save</Text>
                            </Pressable >
                            <Pressable 
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.texts}>Cancel</Text>
                            </Pressable>
                            </View>    
                        </View>
                    </View>
                </Modal>
                <View style={styles.ButtonSS}>
                <TouchableOpacity style={styles.startBut} onPress={() => StartTimer()} ><FontAwesomeIcon icon={faCirclePlay} size={50} /></TouchableOpacity>
                <TouchableOpacity style={styles.saveBut} onPress={() => { getTime(), setModalVisible(true) }} ><FontAwesomeIcon icon={faBookmark} size={50} /></TouchableOpacity>
                </View>
                <View style={styles.saveText}>
                <Text style={styles.textSaveStart}> Start</Text>
                <Text style={styles.textSaveStart}>Bookmark</Text>

                </View>
                <View style={styles.quickSave}>

                    <Text style={styles.textStyle}>Presets:</Text>

                </View>
                <View style={styles.presetContainer}>

                    <Text style={styles.presetTextSize}><TouchableOpacity onPress={() => { }}><FontAwesomeIcon icon={faEdit} size={25} /></TouchableOpacity><Button title={presetnames} onPress={() => { update() }}></Button> <TouchableOpacity onPress={() => { }}><FontAwesomeIcon icon={faTrash} size={25} /></TouchableOpacity>{"\n"}</Text>
                    <Text style={styles.presetTextSize}>Preset two: <TouchableOpacity onPress={() => { }}><FontAwesomeIcon icon={faTrash} size={25} /></TouchableOpacity>{"\n"}</Text>
                    <Text style={styles.presetTextSize}>Preset three: <TouchableOpacity onPress={() => { }}><FontAwesomeIcon icon={faTrash} size={25} /></TouchableOpacity>{"\n"}</Text>


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
        borderColor: '#000000',

    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "80%",
        height: 50,
        marginLeft: '100%',
        alignItems: "left",
        justifyContent: "center",


      },
    TextInput: {
        height: 50,
        width: '90%',
        flex: 1,
        padding: 10,
        marginLeft: 10,
        textAlign:'center'
      },
    body: {
        backgroundColor: '#e0e0e0',
        flex: 5,
    },
    presetContainer: {
        backgroundColor: '#e0e0e0',
 

    },
    presetTextSize: {
        fontSize: 20,
        left: '7%',
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
        bottom: "6%",
        
    },



    textStyle: {
        fontSize: 30,
        left: '3%',
    },
    textStyleModal: {
        fontSize: 30,
        right: '130%',
    },
    textSaveStart: {
        fontSize: 20,
        top: "6%",
   
    },
    textSets: {
        fontSize: 24,
        marginLeft: "20%",
        justifyContent: "space-evenly",
        marginTop: "14%",
    },

    image1: {
        marginTop: '12%',
        
    },
    image2: {
        marginTop: '12%'
    },
    timeStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop:'12%',
    },
    modalView: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        margin: '10%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,


    },
    SaveCan: {

        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop: '60%',
        marginRight: '90%',
        width: '100%',
    },
    texts: {
        fontSize: 30,
    },
    buttons: {
        width: '70%',
        flex: 1,
    },
    titles: {
   
        justifyContent: "space-evenly",
        width: '38%'
    },
    titleandbutton: {
        flexDirection: "row",
        flexWrap: "wrap",
        
    },
    horizontalalignment: {
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    verticalalignment: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    ButtonSS: {
        flex:1,
        flexDirection: "row",
        marginVertical:'10%',
        justifyContent: "space-evenly",
        top: "6%",

    },
    saveText: {
        left: '1%',
        bottom: "10%",
        flexDirection: "row",
        marginBottom:'20%',
        justifyContent: "space-evenly"

    }

})
export { Timer }; 