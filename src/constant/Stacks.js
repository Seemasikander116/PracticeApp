import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../View/Detail';
import CardBottom from '../View/CardBottom';
import Card from '../View/Card';
import Registration from '../View/Registration';
import CardItems from '../View/CardItems';
import DrawerScreen from './DrawerScreen';
import Cart from '../View/Cart';
const Stack = createStackNavigator();

const Stacks=()=>{
  return (
    <Stack.Navigator>

<Stack.Screen options={{headerShown:false}}  name="Home" component={DrawerScreen} />

<Stack.Screen options={{headerShown:false}} name="Card" component={Card} />
      <Stack.Screen options={{headerShown:false}} name="CardBottom" component={CardBottom} />
      <Stack.Screen options={{headerShown:false}} name="Detail" component={Detail} />
      <Stack.Screen options={{headerShown:false}} name="Registration" component={Registration} />

      <Stack.Screen options={{headerShown:false}} name="CardItems" component={CardItems} />
      <Stack.Screen options={{headerShown:false}} name="Cart" component={Cart} />

    </Stack.Navigator>
  );
}
export default Stacks