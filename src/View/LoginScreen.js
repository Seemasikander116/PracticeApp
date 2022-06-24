import {TextInput, StyleSheet, Text, View ,TouchableOpacity,Image,ImageBackground} from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={{marginTop:50,marginHorizontal:40}}>
        <View>

    <TextInput placeholder='Enter Username'/>
        </View>
    <View>

    <TextInput placeholder='Enter Password'/>
    </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})