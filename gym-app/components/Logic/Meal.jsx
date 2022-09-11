import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Button, FlatList, Item, TouchableOpacity } from 'react-native';
import { MealForm } from "./MealForm";
import { MealItem } from "../Presentation/MealItem";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { faPlus } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { setDbUser } from "../../api/Database";
import { getDbUser } from "../../api/Database";

const Meal = ({ navigation, route }) => {

    const docRef = doc(db, "users", `${auth.currentUser?.email}`);

    const [plans, setPlans] = useState([])
    const [localplans, setlocalplans] = useState([])
    const [extended, setExtended] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [editing, setEditing] = useState(0)

    const getUser = async () => {
        //get the user mealplans field data
        const docSnap = await getDbUser()
        setlocalplans(docSnap.mealplans)
    };

    useEffect(() => {
        getUser();
    }, [showForm, plans])


    const toForm = (id) => {
        //boolean for going to the form component when creating or editing schedule
        setEditing(id)
        setShowForm(true)
    }

    const deleteItem = async (id) => {
        //remove mealschedule from the database
        const newRecords = localplans.filter(item => item.id != id)
        await setDbUser({mealplans: newRecords})
        setPlans(newRecords);
    }

    const createNew = async () => {
        //creates a new meal plan schedule, with empty meal array, an id and a default name, and add to users data
        let max = 0
        localplans.forEach(item => { if (item.id > max) { max = item.id } })
        max++;
        const newRecords = [...localplans, { id: max, name: 'New' + max, meal: [] }]
        await setDbUser({mealplans: newRecords})
        setPlans(newRecords)
        setlocalplans(newRecords)
        setEditing(max)
        setShowForm(true)
    }

    return (
        //show the meal screen if you are not editing or creating a new mealplan, otherwise show the form screen component
        showForm ? <MealForm editing={editing} setShowForm={setShowForm} plans={localplans} deleting={deleteItem}/> :
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