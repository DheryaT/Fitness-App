import React, { useState } from 'react';
import { Button } from 'react-native';
import {ImageBackground, StyleSheet,Text,View, Image,TextInput} from 'react-native';
import { loginFunction, logoutFunction } from '../api/Authentication';

const image = { uri: "https://preview.redd.it/32zg2lkzo9l81.png?auto=webp&s=b2bad9bd024bf71d4a2592ddc8aace2cef65af0a" };

const Login = ({navigation, route}) => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginLoad = ()=>{

        loginFunction(route.params.auth,
            loginEmail,
            loginPassword)
        
    }

    return(
        
        <View style={styles.container}>

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
             onChangeText={(text) => {
                setLoginPassword(text);
            }}
            />
            </View>
            <Button
                 title="Login"
                 onPress={() =>
                    loginLoad()
                }
            />
            <Button
                 title="Register"
                 onPress={() =>
                 navigation.navigate('Register', {auth: route.params.auth})
                }
            />
            
        </View>

        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    TextInput: {
        height: 50,
        width: '100%',
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%', 
        height: '100%',
      },
      inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 50,
        marginBottom: 20,
        alignItems: "left",
      },
})

export { Login }; //tes