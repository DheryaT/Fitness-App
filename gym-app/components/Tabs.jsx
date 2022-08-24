import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Calculator } from "./Calculator";
import { Login } from "./Login";
import { Timer } from "./Timer";
import { logoutFunction } from "../api/Authentication";


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
              <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/640px-Icon-round-Question_mark.svg.png', }}
                style={styles.image1} />
            </TouchableOpacity>
          ),
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