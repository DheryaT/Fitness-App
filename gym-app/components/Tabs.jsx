import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Presentation/Home";
import { Calculator } from "./Logic/Calculator";
import { Meal } from "./Logic/Meal";
import { logoutFunction } from "../api/Authentication";
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faStopwatch, faCalculator, faCircleQuestion, faUtensils } from '@fortawesome/free-solid-svg-icons/'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TimerContainer } from "./Logic/TimerContainer";
import { Schedule } from './Logic/Schedule'

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
        <Tab.Screen name="Home" component={Home} options={{
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
          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faUtensils} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />)
        }} />

        <Tab.Screen name="Calc" component={Calculator} options={{
          headerTitle: "Calculator / History",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />
          ),
          tabBarIcon: ({ focused }) => (<FontAwesomeIcon icon={faCalculator} color={focused ? "white" : "rgb(150, 150, 150)"} size={25} />)
        }} />
        <Tab.Screen name="Time" component={TimerContainer} options={{

          headerTitle: "Timer",
          headerRight: () => (
            <Button
              onPress={() => logoutFunction(props.auth)}
              title="LogOut"
              color="white"
            />

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