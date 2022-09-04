import React, { useState } from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, Button, FlatList, Item} from 'react-native';
import { ScheduleItem } from "./ScheduleItem";


const Schedule = ({navigation, route}) => {

    const [plans, setPlans] = useState([{id: "1", name: "back"}, {id: "2", name: "back"}])

    return(
        <View style={styles.container}>
            <FlatList
            data = {plans}
            renderItem={({item}) => (
                <ScheduleItem plan = {item}/>
            )}
            keyExtractor = {(item) => item.id}
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
    ListItem: {
        flex: 1,
        backgroundColor: 'black'
    }

})

export { Schedule };