import React, { useState, useEffect } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item, TouchableOpacity} from 'react-native';
import { ScheduleForm } from "./ScheduleForm";
import { ScheduleItem } from "./ScheduleItem";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";
import { faPlus } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Schedule = ({navigation, route}) => {

    const docRef = doc(db, "users", `${auth.currentUser.email}`);

    const [plans, setPlans] = useState([])
    const [extended, setExtended] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [editing , setEditing] = useState(0)

    const getUser = async () => {
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setPlans(docSnap.data().schedule)
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

    const deleteItem = async (id) =>{
        const newSchedule = plans.filter(item => item.id != id)
        await setDoc(doc(db, "users", `${auth.currentUser.email}`), 
        {
            schedule: newSchedule
        },
        {merge: true}
        )
    }

    const createNew = async () =>{
        let max = 0
        plans.forEach(item => {if(item.id > max){max = item.id}})
        max++;
        const newSchedule = [...plans,{id: max, name: 'New'+max, workout:[]}]
        await setDoc(doc(db, "users", `${auth.currentUser.email}`), 
        {
            schedule: newSchedule
        },
            {merge: true}
        )
        setPlans(newSchedule)
        setEditing(max)
        setShowForm(true)
    }

    return(
        showForm ? <ScheduleForm editing = {editing} setShowForm = {setShowForm} plans = {plans}/> :
        <View style={styles.container}>
            <FlatList
            keyExtractor = {(item, index) => item.id}
            data = {plans}
            renderItem={({item}) => 
                <ScheduleItem plan = {item} extended = {extended} set = {setExtended} toForm = {toForm} onDelete = {deleteItem}/>
            }
            contentContainerStyle = {styles.List}
            />
            <TouchableOpacity style={styles.AddBut} onPress={createNew}>
                <Text style={styles.ButText}>Add Workout</Text>
                <FontAwesomeIcon icon={faPlus} size={25} color={'white'}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(77, 77, 77)'
    },
    Title:{
        fontSize: 22
    },
    List:{
        flexGrow: 1,
        padding: '5%',
    },
    AddBut:{
        backgroundColor: 'black',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'green',
        borderWidth: 2
    },
    ButText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
})

export { Schedule };