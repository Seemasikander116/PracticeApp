import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Login = ({item}) => {
  const navigation= useNavigation()
  return (
    <View style={styles.container}> 
      <Text style={{ fontSize:30,fontWeight:'900',color:'white'}}>Fast Food</Text>
      <Text style={{padding:8, fontFamily:'Arial',fontSize:15,letterSpacing:0.4,color:'#7C7A76'}}> Only today this fast food offer</Text>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{
      color:'#F74D00', fontFamily:'Arial',fontWeight:'600'}}>
 $ {item.price}
          </Text>
        </TouchableOpacity>
        <Text style={{color:'#7C7A76',justifyContent:'center',textAlign:'justify',marginHorizontal:20,lineHeight:22,letterSpacing:0.7,marginVertical:10}}>{item.des} {item.des}</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Registration')} style={{backgroundColor:'#F74D00',borderRadius:12,marginVertical:30,width:'85%',}}>
        <Text style={{textAlign:'center',color:'white',padding:13,fontWeight:'900',fontFamily:'Arial',fontSize:17}}>
          View More
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    marginVertical:20,
    alignItems:'center'
  },
  btn:{
    margin:18,
    alignItems:'center',
    padding:7,
    borderColor:'#F74D00',
    borderWidth:1,
    marginHorizontal:155,
    borderRadius:10
  }
})