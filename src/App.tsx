import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Intensity from './components/Intensity'
import logo from '../assets/logo.png'
import Color from './components/Color'
import Endo from './components/Endo'
import Lamp from './components/Lamp'

const App = () => {
  return (
    <View>
      <Image source={logo} style={styles.logoImage}/>
      <View style={styles.blockOne}>
        <View style={styles.intensity}>
      <Intensity/>
        </View>
        <View style={styles.intensity}>
      <Color/>
        </View>
        <View style={styles.intensity}>
      <Endo/>
        </View>
        <View style={styles.intensity}>
      <Lamp/>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  logoImage:{
    height:70,
    width:180,
    marginHorizontal:15,
    marginVertical:5
  },
  blockOne:{
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  intensity:{
    // borderWidth:2,
  }
})