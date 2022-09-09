import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, Pressable, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { Score } from "./Score";

const Calculator = () => {

    const docRef = doc(db, "users", `${auth.currentUser.email}`);
    const [Output, setOutput] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('One Rep Max');
    const [items, setItems] = useState([
        { label: 'One Rep Max', value: 'One Rep Max' },
        { label: 'Strength Level', value: 'Strength Level' }
    ])

    const [weightLifted, setWeightLifted] = useState(0);
    const [repsPerformed, setRepsPerformed] = useState(0);
    const [Max, setMaxLift] = useState(0);

    const [history, setHistory] = useState([])
    const [localhist, setlocalHist] = useState([])


    const getUser = async () => {
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("uh oh")
            setlocalHist(docSnap.data().calchistory)
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        getUser();
    }, [history])

    const newRecord = async () => {
        let curMax = 0;
        localhist.forEach(item => { if (item.id > curMax) { curMax = item.id } })
        curMax++;
        const newHist = [...localhist, { id: curMax, Weight: weightLifted, Reps: repsPerformed, Max: parseFloat(Max).toFixed(2) }];
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                calchistory: newHist
            },
            { merge: true }
        )
        setHistory(newHist)
    }

    const clearHistory = async () => {
        const newHist = [];
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                calchistory: newHist
            },
            { merge: true }
        )
        setHistory(newHist)
    }

    const deleteRecord = async (ind) => {
        const filtered = localhist.filter((item, index) => item.id != ind)
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                calchistory: filtered
            },
            { merge: true }
        )
        setHistory(filtered)
    }



    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.calculatorTitle}>
                    Calculate
                </Text>

                <DropDownPicker style={styles.dropdown}
                    textStyle={{
                        fontSize: 24,
                        color: "white",
                        alignItems: "center",
                        alignContent: "center",
                    }}
                    containerStyle={{
                        alignItems: "center",
                        alignContent: "center",
                    }}
                    listItemLabelStyle={{
                        fontSize: 15,
                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme="DARK"

                />
            </View>
            <View style={styles.textinputscontainer}>
                <View>
                    <Text style={styles.headerText}>
                        Lift:
                    </Text>
                    <Text style={styles.headerText}>
                        Reps:
                    </Text>

                </View>
                <View style={styles.inputFields}>
                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        placeholder="Weight in KG (e.g 89)"
                        onChangeText={(text) => {
                            setWeightLifted(text);
                        }}>

                    </TextInput>
                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        placeholder="Number Of Reps"
                        onChangeText={(text) => {
                            setRepsPerformed(text);
                        }}>
                    </TextInput>
                </View>
                <View style={styles.SubmitButton}>
                    <Pressable
                        onPressIn={() => {
                            setMaxLift(weightLifted * (1 + (repsPerformed / 30)))
                        }}
                        onPressOut={() => {
                            setOutput("Your One Rep Max is: \n" + parseFloat(Max).toFixed(2) + " KG")
                        }}>
                        <Text style={styles.CalculateButton}>
                            Calculate
                        </Text>
                    </Pressable>
                    <Pressable
                        onPressIn={() => {
                            setMaxLift(weightLifted * (1 + (repsPerformed / 30)))
                        }}
                        onPressOut={() => {
                            setOutput("Your One Rep Max is:\n" + parseFloat(Max).toFixed(2) + " KG")
                            newRecord()
                        }}>
                        <Text style={styles.CalculateButton}>
                            Save
                        </Text>
                    </Pressable>
                </View>
                <Text style={styles.OneRM}>
                    {Output}
                </Text>

            </View>
            <View style={styles.Score}>
                {localhist.length == 0 ? <></> : <Score history={localhist} clearHist={clearHistory} deleteItem={deleteRecord} ></Score>}

            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(77, 77, 77)'
    },
    content: {
        flex: 2,
        backgroundColor: '#2b2a2a',
        borderRadius: '5%',
        borderRadius: 10,
        margin: '5%',
    },
    calculatorTitle: {
        alignItems: "center",
        alignContent: "center",
        margin: '2%',
        fontSize: 32,
        color: "white",
    },
    dropdown: {
        alignItems: "center",
        alignContent: "center",
        color: "white",
        backgroundColor: '#2b2a2a',
        borderRadius: 5,
        color: "white",
    },
    textinputscontainer: {
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        zIndex: -1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "rgb(51, 51, 51)",
        width: '90%',
        marginLeft: '5%'

    },
    headerText: {
        fontSize: 36,
        padding: 10,
        marginLeft: 20,
        color: "white",
        width: '100%',

    },
    inputFields: {
        width: '60%',
        paddingTop: 5,

    },
    input: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        width: '90%',
        fontSize: 16,
        borderRadius: 15,
        margin: 10,
        color: "#000000",
        borderColor: 'white',
        alignContent: "center",
        alignItems: "center",
    },

    SubmitButton: {
        marginLeft: '5%',
        marginTop: '5%',

        borderRadius: 10,
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-evenly",
        alignItem: "center",
        alignContent: "center",
    },
    CalculateButton: {
        padding: '10%',
        fontSize: 28,
        borderRadius: 10,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#171717',
        padding: 5,
        borderRadius: 10,
    },

    OneRM: {
        marginLeft: '5%',
        marginTop: '5%',
        color: 'white',
        fontSize: 26,
        zIndex: 1,
        width: '100%',
        paddingBottom: '5%',
        paddingLeft: '5%',
    },
    Score: {
        flex: 2,

    },

})

export { Calculator }; //tes