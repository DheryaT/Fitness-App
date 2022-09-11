import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { doc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { Score } from "../Presentation/Score";
import { getDbUser, setDbUser } from "../../api/Database";
 
const Calculator = () => {

    const docRef = doc(db, "users", `${auth.currentUser.email}`);
    const [Output, setOutput] = useState('');

    //Calculation Variables that will be used for output and database fields
    const [weightLifted, setWeightLifted] = useState(0);
    const [repsPerformed, setRepsPerformed] = useState(0);
    const [Max, setMaxLift] = useState(0);

    //User Data (from the database)
    const [history, setHistory] = useState([])
    const [localhist, setlocalHist] = useState([]) //prevents infinite getUser loop


    const getUser = async () => {
        //gets the users data asynchronously from database 
        const docsnap = await getDbUser()
        setlocalHist(docsnap.calchistory)
    };

    useEffect(() => {
        //get user data when history array changes changes
        getUser();
    }, [history])

    const newRecord = async () => {
        //creates a new record with an id reference that isn't already in the database for this 
        //kind of storage (calchistory in database)
        let curMax = 0;
        localhist.forEach(item => { if (item.id > curMax) { curMax = item.id } })
        curMax++;
        const newHist = [...localhist, { id: curMax, Weight: weightLifted, Reps: repsPerformed, Max: parseFloat(Max).toFixed(2) }];
        await setDbUser({calchistory: newHist})
        setHistory(newHist)
    }

    const clearHistory = async () => {
        //resets calchistory storage array from firebase
        const newHist = [];
        await setDbUser({calchistory: newHist})
        setHistory(newHist)
    }

    const deleteRecord = async (ind) => {
        //deletes individual records from calchistory
        const filtered = localhist.filter((item, index) => item.id != ind)
        await setDbUser({calchistory: filtered})
        setHistory(filtered)
    }



    return (
        <ScrollView style={styles.container}>
            <View style={styles.content} //Provides the title for the screen, including what calculator it is
                > 
                <Text style={styles.calculatorTitle}>
                    Calculate
                </Text>

                <Text style={styles.calculatorTitle}>
                    One Rep Max
                </Text>
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
                        //This will set the weightLifted when the text is changed
                        onChangeText={(text) => {
                            setWeightLifted(text);
                        }}>

                    </TextInput>
                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        placeholder="Number Of Reps"
                        //This will set repsPerformed when changed
                        onChangeText={(text) => {
                            setRepsPerformed(text);
                        }}>
                    </TextInput>
                </View>
                <View style={styles.SubmitButton}>
                    <Pressable
                        //When the calculate button is pressed, it will provide an output of their predicted one rm
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
                        //When the save button is pressed, it will both provide an output of their 
                        //predicted one rm, but also create a record to be saved in the database for display
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
            <View style={styles.Score}
            //This will generate a score component that will show the history of previously saved inputs
            >
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
        borderColor: 'grey',
        shadowOpacity: .5,
        shadowOffset: {width: 10, height: 10},
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