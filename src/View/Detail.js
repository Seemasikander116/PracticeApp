import { StyleSheet, Text, View,Image,TouchableOpacity ,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Login from './Login'
import { useNavigation } from '@react-navigation/native'
import BottomNavigation from '../constant/BottomNavigation'
const Detail = ({route}) => {
  const item = route.params
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor:'#292929',height:'100%'}}>
    <View style={{marginTop:40,flex:1}}>
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

    <Image source={item.img}  style={{borderRadius:100,width:180,height:180,marginHorizontal:100}}/>

      </View>
    </View>
    <View style={{flex:0.7}}>
    <Login item={item}/>
    </View>
    </View>
    </View>
  )
}

export default Detail

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