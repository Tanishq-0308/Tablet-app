import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import BoostMode from '../components/Page1Components/BoostMode'
import Color from '../components/Page1Components/Color'
import Endo from '../components/Page1Components/Endo'
import Focus from '../components/Page1Components/Focus'
import Intensity from '../components/Page1Components/Intensity'
import Lamp from '../components/Page1Components/Lamp'
import Settings from '../components/Page1Components/Settings'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '../App'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useStore from '../Store/stateStore'
import { useWebSocket } from '../Context/webSocketContext'
import Syn from '../components/Page1Components/Syn'
import { BtnEnableContext } from '../Context/EnableContext'


type page1Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
}
const Page1 = ({ navigation }: page1Props) => {
  const {lampEnable, setlampEnable, focusEnable, setFocusEnable} = useContext(BtnEnableContext);
  const lampValue={
    lampEnable,
    setlampEnable
  }
  const focusValue={
    focusEnable, setFocusEnable
  }
  const value = useStore((state) => state.states.stateIL);
  const value2 = useStore((state) => state.states.stateEL);
  const value3 = useStore((state) => state.states.stateCL);
  const value4 = useStore((state) => state.states.stateLL);
  const value5 = useStore((state) => state.states.stateDL);
  const value6 = useStore((state) => state.states.stateFL);
  const value7 = useStore((state) => state.states.stateNL);
  const {syncEnable, setSyncEnable}= useContext(BtnEnableContext)
  const syncValue= {
    syncEnable,
    setSyncEnable
  }
  const { sendMessage } = useWebSocket()
  return (
    <ScrollView horizontal>
      <View style={styles.mainContainer}>
        <View style={styles.blockOne}>
          <View style={styles.box}>
            <Intensity value={value} sendMessage={sendMessage} code="L0" />
          </View>
          <View style={styles.box}>
            <Color value={value3} sendMessage={sendMessage} code="L0" />
          </View>
          <View style={styles.box}>
            <Endo value={value2} sendMessage={sendMessage} code="L0" />
          </View>
          <View style={styles.box}>
            <Lamp value={value4} sendMessage={sendMessage} code="L0" toggle={lampValue}/>
          </View>
        </View>
        <View style={styles.blockTwo}>
          <View style={styles.box}>
            <BoostMode value={value5} sendMessage={sendMessage} code="L0" />
          </View>
          <View style={styles.box}>
            <Settings navigation={navigation} navigateTo='FactorySetting' />
          </View>
          <View style={styles.box}>
            <Syn value={value7} sendMessage={sendMessage} context={syncValue}/>
          </View>
          <View style={styles.box}>
            <Focus value={value6} sendMessage={sendMessage} code="L0" toggle={focusValue}/>
          </View>
        </View>
        <Text style={styles.dome}>Dome 1</Text>
      </View>
    </ScrollView>
  )
}

export default Page1

const styles = StyleSheet.create({
  dome: {
    textAlign: 'right',
    paddingRight: 30,
    fontSize: hp('3.2%'),
    fontStyle: 'italic',
    color: 'red',
    fontWeight: 'bold'
  },
  mainContainer: {
    gap: 15,
    backgroundColor: 'white',
    height: hp('85.5%'),
    width: wp('100%'),
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
    width: wp('22%'),
    height: hp('37%'),
  },
  box2: {
    width: wp('50%'),
    height: hp('37%'),
  }
})