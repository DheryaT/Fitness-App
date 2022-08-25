import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button } from 'react-native';

const CountdownTimer = () => {

    return(
        <View style={styles.container}>
            <Text >Timer Display</Text>
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
export { CountdownTimer }; //tes