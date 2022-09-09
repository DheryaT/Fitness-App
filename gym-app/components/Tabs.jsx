import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Calculator } from "./Calculator";
import { Meal } from "./Meal";
import { logoutFunction } from "../api/Authentication";
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faStopwatch, faCalculator, faCircleQuestion } from '@fortawesome/free-solid-svg-icons/'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TimerContainer } from "./TimerContainer";
import { Schedule } from './Schedule'

const Tabs = (props) => {
  const Tab = createBottomTabNavigator();
  const Stacks = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'rgb(51, 51, 51)', padding: 10, height: "12%", },
          headerStyle: { backgroundColor: 'rgb(51, 51, 51)', },
          headerTitleStyle: { color: 'white' },
          tabBarLabelStyle: { fontSize: 14, color: "white" }
        }}

      >
        <Tab.Screen name="Home" component={Home} initialParams={{ user: props.user }} options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />
          ),

          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faHouse} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />),
        }}

        />
        <Tab.Screen name="Schedule" component={Schedule} options={{
          headerTitle: "Schedule",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />
          ),
          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faCalendarDays} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />)
        }} />

        <Tab.Screen name="Meal" component={Meal} options={{
          headerTitle: "MealPlans",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />
          ),
          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faCalculator} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />)
        }} />

        <Tab.Screen name="Calc" component={Calculator} options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />
          ),
          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faCalculator} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />)
        }} />
        <Tab.Screen name="Timer" component={TimerContainer} options={{

          headerTitle: "Timer",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />

          ),
          headerLeft: () => (
            <TouchableOpacity style={styles.buttonLoc} onPress={() => { alert("Timer does this and does that") }}>
              <FontAwesomeIcon icon={faCircleQuestion} size={30} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faStopwatch} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />)

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