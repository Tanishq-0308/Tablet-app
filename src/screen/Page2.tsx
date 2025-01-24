import { Dimensions, Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoostMode from '../components/Page1Components/BoostMode'
import Color from '../components/Page1Components/Color'
import Endo from '../components/Page1Components/Endo'
import Focus from '../components/Page1Components/Focus'
import Intensity from '../components/Page1Components/Intensity'
import Lamp from '../components/Page1Components/Lamp'

const { width, height } = Dimensions.get('screen')
const Page2 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.blockOne}>
        <View style={styles.box}>
          <Intensity />
        </View>
        <View style={styles.box}>
          <Color />
        </View>
        <View style={styles.box}>
          <Endo />
        </View>
        <View style={styles.box}>
          <Lamp />
        </View>
      </View>
      <View style={styles.blockTwo}>
        <View style={styles.box}>
          <BoostMode />
        </View>
        <View style={styles.box}>
          <BoostMode />
        </View>
        <View style={styles.box}>
          <BoostMode />
        </View>
        <View style={styles.box}>
          <BoostMode />
        </View>
      </View>
    </View>
  )
}

export default Page2

const styles = StyleSheet.create({
    mainContainer: {
        gap: 50,
        backgroundColor: 'white',
        height: height,
      },
      blockOne: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      blockTwo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      box: {
        width: width / 4,
        height: height / 3
      },
      box2: {
        width: width / 2,
        height: height / 3
      }
})