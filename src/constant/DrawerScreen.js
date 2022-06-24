import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../View/Home';
import LoginScreen from '../View/LoginScreen';
import BottomNavigation from './BottomNavigation'
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
<Drawer.Navigator initialRouteName='BottomNavigation' >
      <Drawer.Screen options={{headerShown:false}} name="Home" component={Home} />
      <Drawer.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen} />
      

    </Drawer.Navigator>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({
 
})