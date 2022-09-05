import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item, TouchableOpacity} from 'react-native';
import { faArrowTrendUp, faChevronDown, faChevronUp, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ScheduleItem = ({plan, extended, set, toForm}) => {
    
    const toggle = () => {
        if(extended.includes(plan.id)){
            set(extended.filter(item => item != plan.id))
        }else{
            set([...extended, plan.id])
        }
    }


    return(
        <View style={styles.ListItem}>
            <View style = {styles.Header}>
                <TouchableOpacity style={styles.HeaderBut} onPress={() => toForm(plan.id)} >
                    <FontAwesomeIcon icon={faPenToSquare} size={25} color={'white'}/>
                    </TouchableOpacity>
                <Text style= {styles.HeaderTitle}>{plan.name}</Text>
                <TouchableOpacity style={styles.HeaderBut} onPress={toggle} >
                    <FontAwesomeIcon icon={faTrashCan} size={25} color={'white'}/>
                    </TouchableOpacity>
            </View>

                {plan.workout.map((item, index) => ((!extended?.includes(plan.id)) ? 
                    ((index < 3) ? <View style={styles.container}>
                    <Text style= {{color: 'white', width: '10%'}}>{item.sets}</Text>
                    <Text style= {{color: 'white', width: '80%'}}>{item.exercise}</Text>
                    <Text style= {{color: 'white', width: '10%'}}>{item.reps}</Text>
                    </View> : <></>): 
                    <View style={styles.container}>
                        <Text style= {{color: 'white', width: '10%'}}>{item.sets}</Text>
                        <Text style= {{color: 'white', width: '80%'}}>{item.exercise}</Text>
                        <Text style= {{color: 'white', width: '10%'}}>{item.reps}</Text>
                    </View> 
                ))}
                <TouchableOpacity style={styles.saveBut} onPress={toggle} ><FontAwesomeIcon icon={extended.includes(plan.id) ? faChevronUp : faChevronDown} size={25} color={'white'}/></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    Title:{
        fontSize: 22
    },
    ListItem: {
        padding: '5%',
        margin: '5%',
        backgroundColor: 'black',
        borderRadius: '10px',
        borderColor: '',
        alignItems: 'center'
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
    }

})

export { ScheduleItem };