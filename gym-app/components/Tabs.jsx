import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Calculator } from "./Calculator";
import { Login } from "./Login";
import { Timer } from "./Timer";


const Tabs = (props) => {

    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} initialParams = {{user: props.user}}/>
                <Tab.Screen name="Calc" component={Calculator} />
                <Tab.Screen name="Timer" component={Timer} />
                <Tab.Screen name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                    initialParams = {{auth: props.auth}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { Tabs };