import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { CountdownTimer } from "./CountdownTimer";
import { Timer } from "./Timer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const TimerContainer = () => {
    const Stacks = createNativeStackNavigator();

    return (
        <Stacks.Navigator screenOptions={{headerShown: false}}>
            <Stacks.Screen name="Timer" component={Timer} />
            <Stacks.Screen name="CountdownTimer" component={CountdownTimer} />
        </Stacks.Navigator>
    )
}



export { TimerContainer }; //tes