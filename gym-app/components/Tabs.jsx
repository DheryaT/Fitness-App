import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Calculator } from "./Calculator";
import { Login } from "./Login";
import { Timer } from "./Timer";
import { logoutFunction } from "../api/Authentication";
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion'

const Tabs = (props) => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} initialParams={{ user: props.user }} options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="black"
            />
          ),
          tabBarIcon: (info) => (<FontAwesomeIcon icon= {faHouse} size={25}/>)
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
          tabBarIcon: (info) => (<FontAwesomeIcon icon= {faCalculator} size={25}/>)
        }} />
        <Tab.Screen name="Timer" component={Timer} options={{
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
              <FontAwesomeIcon icon = {faCircleQuestion}/>
            </TouchableOpacity>
          ),
          tabBarIcon: (info) => (<FontAwesomeIcon icon={faStopwatch} size={25}/>)
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}
const styles = StyleSheet.create({
  image1: {
    height: 30,
    width: 30,
    marginLeft: 30,
    marginTop: -10,
  },
  buttonLoc: {
    height: "30%",
    width: "30%",
  },
})
export { Tabs };