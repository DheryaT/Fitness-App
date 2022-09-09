import React from 'react';
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