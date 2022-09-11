import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { loginFunction, logoutFunction } from '../../api/Authentication';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { auth } from '../../firebase-config';

const Login = ({ navigation, route }) => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginLoad = () => {
        loginFunction(auth,
            loginEmail,
            loginPassword)
    }

    return (

        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <FontAwesomeIcon style={styles.logo} icon={faRightToBracket} size={75} color='white' />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    onChangeText={(text) => {
                        setLoginEmail(text);
                    }}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setLoginPassword(text);
                    }}
                />
            </View>
            <TouchableOpacity style={styles.Button} onPress={() => loginLoad()}>
                <Text style={styles.butText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.butText}>Register</Text>
            </TouchableOpacity>

        </KeyboardAwareScrollView>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgb(77, 77, 77)'
    },
    Button: {
        backgroundColor: 'black',
        width: '40%',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5%',
        borderRadius: 5,
    },
    butText: {
        color: 'white'
    },
    TextInput: {
        height: 50,
        width: '100%',
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    logo: {
        marginBottom: 50
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "70%",
        height: 50,
        marginBottom: 20,
        alignItems: "left",
    },
})

export { Login }; //tes