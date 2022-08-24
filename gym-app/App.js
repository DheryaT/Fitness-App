import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';
import { Tabs } from './components/Tabs';
import {Register} from './components/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { auth } from "./firebase-config";
import { useState } from 'react';
import {
  onAuthStateChanged
} from "firebase/auth";


export default function App() {

  const Stack = createNativeStackNavigator();
  const [loggedin, setLoggedIn ]= useState(false);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoggedIn(user ? true : false)
  });


  return (
    loggedin ?  <Tabs user={user} auth={auth}/> : <NavigationContainer>
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

