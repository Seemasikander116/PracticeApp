
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './src/constant/DrawerScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BottomNavigation from './src/constant/BottomNavigation';
import Stacks from './src/constant/Stacks';
const App=()=> {
  useEffect(() => {
     SplashScreen.hide()  
  }, [])
  return (
    <NavigationContainer>
   <Stacks/>
      {/* <BottomNavigation/> */}
    {/* <DrawerScreen/> */}
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
