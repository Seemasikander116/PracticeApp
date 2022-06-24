import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
const Cart = ({route}) => {
  const item = route.params;
  const navigation = useNavigation();
  const [add, setadd] = useState(0);
  const [amount, setamount] = useState(item.price);

  const Add = () => {
    setadd(add + 1);
  };
  const Minus = () => {
    setadd(add - 1);
    if(add==0)
    {
   setadd(0)
    }
  };
  const Checkout=()=>{
      setamount(add * amount)
  
  }
  return (
    <View style={styles.container}>
      <View style={styles.sectionUpper}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={item.img}
        />
      </View>
      <View style={styles.sectionLower}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Fast Food</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" color={'orange'} size={18} />

          <Icon name="star" color={'orange'} size={18} />
          <Icon name="star" color={'orange'} size={18} />
          <Icon name="star" color={'orange'} size={18} />

          <Icon name="star" color={'grey'} size={18} />
        </View>
        <Text style={{marginVertical: 13,textAlign:'justify'}}> {item.des} {item.des}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.btn, styles.color1]}
            onPress={() => Add()}>
            <Icon name="plus" color={'white'} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.color2]}
            onPress={() => Minus()}>
            <Icon name="minus" color={'white'} size={20} />
          </TouchableOpacity>
          <View style={{flexDirection:'row',marginVertical:1}}>
        <Text style={{ borderWidth:1,borderColor:'grey',padding:10,paddingLeft:20,paddingRight:20, textAlign:'center',fontWeight:'bold',fontSize:20}}>
            {add}
        </Text>
          </View>
    
        </View>
        <View style={{flexDirection:'row',marginVertical:10,alignItems:'center'}}>
          <Text style={{ padding:10,width:'40%',height:40, textAlign:'center',fontWeight:'bold',fontSize:20}}>
       Amount: {amount}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F74D00',
            width: '70%',
            borderRadius: 12,
            marginVertical: 20,
          }} onPress={()=> Checkout()}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              padding: 13,
              fontWeight: '900',
              fontFamily: 'Arial',
              fontSize: 17,
            }}>
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
  },
  sectionUpper: {
    flex: 0.6,
    width: '100%',
    height: '100%',
  },
  sectionLower: {
    flex: 0.9,
    padding: 20,
    alignItems: 'center',
  },
  btn: {
    padding: 15,
    borderRadius: 100,
    height: 50,
    width: 50,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  color1: {
    backgroundColor: 'blue',
  },
  color2: {
    backgroundColor: 'red',
  },
});
