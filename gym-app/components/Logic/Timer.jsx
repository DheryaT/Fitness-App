import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal, TextInput, FlatList,LogBox } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import { doc, DocumentSnapshot, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { TimerPresets } from "../Presentation/TimerPresets";
import { setDbUser,getDbUser } from "../../api/Database";



const Timer = ({ navigation, route }) => {
    //state variables
    const [modalVisible, setModalVisible] = useState(false);
    const [presetnames, setPresetNames] = useState('');
    const [times1, setTime] = useState([])
    const [times2, setTime2] = useState([])
    const [Prepare, setCount] = useState(0)
    const [Sets, setCount1] = useState(0)
    const [Work, setCount2] = useState(0)
    const [Rest, setCount3] = useState(0)
    const [Cooldown, setCount4] = useState(0)
    //increment and decrement methods
    const incrementPrepare = () => { setCount(Prepare + 5); }
    const DecrementPrepare = () => { if (Prepare > 0) { setCount(Prepare - 5); } }
    const incrementSets = () => { setCount1(Sets + 1); }
    const DecrementSets = () => { if (Sets > 0) { setCount1(Sets - 1); } }
    const incrementWork = () => { setCount2(Work + 5); }
    const DecrementWork = () => { if (Work > 0) { setCount2(Work - 5); } }
    const incrementRest = () => { setCount3(Rest + 5); }
    const DecrementRest = () => { if (Rest > 0) { setCount3(Rest - 5); } }
    const incrementCooldown = () => { setCount4(Cooldown + 5); }
    const DecrementCooldown = () => { if (Cooldown > 0) { setCount4(Cooldown - 5); } }

    //adds all the states into a object to the database
    const Addpreset = async () => {
        if (presetnames.length !== 0 && !Prepare == 0 && !Sets == 0 && !Work == 0 && !Rest == 0 && !Cooldown == 0) {
            let curMax = 0;
            times2.forEach(item => { if (item.id > curMax) { curMax = item.id } })
            curMax++;
            const newPre = [...times2, { id: curMax, Name: presetnames, Prepare: Prepare, Sets: Sets, Work: Work, Rest: Rest, Cooldown: Cooldown }];

            await setDbUser({preset: newPre})

            setTime(newPre)//sets the array
        } else {
            alert('fill in all the timers and sets and add a preset name');
        }
    }

    //deletes from the database
    const deleteItem = async (id) => {
        const newPre = times2.filter(item => item.id != id)
        await setDbUser({preset: newPre})
        setTime(newPre)
    }
    //starts the preset timers, navigating to next screen
    const startPresetTimer = (id) => {
        times2.forEach(item => {
            if (item.id == id)
                navigation.navigate('CountdownTimer', {
                    Prepare: item.Prepare,
                    Sets: item.Sets,
                    Work: item.Work,
                    Rest: item.Rest,
                    Cooldown: item.Cooldown,
                })
        })

    }
    //starts the timers from start button, navigating to next screen
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
            alert("Fill all timers and number of set");
        }
    }
    //get data from database
    const getTime = async () => {
        const user = await getDbUser()
        setTime2(user.preset)
    };

    //call get data everytime data is changed in the times1 array
    useEffect(() => { getTime(); }, [times1])
    useEffect(() => {LogBox.ignoreLogs(["VirtualizedLists should never be nested"])}, [])
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
                            <View style={styles.verticalalignment}>
                                <View style={styles.horizontalalignment}
                                //buttons below and the number of seconds and set
                                >
                                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementPrepare() }}><FontAwesomeIcon icon={faCircleMinus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                    <Text style={styles.timeStyle}>{Prepare}{"\n"}Secs </Text>
                                    <TouchableOpacity style={styles.image2} onPress={() => { incrementPrepare() }}><FontAwesomeIcon icon={faCirclePlus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                </View>
                                <View style={styles.horizontalalignment}>
                                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementSets() }}><FontAwesomeIcon icon={faCircleMinus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                    <Text style={styles.timeStyle}>{Sets}{"\n"}Sets </Text>
                                    <TouchableOpacity style={styles.image2} onPress={() => { incrementSets() }}><FontAwesomeIcon icon={faCirclePlus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                </View>
                                <View style={styles.horizontalalignment}>
                                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementWork() }}><FontAwesomeIcon icon={faCircleMinus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                    <Text style={styles.timeStyle}>{Work}{"\n"}Secs </Text>
                                    <TouchableOpacity style={styles.image2} onPress={() => { incrementWork() }}><FontAwesomeIcon icon={faCirclePlus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                </View>
                                <View style={styles.horizontalalignment}>
                                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementRest() }}><FontAwesomeIcon icon={faCircleMinus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                    <Text style={styles.timeStyle}>{Rest}{"\n"}Secs </Text>
                                    <TouchableOpacity style={styles.image2} onPress={() => { incrementRest() }}><FontAwesomeIcon icon={faCirclePlus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                </View>
                                <View style={styles.horizontalalignment}>
                                    <TouchableOpacity style={styles.image1} onPress={() => { DecrementCooldown() }}><FontAwesomeIcon icon={faCircleMinus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                    <Text style={styles.timeStyle}>{Cooldown}{"\n"}Secs </Text>
                                    <TouchableOpacity style={styles.image2} onPress={() => { incrementCooldown() }}><FontAwesomeIcon icon={faCirclePlus} size={30} color={'#a9a9a9'} /></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Modal
                    //pop up when the user trys to save a preset
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <View style={styles.inputView}>
                                <TextInput style={styles.TextInput} placeholder="Preset Name" placeholderTextColor="white" value={presetnames} onChangeText={name => setPresetNames(name)} />
                            </View>
                            <View style={styles.SaveCan}>
                                <TouchableOpacity
                                //when user presses the save button it will call Addpreset method and exit the popup
                                    onPress={() => { Addpreset(), setModalVisible(!modalVisible),setPresetNames('') }}
                                >
                                    <Text style={styles.texts}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible), setPresetNames('') }}
                                >
                                    <Text style={styles.texts}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.ButtonSS}
                    //start and save button
                    >
                    <TouchableOpacity style={styles.startBut} onPress={() => StartTimer()} ><FontAwesomeIcon icon={faCirclePlay} color={'#a9a9a9'} size={60} /><Text style={styles.textSaveStart}>  Start</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.saveBut} onPress={() => { setModalVisible(true) }} ><FontAwesomeIcon icon={faBookmark} color={'#a9a9a9'} size={60} /><Text style={styles.textSaveStart}>  Save</Text></TouchableOpacity>
                </View>

                <View style={styles.quickSave}>

                    <Text style={styles.textStyle}>Presets:</Text>

                </View>
                <View style={styles.presetContainer}>
                    <FlatList //flatlist used to render the presets in a scrollable list view
                        keyExtractor={(item) => item.id}
                        data={times2}
                        renderItem={({ item }) =>
                            <TimerPresets //custom component for the presets
                             preset={item} deleteItem={deleteItem} startTime={startPresetTimer}> </TimerPresets>
                        }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(77, 77, 77)',
        flex: 1,
    },
    inputView: {
        backgroundColor: "#D3D3D3",
        borderRadius: 30,
        width: "90%",
        height: 50,
        bottom: '15%',
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
        textAlign: 'center'
    },
    body: {
        flex: 5,
        backgroundColor: 'rgb(77, 77, 77)',

    },
    presetContainer: {
        backgroundColor: 'rgb(77, 77, 77)',
    },

    presetTextSize: {
        fontSize: 20,
        left: '7%',

    },
    quickhead: {
        backgroundColor: '#171717',
        padding: "5%",
        alignItems: "left",
        justifyContent: "center"

    },
    quickSave: {
        backgroundColor: '#D3D3D3',
        padding: "5%",
        alignItems: "left",
        justifyContent: "center",
        backgroundColor: '#171717',

    },

    textStyle: {
        fontSize: 30,
        left: '3%',
        color: 'white',
    },
    textStyleModal: {
        fontSize: 30,
        right: '130%',
    },
    textSaveStart: {
        fontSize: 20,
        color: 'white',

    },
    textSets: {
        fontSize: 24,
        marginLeft: "20%",
        justifyContent: "space-evenly",
        marginTop: "14%",
        color: 'white'

    },

    image1: {
        marginTop: '11%',


    },
    image2: {
        marginTop: '11%',
    },
    timeStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: '12%',
        color: 'white',
    },
    modalView: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        margin: '17.5%',
        backgroundColor: "#808080",
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
        elevation: 5,
        borderWidth: 3,
        borderColor: 'white',


    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,


    },
    SaveCan: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '60%',
        marginRight: '90%',
        width: '100%',
    },
    texts: {
        fontSize: 25,
        color: 'white',
        padding: 5,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'white',
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
        flexDirection: "row",

    },
    verticalalignment: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    ButtonSS: {
        flex: 1,
        flexDirection: "row",
        marginVertical: '5%',
        justifyContent: 'space-around',
        borderColor: 'white',
        backgroundColor: '#414a4c',
        borderRadius: 30,
        borderWidth: 3,
        paddingBottom: 10,
        paddingTop: 10,
        top: '5%',

    },
    saveText: {
        left: '1%',
        bottom: "10%",
        flexDirection: "row",
        marginBottom: '20%',
        justifyContent: "space-evenly"

    }

})
export { Timer }; 