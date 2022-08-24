import React, { useState } from 'react';
import {ImageBackground, StyleSheet,Text,View, Image,TextInput} from 'react-native';
import { registerFunction } from '../api/Authentication';
import { Button } from 'react-native';

const image = { uri: "https://preview.redd.it/32zg2lkzo9l81.png?auto=webp&s=b2bad9bd024bf71d4a2592ddc8aace2cef65af0a" };

const Register = ({navigation, route}) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    return(

        <View style={styles.container}>
            <Text>{route.params.auth ? "Yes" : "No"}</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Register Email"
                onChangeText={(text) => {
                  setRegisterEmail(text);
                }}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput style={styles.TextInput}
             placeholder="Register Password"
             onChangeText={(text) => {
                setRegisterPassword(text);
              }}
            />
            </View>
            
            <Button
              title = "Register"
              onPress={() => registerFunction( route.params.auth,
                registerEmail,
                registerPassword)}
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

export { Register }; //tes