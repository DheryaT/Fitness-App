import React, { useState } from 'react';
import {ImageBackground, StyleSheet,Text,View, Image,TextInput} from 'react-native';

const image = { uri: "https://preview.redd.it/32zg2lkzo9l81.png?auto=webp&s=b2bad9bd024bf71d4a2592ddc8aace2cef65af0a" };

const Login = () => {
    return(
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Username"
                placeholderTextColor="#FFC0CB"
            />
            </View>
            <View style={styles.inputView}>
            <TextInput style={styles.TextInput}
             placeholder="Password"
             placeholderTextColor="#FFC0CB"
            />
            </View>
            
        </View>
        </ImageBackground>
        
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

export { Login }; //tes