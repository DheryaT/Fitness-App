import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item} from 'react-native';


const ScheduleItem = ({plan}) => {

    return(
        <View style={styles.ListItem}>
            <Text style= {{color: 'white'}}>{plan.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    Title:{
        fontSize: 22
    },
    ListItem: {
        flex: 1,
        backgroundColor: 'black',
        width: '90%',
        borderColor: ''
    }

})

export { ScheduleItem };