import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Login } from './components/Login';
import { Tabs } from './components/Tabs';
import { Register} from './components/Register'
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
  const [isLoading, setIsLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoggedIn(user ? true : false)

  });


  return (
    isLoading ?<View style={styles.container}><ActivityIndicator size="large" color="black"/></View>  :  (loggedin ? <Tabs user={user} auth={auth}/> : <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login'}}
        initialParams = {{auth: auth, log: setIsLoading }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>) 
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin: 20,
      alignContent: 'center',
      justifyContent: 'center'
  },
  Title:{
      fontSize: 22
  },

})
