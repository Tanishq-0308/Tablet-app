import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoostMode from './components/BoostMode'
import Color from './components/Color'
import Endo from './components/Endo'
import Focus from './components/Focus'
import Intensity from './components/Intensity'
import Lamp from './components/Lamp'
import Settings from './components/Settings'

const Page1 = () => {
  return (
    <View>
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
      </View>
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, // Use flex to take full height
        margin:10,
        alignItems:'center'
      },
      blockOne: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexGrow: 1,
        // borderWidth:2,
        width:'100%'
      },
      blockTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 60,
        flexGrow: 1,
        width: '80%',
        // borderWidth:2
      },
      box: {
        // borderWidth:2
      },
})