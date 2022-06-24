import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import CardItems from './CardItems'
import { useNavigation } from '@react-navigation/native'
const Registration = () => {
  const navigation = useNavigation()
  return (
    <View style={{marginTop:40,flex:1,backgroundColor:'#292929'}}>
    <View style={{backgroundColor:'#121212',flex:0.4,borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
  <View>
     <TouchableOpacity onPress={()=>navigation.goBack()} style={{flexDirection:'row',alignContent:'space-between',paddingTop:20,paddingLeft:10,paddingRight:10}}>

      <Icon name='chevron-thin-left' size={20} color={'#7C7A76'} style={{flex:3}}/>
     </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <Icon name='magnifying-glass' size={17} color='grey' style={{width:20}}/>
  <TextInput placeholder='Search Food..' placeholderTextColor='darkgrey'/>
   
      </View>
      <View>

    <Image source={require('../assets/images/burgers.jpeg')}  style={{borderRadius:100,width:180,height:180,marginHorizontal:100}}/>

      </View>
    </View>
    <View style={{flex:0.7}}>
  <CardItems/>
    </View>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({

  search:{
    marginHorizontal:28,
    marginVertical:10,
    backgroundColor:'white',
    padding:8,
    flexDirection:'row',
    borderRadius:12

},
})