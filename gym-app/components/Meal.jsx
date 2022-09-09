import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, FlatList, Item, TouchableOpacity } from 'react-native';
import { MealForm } from "./MealForm";
import { MealItem } from "./MealItem";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { faPlus } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Meal = ({ navigation, route }) => {

    const docRef = doc(db, "users", `${auth.currentUser?.email}`);

    const [plans, setPlans] = useState([])
    const [localplans, setlocalplans] = useState([])
    const [extended, setExtended] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [editing, setEditing] = useState(0)

    const getUser = async () => {
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setlocalplans(docSnap.data().mealplans)
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        getUser();
    }, [showForm, plans])


    const toForm = (id) => {
        setEditing(id)
        setShowForm(true)
    }

    const deleteItem = async (id) => {
        const newRecords = localplans.filter(item => item.id != id)
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                mealplans: newRecords
            },
            { merge: true }
        )
        setPlans(newRecords);
    }

    const createNew = async () => {
        let max = 0
        localplans.forEach(item => { if (item.id > max) { max = item.id } })
        max++;
        const newRecords = [...localplans, { id: max, name: 'New' + max, meal: [] }]
        await setDoc(doc(db, "users", `${auth.currentUser.email}`),
            {
                mealplans: newRecords
            },
            { merge: true }
        )
        setPlans(newRecords)
        setlocalplans(newRecords)
        setEditing(max)
        setShowForm(true)
    }

    return (
        showForm ? <MealForm editing={editing} setShowForm={setShowForm} plans={localplans} /> :
            <View style={styles.container}>
                <TouchableOpacity style={styles.AddBut} onPress={createNew}>
                    <Text style={styles.ButText}>Add Meal</Text>
                    <FontAwesomeIcon icon={faPlus} size={25} color={'white'} />
                </TouchableOpacity>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={localplans}
                    renderItem={({ item }) =>
                        <MealItem plan={item} extended={extended} set={setExtended} toForm={toForm} onDelete={deleteItem} />
                    }
                    contentContainerStyle={styles.List}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(77, 77, 77)'
    },
    Title: {
        fontSize: 22
    },
    List: {
        flexGrow: 1,
        padding: '5%',
    },
    AddBut: {
        backgroundColor: 'black',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'blue',
        borderWidth: 2
    },
    ButText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
})

export { Meal };