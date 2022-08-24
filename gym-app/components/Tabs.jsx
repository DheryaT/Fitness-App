import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Calculator } from "./Calculator";
import { Login } from "./Login";
import { Timer } from "./Timer";
import { logoutFunction } from "../api/Authentication";


const Tabs = (props) => {

    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} initialParams = {{user: props.user}}  options={{
                     headerTitle: "Home",
                     headerRight: () => (
                     <Button
                        onPress={() => logoutFunction(props.auth)}
                        title="LogOut"
                        color="black"
                        />
                      ),
                    }}/>
                <Tab.Screen name="Calc" component={Calculator} options={{
                     headerTitle: "Home",
                     headerRight: () => (
                     <Button
                        onPress={() => logoutFunction(props.auth)}
                        title="LogOut"
                        color="black"
                        />
                      ),
                    }}/>
                <Tab.Screen name="Timer" component={Timer} options={{
                     headerTitle: "Home",
                     headerRight: () => (
                     <Button
                        onPress={() => logoutFunction(props.auth)}
                        title="LogOut"
                        color="black"
                        />
                      ),
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { Tabs };