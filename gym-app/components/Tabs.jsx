import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Calculator } from "./Calculator";
import { CountdownTimer } from "./CountdownTimer";
import { Login } from "./Login";
import { Timer } from "./Timer";
import { logoutFunction } from "../api/Authentication";
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion'
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { TimerContainer } from "./TimerContainer";
import {Schedule} from './Schedule'

const Tabs = (props) => {
  const Tab = createBottomTabNavigator();
  const Stacks = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black', },
          headerStyle: { backgroundColor: 'black', },
          headerTitleStyle: { color: 'white'}
        }}
      >
        <Tab.Screen name="Home" component={Home} initialParams={{ user: props.user }} options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="black"
            />
          ),
          tabBarIcon: (info) => (<FontAwesomeIcon icon= {faHouse} color='white' size={25}/>)
          
        }} 
        
        />
        <Tab.Screen name="Schedule" component={Schedule} options={{
          headerTitle: "Schedule",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="black"
            />
          ),
          tabBarIcon: (info) => (<FontAwesomeIcon icon= {faCalendarDays} color='white' size={25}/>)
        }} />

        <Tab.Screen name="Calc" component={Calculator} options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="black"
            />
          ),
          tabBarIcon: (info) => (<FontAwesomeIcon icon= {faCalculator} color='white' size={25}/>)
        }} />
        <Tab.Screen name="Timer" component={TimerContainer} options={{

          headerTitle: "Timer",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="black"
            />
            
          ),
          headerLeft: () => (
            <TouchableOpacity style={styles.buttonLoc} onPress={() => { alert("Timer does this and does that") }}>
              <FontAwesomeIcon icon = {faCircleQuestion} size = {30}/>
            </TouchableOpacity>
          ),
          tabBarIcon: (info) => (<FontAwesomeIcon icon={faStopwatch} color='white' size={25}/>)
          
        }} />

      </Tab.Navigator>
      
    </NavigationContainer>

    
  )
}

const styles = StyleSheet.create({
  buttonLoc: {
    height: "30%",
    width: "30%",
    marginLeft: 20,
    marginLeft: 25,
    marginTop: -20,
  },
})
export { Tabs };