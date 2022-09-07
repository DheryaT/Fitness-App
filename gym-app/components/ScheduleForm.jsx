import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item, TouchableOpacity} from 'react-native';
import { faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase-config";

const ScheduleForm = ({editing, setShowForm, plans}) => {

    const editObj = plans.find(item => item.id == editing)
    const [pList, setPList] = useState(editObj.workout)
    const [title, setTitle] = useState(editObj.name)

    const addItem = () =>{
        setPList([...pList, {sets: '', exercise: '', reps: ''}])
    }

    const updateItem = (index, text, type) => {
        setPList(pList.map((item, i) => i==index ? (type=='sets' ? Object.assign(item, {sets: text}): (type=='exercise' ? Object.assign(item, {exercise: text}): Object.assign(item, {reps: text}))): item))
        console.log(pList)
    }

    const deleteItem = (i) => {
        setPList(pList.filter((item, index) => index!=i))
    }

    const saveSchedule = async () => {
        const newSchedule = plans.map(item => editing == item.id ? {id: editObj.id, name: title, workout: pList} : item)
        await setDoc(doc(db, "users", `${auth.currentUser.email}`), 
        {
            schedule: newSchedule
        },
        {merge: true}
        )
        setShowForm(false)
    }

    return(
        <KeyboardAwareScrollView style = {styles.screenContainer}>
                <View style = {styles.ListItem}>
                    <TextInput defaultValue= {editObj.name} style = {styles.inputTitle} onChangeText = {(text) => {setTitle(text)} }/>

                    {pList.map((item, index) => 
                    (<View style = {styles.container} key={index}>
                        <TextInput defaultValue = {item.sets} style = {styles.inputNum} onChangeText= {(text)=>updateItem(index, text, 'sets')}/>
                        <TextInput defaultValue = {item.exercise} style = {styles.input} onChangeText= {(text)=>updateItem(index, text, 'exercise')}/>
                        <TextInput defaultValue = {item.reps} style = {styles.inputNum} onChangeText= {(text)=>updateItem(index, text, 'reps')}/>
                        
                        <TouchableOpacity style = {styles.itemBut}  onPress={() => deleteItem(index)}>
                            <FontAwesomeIcon icon={faTrashCan} size={25} color={'black'}/>
                        </TouchableOpacity>

                    </View>))}
    
                    <TouchableOpacity style = {styles.botBut}  onPress={addItem}>
                        <FontAwesomeIcon icon={faPlusCircle} size={40} color={'white'}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.controls}>
                    <TouchableOpacity style = {styles.botBut}  onPress={()=> setShowForm(false)}>
                        <Text style={styles.ButText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.botBut}  onPress={saveSchedule}>
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
    },
    Title:{
        fontSize: 22
    },
    ListItem: {
        borderWidth: 3,
        borderColor: 'rgb(0, 115, 153)',
        margin: '5%',
        backgroundColor: 'rgb(64, 64, 64)',
        borderRadius: '10px',
        alignItems: 'center',
        shadowOpacity: .5,
        shadowOffset: {width: 10, height: 10},
        padding: '5%'
    },
    Header: {
        flex: 1,
        flexDirection: 'row',
        padding: '1%',
        marginBottom: '2.5%'
    },
    HeaderBut: {
        width: '10%'
    },
    HeaderTitle: {
        width: '80%',
        color: 'white', 
        fontSize: 26,
        alignContent: 'center',
        textAlign: 'center'
    },
    botBut: {
        marginTop: 20
    },
    itemBut: {
        padding: 5,
        marginTop: 10
    },
    input: {
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
        height: 40,

    },
    inputTitle: {
        backgroundColor: "#FFFFFF",
        width: '70%',
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
    inputNum:{
        backgroundColor: "#FFFFFF",
        width: '15%',
        padding: 5,
        fontSize: 16,
        borderRadius: 5,
        color: "#000000",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        height: 40,
        margin: 5,
    }

})

export { ScheduleForm };