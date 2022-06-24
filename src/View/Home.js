import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from './Card'
import CardBottom from './CardBottom'
import Icon from 'react-native-vector-icons/Entypo'
const Home = () => {
    const navigation= useNavigation()
  return (
    <View style={{backgroundColor:'#292929',height:'100%'}}>

  
    <View style={{marginHorizontal:25,marginVertical:80}}>
      <View style={{flexDirection:'row',alignContent:'space-between'}}>
      <Icon name='chevron-thin-left' size={20} color={'#7C7A76'} style={{flex:3}}/>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}>
      <Icon name='menu' size={20} color={'#7C7A76'} style={{flex:0.8}}/>

      </TouchableOpacity>
      </View>
      <View style={styles.heading}>

      <Text style={styles.menu_heading}>Food Menu</Text>
      
      <Text style={{padding:8, fontFamily:'Arial',fontSize:15,letterSpacing:0.4,color:'#7C7A76'}}> Choose your best food have a great day</Text>
      </View>
      <Card/>
      <View>
        <Text style={{fontWeight:'bold',fontSize:21,fontFamily:'Arial',letterSpacing:0.5,color:'white'}}>
          More
        </Text>
        <CardBottom/>
      </View>
      <TouchableOpacity style={{backgroundColor:'#F74D00',marginHorizontal:40,borderRadius:12,marginVertical:30}}>
        <Text style={{textAlign:'center',color:'white',padding:13,fontWeight:'900',fontFamily:'Arial',fontSize:17}}>
          Order Now
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    heading:{
alignItems:'center'
    },
    menu_heading:{
      color:'#F74D00',
        fontSize:30,
        fontFamily:'Arial',
        fontWeight:'900'
    }
})