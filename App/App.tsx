import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './global.css'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import Register from './src/screens/Register'
import Login from './src/screens/Login'

export type RootStackParamList={
  Home: undefined,
  Login: undefined,
  Register: undefined,
}

const  Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={Home}   
          options={{
            title:"Home",
          }}       
        />
        <Stack.Screen
          name="Login"
          component={Login} 
          options={{
            title:"Login",
          }}            
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title:"Register",
          }}             
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})