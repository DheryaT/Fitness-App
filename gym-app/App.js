import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Login } from './components/Presentation/Login';
import { Tabs } from './components/Tabs';
import { Register } from './components/Presentation/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from "./firebase-config";
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const Stack = createNativeStackNavigator();
  const [loggedin, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoggedIn(user ? true : false)
  });


  return (
    loggedin ? <Tabs user={user} auth={auth} /> : <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'rgb(51, 51, 51)', padding: 10, height: "12%", },
          headerStyle: { backgroundColor: 'rgb(51, 51, 51)', },
          headerTitleStyle: { color: 'white' },
          tabBarLabelStyle: { fontSize: 14, color: "white" }
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>)
    ;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignContent: 'center',
    justifyContent: 'center'
  },
  Title: {
    fontSize: 22
  },

})
