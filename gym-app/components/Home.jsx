import React from "react";
import {ImageBackground, StyleSheet,Text,View, Image,TextInput} from 'react-native';

const Home = ({navigation, route}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.Title}>Hi {route.params.user?.email} {"\n"}Let's check your activity</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    Title:{
        fontSize: 22
    },

})
export { Home };