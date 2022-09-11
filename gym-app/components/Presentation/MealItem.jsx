import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { faChevronDown, faChevronUp, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const MealItem = ({ plan, extended, set, toForm, onDelete }) => {

    const toggle = () => {
        //toggle the extended view of the plan on the mealplans screen
        if (extended.includes(plan.id)) {
            set(extended.filter(item => item != plan.id))
        } else {
            set([...extended, plan.id])
        }
    }


    return (
        <View style={styles.ListItem}>
            <View style={styles.Header}>
                <TouchableOpacity style={styles.HeaderBut} onPress={() => toForm(plan.id)} >
                    <FontAwesomeIcon icon={faPenToSquare} size={25} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.HeaderTitle}>{plan.name}</Text>
                <TouchableOpacity style={styles.HeaderBut} onPress={() => onDelete(plan.id)} >
                    <FontAwesomeIcon icon={faTrashCan} size={25} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.HeaderText}>
                <Text style={styles.headerFontMid}>Food</Text>
                <Text style={styles.headerFontRight}>Amount</Text>
            </View>

            {plan.meal.map((item, index) => ((!extended?.includes(plan.id)) ?
                ((index < 3) ? <View style={styles.lineContainer} key={index}
                //if there are less than 3 items in a plan or the plan does not have the extended id, leave as 3 or less items rendered, else render all the items
                >
                    <Text style={{ color: 'white', width: '50%', fontSize: 18, textAlign: 'center' }}>{item.food}</Text>
                    <Text style={{ color: 'white', width: '50%', fontSize: 20, textAlign: 'center' }}>{item.amount}</Text>
                </View> : <View key={index}></View>) :
                <View style={styles.lineContainer} key={index}>
                    <Text style={{ color: 'white', width: '50%', fontSize: 18, textAlign: 'center' }}>{item.food}</Text>
                    <Text style={{ color: 'white', width: '50%', fontSize: 20, textAlign: 'center' }}>{item.amount}</Text>
                </View>
            ))}
            <TouchableOpacity style={styles.saveBut} onPress={toggle} ><FontAwesomeIcon icon={extended.includes(plan.id) ? faChevronUp : faChevronDown} size={25} color={'white'} /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    lineContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    ListItem: {
        borderWidth: 3,
        borderColor: 'black',
        margin: '5%',
        backgroundColor: 'rgb(64, 64, 64)',
        borderRadius: '10px',
        alignItems: 'center',
        shadowOpacity: .7,
        shadowOffset: { width: 10, height: 10 }
    },
    Header: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        backgroundColor: 'rgb(51, 51, 51)',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    HeaderText: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        marginBottom: '2.5%',
        backgroundColor: 'rgb(51, 51, 51)',
    },
    headerFontMid: {
        width: '50%',
        textAlign: 'center',
        color: 'white'
    },
    headerFontRight: {
        width: '50%',
        textAlign: 'center',
        color: 'white'
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

export { MealItem };