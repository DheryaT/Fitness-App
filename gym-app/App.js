import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';
import { Tabs } from './components/Tabs';
import {Register} from './components/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { auth } from "./firebase-config";


export default function App() {

  const Stack = createNativeStackNavigator();
  const loggedin = false;



  return (
    loggedin ?  <Tabs/> : <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
        initialParams = {{auth: auth}}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

