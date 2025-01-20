import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import Page1 from './Page1'

const {width, height}= Dimensions.get('screen')

const App = () => {
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

export default App

const styles = StyleSheet.create({
  container:{
    height:height-140,
    width:width,
    // borderWidth:3,
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