import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item} from 'react-native';
import { ScheduleForm } from "./ScheduleForm";
import { ScheduleItem } from "./ScheduleItem";


const Schedule = ({navigation, route}) => {

    const [plans, setPlans] = useState([{id: 1, name: "back", workout:[{sets: 1, excercise: 'rows', reps: 12}, {sets: 3, excercise: 'pull ups', reps: 12}, {sets: 3, excercise: 'pull ups', reps: 12}, {sets: 3, excercise: 'pull ups', reps: 12},{sets: 3, excercise: 'pull ups', reps: 12}]}, {id: 2, name: "back", workout:[{sets: 1, excercise: 'rows', reps: 12}, {}]}])
    const [extended, setExtended] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [editing , setEditing] = useState(0)

    const toForm = (id) => {
        setEditing(id)
        setShowForm(true)
    }
    

    return(
        showForm ? <ScheduleForm editing = {editing} setShowForm = {setShowForm}/> :
        <View style={styles.container}>
            <FlatList
            keyExtractor = {(item) => item.id.toString()}
            data = {plans}
            renderItem={({item}) => (
                <ScheduleItem plan = {item} extended = {extended} set = {setExtended} toForm = {toForm}/>
            )}
            contentContainerStyle = {styles.List}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Title:{
        fontSize: 22
    },
    List:{
        flexGrow: 1,
        padding: '5%',

    },
    ListItem: {
        flex: 1,
        backgroundColor: 'black'
    }

})

export { Schedule };