import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import Page1 from './Page1'

const { width: screenWidth } = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.appContainer}>
      <Image source={logo} style={styles.logoImage} />
      <ScrollView contentContainerStyle={{flexGrow:1}}  style={styles.scrollContainer} horizontal={true}>
        <View style={[styles.page, {width:screenWidth}]}>
        <Page1  />
        </View>
        <View style={[styles.page, {width:screenWidth}]}>
        <Page1  />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width:'100%',
    borderWidth:5,
  },
  logoImage: {
    height: 70,
    width: 180,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  page:{
    flex:1,
    flexDirection:'row',
    borderWidth:2,
  }
})