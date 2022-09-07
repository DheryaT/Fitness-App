import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item, TouchableOpacity} from 'react-native';
import { faArrowTrendUp, faChevronDown, faChevronUp, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ScheduleItem = ({plan, extended, set, toForm, onDelete}) => {
    
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
                <TouchableOpacity style={styles.HeaderBut} onPress={() => onDelete(plan.id)} >
                    <FontAwesomeIcon icon={faTrashCan} size={25} color={'white'}/>
                </TouchableOpacity>
            </View>

                {plan.workout.map((item, index) => ((!extended?.includes(plan.id)) ? 
                    ((index < 3) ? <View style={styles.lineContainer} key = {index}>
                    <Text style= {{color: 'white', width: '10%', fontSize: 20}}>{item.sets}</Text>
                    <Text style= {{color: 'white', width: '80%', fontSize: 18}}>{item.exercise}</Text>
                    <Text style= {{color: 'white', width: '10%', fontSize: 20}}>{item.reps}</Text>
                    </View> : <View key = {index}></View>): 
                    <View style={styles.lineContainer} key = {index}>
                        <Text style= {{color: 'white', width: '10%', fontSize: 20}}>{item.sets}</Text>
                        <Text style= {{color: 'white', width: '80%', fontSize: 18}}>{item.exercise}</Text>
                        <Text style= {{color: 'white', width: '10%', fontSize: 20}}>{item.reps}</Text>
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
    lineContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        
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
        shadowOffset: {width: 10, height: 10}
    },
    Header: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        marginBottom: '2.5%',
        backgroundColor: 'rgb(51, 51, 51)',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        
    },
    HeaderBut: {
        width: '10%'
    },
    saveBut: {
        width: '10%',
        marginVertical: '2.5%',
    },
    
    HeaderTitle: {
        width: '80%',
        color: 'white', 
        fontSize: 26,
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    }

})

export { ScheduleItem };