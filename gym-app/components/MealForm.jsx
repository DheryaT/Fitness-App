import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, FlatList, Item, TouchableOpacity } from 'react-native';
import { faPlusCircle, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const MealForm = ({ editing, setShowForm, plans }) => {

    const editObj = plans.find(item => item.id == editing)
    const [pList, setPList] = useState(editObj.meal)
    const [title, setTitle] = useState(editObj.name)

    const addItem = () => {
        setPList([...pList, { food: '', amount: '' }])
    }

    const updateItem = (index, text, type) => {
        setPList(pList.map((item, i) => i == index ? (type == 'food' ? Object.assign(item, { food: text }) : Object.assign(item, { amount: text })) : item))
        console.log(pList)
    }

    const deleteItem = (i) => {
        setPList(pList.filter((item, index) => index != i))
    }

    const saveSchedule = async () => {
        const newSchedule = plans.map(item => editing == item.id ? { id: editObj.id, name: title, meal: pList } : item)
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                mealplans: newSchedule
            },
            { merge: true }
        )
        setShowForm(false)
    }

    return (
        <KeyboardAwareScrollView style={styles.screenContainer}>
            <View style={styles.ListItem}>
                <TextInput defaultValue={editObj.name} style={styles.inputTitle} onChangeText={(text) => { setTitle(text) }} />

                {pList.map((item, index) =>
                (<View style={styles.container} key={index}>
                    <TextInput placeholder="Food" defaultValue={item.food} style={styles.inputFood} onChangeText={(text) => updateItem(index, text, 'food')} />
                    <TextInput placeholder="Amount" defaultValue={item.amount} style={styles.inputAmount} onChangeText={(text) => updateItem(index, text, 'amount')} />

                    <TouchableOpacity style={styles.itemBut} onPress={() => deleteItem(index)}>
                        <FontAwesomeIcon icon={faXmark} size={25} color={'white'} />
                    </TouchableOpacity>

                </View>))}

                <TouchableOpacity style={styles.botBut} onPress={addItem}>
                    <FontAwesomeIcon icon={faPlusCircle} size={40} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.csBut} onPress={() => setShowForm(false)}>
                    <Text style={styles.ButText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.csBut} onPress={saveSchedule}>
                    <Text style={styles.ButText}>Save</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: 'rgb(89, 89, 89)',
        borderRadius: 5,
        shadowOpacity: .5,


    },
    screenContainer: {
        backgroundColor: 'rgb(77, 77, 77)'
    },
    controls: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    ListItem: {
        borderWidth: 3,
        borderColor: 'rgb(204, 153, 0)',
        margin: '5%',
        backgroundColor: 'rgb(64, 64, 64)',
        borderRadius: '10px',
        alignItems: 'center',
        shadowOpacity: .5,
        shadowOffset: { width: 10, height: 10 },
        padding: '5%'
    },
    botBut: {
        marginTop: 20
    },
    itemBut: {
        padding: 5,
        marginTop: 10,

    },
    inputAmount: {
        backgroundColor: "#FFFFFF",
        width: '40%',
        padding: 5,
        fontSize: 16,
        borderRadius: 5,
        margin: 5,
        color: "#000000",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        height: 40,

    },
    inputTitle: {
        backgroundColor: "#FFFFFF",
        width: '60%',
        padding: 5,
        fontSize: 16,
        borderRadius: 5,
        margin: 5,
        color: "#000000",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        height: 50
    },
    inputFood: {
        backgroundColor: "#FFFFFF",
        width: '50%',
        padding: 5,
        fontSize: 16,
        borderRadius: 5,
        color: "#000000",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        height: 40,
        margin: 5,
    },
    csBut: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(50, 50, 50)',
        padding: '5%',
        margin: '5%',
        borderRadius: 5,
        borderWidth: 3
    },
    ButText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10
    }

})

export { MealForm };