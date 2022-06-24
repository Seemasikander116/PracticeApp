
import React from 'react'

import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../View/Home';
import Card from '../View/Card';
import Login from '../View/Login';
import Registration from '../View/Registration';
import Detail from '../View/Detail';
import Icon from 'react-native-vector-icons/Entypo'
const Tab = createBottomTabNavigator();
const Midbutton=({children,onPress})=>{
  return(
  <TouchableOpacity
  style={{
    top:-30,
    justifyContent:'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
<View style={{width:70,height:70,borderRadius:35,
backgroundColor:'#e32f45'}}>
  {children}
</View>
  </TouchableOpacity>
  )
}
const BottomNavigation=()=> {
  return (
    <Tab.Navigator 
      screenOptions={{
       tabBarShowLabel:false,
       tabBarStyle:{
        position:'absolute',
        bottom:15,
        left:20,
        right:20,
        backgroundColor:'#fff',
        height:70,
        borderRadius:15,
        elevation:0,
        ...styles.shadow
      }
      }}

    > 
        <Tab.Screen 
      name="Login" 
      component={Login}
   options={{
     tabBarIcon:({focused})=>(
       <View style={{alignItems:'center', justifyContent:'center', top:10}}>
         {/* <Icon name="window"  style={{width:25,height:25}} color={focused ? '#e32f45' : '#748c94'}/> */}
         <Icon name='user' size={20} color={focused ? '#e32f45' : '#748c94'} style={{width:20}}/>
         <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12 }}>Login</Text>
       </View>
     )
   }}
       />

<Tab.Screen 
      name="Detail" 
      component={Detail}
   options={{
     tabBarIcon:({focused})=>(
       <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Icon name='menu' size={20} color={focused ? '#e32f45' : '#748c94'} style={{width:20}}/>
                 <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12 }}>Detail</Text>
       </View>
     )
   }}
       />
   <Tab.Screen name="Home" component={Home} 
       options={{
        tabBarIcon:({focused})=>(
            <Icon name='home' size={20} color={'white'} style={{width:20}}/>
            
        ),
        tabBarButton:(props)=>(
          <Midbutton {...props}/>
        ),
        headerShown:false
      }}
      />
      <Tab.Screen 
      name="Registration" 
      component={Registration}
   options={{
     tabBarIcon:({focused})=>(
       <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                  <Icon name='menu' size={20} color={focused ? '#e32f45' : '#748c94'} style={{width:20}}/>
          <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12 }}>Reg</Text>
       </View>
     ),
     headerShown:false
   }}
       />
       <Tab.Screen 
      name="Card" 
      component={Card}
   options={{
     tabBarIcon:({focused})=>(
       <View style={{alignItems:'center', justifyContent:'center', top:10}}>
         <Icon name='list' size={20} color={focused ? '#e32f45' : '#748c94'} style={{width:20}}/>
         <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12 }}>Card</Text>
       </View>
     )
   }}
       />
    </Tab.Navigator>
  );
}
export default BottomNavigation
const styles = StyleSheet.create({
shadow:{
shadowColor:'#7F5DF0',
ShadowOffset:{
width:0,
height:10
},
shadowOpacity:0.25,
shadowRadius:3.5,
elevation:5
}
})
