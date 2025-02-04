import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoostMode from '../components/Page1Components/BoostMode'
import Color from '../components/Page1Components/Color'
import Endo from '../components/Page1Components/Endo'
import Focus from '../components/Page1Components/Focus'
import Intensity from '../components/Page1Components/Intensity'
import Lamp from '../components/Page1Components/Lamp'
import Settings from '../components/Page1Components/Settings'
import { Dimensions } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import Page2 from './Page2'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import useStore from '../Store/stateStore'
import { useWebSocket } from '../Context/webSocketContext'

const { width, height } = Dimensions.get('screen')

type HomeProps = NativeStackScreenProps<RootParamList, 'Home'>

const Page1 = ({ navigation, route }: HomeProps) => {
  console.log('width'+ width + 'height' + height);
  
  const value= useStore((state)=>state.states.stateIL);
  const {sendMessage} =useWebSocket()
  return (
    <ScrollView horizontal>
      <Page2 />
      <View style={styles.mainContainer}>
        <View style={styles.blockOne}>
          <View style={styles.box}>
            <Intensity value={value} sendMessage={sendMessage} code='L'/>
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
            <Settings navigation={navigation} route={route} />
          </View>
          <View style={styles.box2}>
            <Focus />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Page1

const styles = StyleSheet.create({
  mainContainer: {
    gap: 15,
    backgroundColor: 'white',
    height: hp('85.5%'),
    width: wp('100%'),
    // borderWidth:1
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
    width: wp('25%'),
    height: hp('37%'),
    // borderWidth:1
  },
  box2: {
    width: wp('50%'),
    height: hp('37%'),
    // borderWidth:1
  }
})