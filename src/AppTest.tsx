import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page1 from './Page1'
import { Image } from 'react-native'
import logo from '../assets/logo.png'

const {width, height}= Dimensions.get('screen')

const AppTest = () => {
    console.log(width, height);
    
  return (
      <>
    <Image source={logo} style={styles.logoImage} />
    <ScrollView horizontal>
    <View style={styles.container}>
      <Page1/>
    </View>
    <View style={styles.container}>
      <Page1/>
    </View>
    </ScrollView>
    </>
  )
}

export default AppTest

const styles = StyleSheet.create({
    container:{
        height:height-140,
        width:width,
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center',
        // margin:10
    },
    logoImage: {
        height: 70,
        width: 180,
        marginHorizontal: 15,
        marginVertical: 5,
      },
})