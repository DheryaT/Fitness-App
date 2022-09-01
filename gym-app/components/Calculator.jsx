import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const Calculator = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('One Rep Max');
    const [items, setItems] = useState([
        { label: 'One Rep Max', value: 'One Rep Max' },
        { label: 'Strength Level', value: 'Strength Level' }
    ])
    const [weightLifted, setWeightLifted] = useState(0);
    const [repsPerformed, setRepsPerformed] = useState(0);


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.calculatorTitle}>
                    Calculate
                </Text>

                <DropDownPicker style={styles.dropdown}
                    textStyle={{
                        fontSize: 24,
                        color: "white",
                        alignItems: "center",
                        alignContent: "center",
                    }}
                    containerStyle={{
                        alignItems: "center",
                        alignContent: "center",
                    }}
                    listItemLabelStyle={{
                        fontSize: 15,
                    }}


                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme="DARK"

                />
            </View>
            <View style={styles.textinputscontainer}>
                <View>
                    <Text style={styles.headerText}>
                        Lift:
                    </Text>
                    <Text style={styles.headerText}>
                        Reps:
                    </Text>

                </View>
                <View style={styles.inputFields}>
                    <TextInput style={styles.input}
                        placeholder="Weight"
                        onChangeText={(text) => {
                            setWeightLifted(text);
                        }}>

                    </TextInput>
                    <TextInput style={styles.input}
                        placeholder="Weight"
                        onChangeText={(text) => {
                            setRepsPerformed(text);
                        }}>
                    </TextInput>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    content: {
        backgroundColor: '#171717',
        borderRadius: '5%',
        borderRadius: 10,
        margin: '3%',
    },
    calculatorTitle: {
        alignItems: "center",
        alignContent: "center",
        margin: '2%',
        fontSize: 32,
        color: "white",
    },
    dropdown: {
        alignItems: "center",
        alignContent: "center",
        color: "white",
        backgroundColor: '#171717',
        borderRadius: 5,
        color: "white",
    },
    textinputscontainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#171717",
        flexWrap: "wrap",
        zIndex: -1,
    },
    headerText: {
        backgroundColor: 'blue',
        fontSize: 36,
        padding: 10,
        marginLeft: 20,
        color: "white",
        width: '100%',
    },
    inputFields: {
        width: '60%',
        paddingTop: 5,
        backgroundColor: 'red',
    },
    input: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        width: '40%',
        fontSize: 16,
        borderRadius: 15,
        margin: 10,
        color: "#000000",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
    },
})

export { Calculator }; //tes