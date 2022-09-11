import React, { useState } from 'react';
import {ImageBackground, StyleSheet,Text,View, Image,TextInput, TouchableOpacity,} from 'react-native';
import { registerFunction } from '../../api/Authentication';
import { Button } from 'react-native';
import { auth } from '../../firebase-config';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <FontAwesomeIcon style= {styles.logo} icon= {faUserPlus} size={100} color= 'white'/>
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
             secureTextEntry={true}
             autoCorrect={false}
             onChangeText={(text) => {
                setRegisterPassword(text);
              }}
            />
            </View>
            
      
            <TouchableOpacity style={styles.Button} onPress={registerClick} >
                <Text style={styles.butText}>Register User</Text>
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
    TextInput: {
      height: 50,
      width: '100%',
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    Button : {
      backgroundColor: 'black',
      width: '40%',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2.5%',
      borderRadius: 5,
  },
  butText:{
      color: 'white'
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

export { Register }; //tes