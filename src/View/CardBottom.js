import { StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native'
import React,{useState} from 'react'
import list from './list'
const CardBottom = () => {

  const[data,setdata]=useState(list)
  return (
    <View>
    <ScrollView showsHorizontalScrollIndicator horizontal={true}>
    {data.map((item,key)=>{
      return(
        <View style={{marginVertical:20}}>
        <ImageBackground style={{width:140, height:180,marginHorizontal:5, }}  resizeMode='stretch' source={item.img}>
            <Text style={{fontSize:12,padding:1,fontWeight:'500', color:'white',textAlign:'center',backgroundColor:'#F74D00',marginHorizontal:40}}>New</Text>
        </ImageBackground>

        </View>
      )
    })}
    </ScrollView>
    </View>
  )
}

export default CardBottom

const styles = StyleSheet.create({})