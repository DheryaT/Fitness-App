import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";


const TimerPresets = ({ preset, deleteItem,startTime }) => {


    return (
        <View style={styles.listItem}>
            <View style={styles.headerContent}>
                <Text style={styles.header}>
                    Preset:
                </Text>
            </View>
                <View style={styles.container}>
                    <View style={styles.lineContainer}>
                    <TouchableOpacity onPress={() => startTime(preset.id)}>
                            <FontAwesomeIcon icon={faCirclePlay} size={30} color={'white'} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 30 }}>{preset.Name}</Text>

                        <TouchableOpacity onPress={() => deleteItem(preset.id)}>
                            <FontAwesomeIcon icon={faTrashCan} size={30} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '90%',
        color: 'white',
        fontSize: 26,
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        paddingHorizontal: '5%',
        backgroundColor: 'rgb(51, 51, 51)',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    listItem: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'rgb(0, 115, 153)',
        margin: '5%',
        backgroundColor: 'rgb(64, 64, 64)',
        borderRadius: '10px',
        alignItems: 'center',
        shadowOpacity: .5,
        shadowOffset: { width: 10, height: 10 }
    },
    lineContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '1%',
        paddingHorizontal: '1%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        justifyContent: "space-evenly",
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: 'rgb(89, 89, 89)',
        borderRadius: 5,
        shadowOpacity: .5,
    },
    HeaderText: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '2.5%',
        marginBottom: '2.5%',
        backgroundColor: 'rgb(51, 51, 51)',
        justifyContent: "space-evenly",
        width: '100%',
    },
})

export { TimerPresets };