import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoostMode from './components/BoostMode'
import Color from './components/Color'
import Endo from './components/Endo'
import Focus from './components/Focus'
import Intensity from './components/Intensity'
import Lamp from './components/Lamp'
import Settings from './components/Settings'
import { Dimensions } from 'react-native'

const {width, height}= Dimensions.get('screen')

const Page1 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.blockOne}>
        <View style={styles.box}>
      <Intensity/>
        </View>
        <View style={styles.box}>
      <Color/>
        </View>
        <View style={styles.box}>
      <Endo/>
        </View>
        <View style={styles.box}>
      <Lamp/>
        </View>
      </View>
      <View style={styles.blockTwo}>
        <View style={styles.box}>
      <BoostMode/>
        </View>
        <View style={styles.box}>
      <Settings/>
        </View>
        <View style={styles.box}>
      <Focus/>
        </View>
        <View style={styles.box}>

        </View>
      </View>
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({
    mainContainer: {
        gap:30,
        // height:height,
        // borderWidth:2,
        // margin:100
      },
      blockOne: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      blockTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'
      },
      box: {
        // borderWidth:2,
        width:width/4,
        height:height/3
      },
})