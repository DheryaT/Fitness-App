import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ScheduleForm } from "./ScheduleForm";
import { ScheduleItem } from "./ScheduleItem";
import { faPlus } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { getDbUser, setDbUser } from "../api/Database";

const Schedule = ({ navigation, route }) => {

    const [plans, setPlans] = useState([])
    const [extended, setExtended] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [editing, setEditing] = useState(0)

    const getUser = async () => {
        const user = await getDbUser()
        setPlans(user.schedule)
    };

    useEffect(() => {
        getUser();
    }, [showForm, plans])


    const toForm = (id) => {
        setEditing(id)
        setShowForm(true)
    }

    const deleteItem = async (id) => {
        const newSchedule = plans.filter(item => item.id != id)
        await setDbUser({schedule: newSchedule})
    }

    const createNew = async () => {
        let max = 0
        plans.forEach(item => { if (item.id > max) { max = item.id } })
        max++;
        const newSchedule = [...plans, { id: max, name: 'New' + max, workout: [] }]
        await setDbUser({schedule: newSchedule})
        setPlans(newSchedule)
        setEditing(max)
        setShowForm(true)
    }

    return (
        showForm ? <ScheduleForm editing={editing} setShowForm={setShowForm} plans={plans} /> :
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={plans}
                    renderItem={({ item }) =>
                        <ScheduleItem plan={item} extended={extended} set={setExtended} toForm={toForm} onDelete={deleteItem} />
                    }
                    contentContainerStyle={styles.List}
                />
                <TouchableOpacity style={styles.AddBut} onPress={createNew}>
                    <Text style={styles.ButText}>Add Workout</Text>
                    <FontAwesomeIcon icon={faPlus} size={25} color={'white'} />
                </TouchableOpacity>
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