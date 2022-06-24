import { StyleSheet, Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import list from './list'
import { useNavigation } from '@react-navigation/native'
const Card = () => {

  const[data,setdata]=useState(list)
  const navigation = useNavigation()
  return (
    <View>
   
   <ScrollView showsHorizontalScrollIndicator horizontal={true}>
    {data.map((item,key)=>{
      return(
        <View style={{paddingTop:20,marginVertical:20,width:120, height:180,marginHorizontal:7}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Detail',item)}>
        <Image style={{marginHorizontal:5, borderRadius:20,width:'100%',height:'100%'}}  resizeMode='cover' source={item.img}/>
        </TouchableOpacity> 
        </View>
      )
    })}
    </ScrollView>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})