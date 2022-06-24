import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import list from './list';
import { useNavigation } from '@react-navigation/native';
const CardItems = () => {
  const navigation = useNavigation()
    const[data,setdata]=useState(list)
    
  return (
    <View style={{marginVertical:25}}>
      <ScrollView showsVerticalScrollIndicator>
     {data.map((item)=>{
         console.log(item)
         return(    <View style={{backgroundColor:'#292929',}}>
            <View style={styles.card}>
                
            <Image source={item.img}  resizeMode='stretch'  style={{width:'35%',height:'100%',borderRadius:20}}/>
          <View style={{marginHorizontal:20,marginVertical:10,}}>
                <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'Arial'}}>
                    Fast Food
                </Text>
              
                <Text style={{textAlign:'justify',width:'35%',fontSize:13,marginVertical:8 ,color:'#7C7A76'}}>
                    {item.des}
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#F74D00',fontWeight:'800'}}>
                    $ {item.price}
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Cart",item)} style={{backgroundColor:'#F74D00',marginHorizontal:5}}>
                  <Text style={{padding:5,fontSize:10,color:'white'}}>
                    Add to Cart
                    </Text>
                </TouchableOpacity>

                </View>
                
          </View>
        </View>
        </View>
         )
     })}  
 
      </ScrollView>
    </View>
  );
};

export default CardItems;

const styles = StyleSheet.create({
    card:{
        width:'90%',
        flex:1,
        backgroundColor:'#E8E8E8',
        marginHorizontal:15,
        height:130,
        flexDirection:'row',
        padding:10,
        marginVertical:20
    }
});
