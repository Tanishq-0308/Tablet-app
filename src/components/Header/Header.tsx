import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../../../assets/logo.png'

const { width, height } = Dimensions.get('screen')
const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={[styles.logoImage, height<500 ? {display:'none'}: null]} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        // borderWidth:2,
        // alignItems:'center'
        backgroundColor:'white'
    },
    logoImage: {
        height: 70,
        width: 180,
        marginHorizontal: 15,
        marginVertical: 5,
        backgroundColor: 'white',
        // borderWidth:2
      },
})