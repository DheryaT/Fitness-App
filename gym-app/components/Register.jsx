import React, { useState } from 'react';
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, ScrollView} from 'react-native';
import { registerFunction } from '../api/Authentication';
import { Button } from 'react-native';
import { auth } from '../firebase-config';

const image = { uri: "https://preview.redd.it/32zg2lkzo9l81.png?auto=webp&s=b2bad9bd024bf71d4a2592ddc8aace2cef65af0a" };

const Register = ({navigation, route}) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")

    const registerClick = () => {
      registerFunction(auth, registerEmail, registerPassword, username, setError);

      if(error){
        alert(error)
      }

      
    }

    return(

        <ScrollView contentContainerStyle={styles.container}>
            
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Register Email"
                placeholderTextColor="grey" 
                onChangeText={(text) => {
                  setRegisterEmail(text);
                }}
            />
            </View>
            
            <View style={styles.inputView}>
            <TextInput style={styles.TextInput}
             placeholder="Username"
             placeholderTextColor="grey" 
             onChangeText={(text) => {
                setUsername(text);
              }}
            />
            </View>
            
            <View style={styles.inputView}>
            <TextInput style={styles.TextInput}
             placeholder="Register Password"
             placeholderTextColor="grey" 
             onChangeText={(text) => {
                setRegisterPassword(text);
              }}
            />
            </View>
            
            <Button
              title = "Register"
              onPress={registerClick}
            />
            
        </ScrollView>

        
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
        color: 'white',
        
      },
      image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%', 
        height: '100%',
      },
      inputView: {
        backgroundColor: "black",
        borderRadius: 30,
        width: "70%",
        height: 50,
        margin: 20,
        alignItems: "left",
      },
})

export { Register }; //tes