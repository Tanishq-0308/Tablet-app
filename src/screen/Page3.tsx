import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStore from '../Store/stateStore';
import { useWebSocket } from '../Context/webSocketContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Settings from '../components/Page1Components/Settings';
import BoostMode from '../components/Page1Components/BoostMode';
import Lamp from '../components/Page1Components/Lamp';
import Color from '../components/Page1Components/Color'
import Endo from '../components/Page1Components/Endo'
import Focus from '../components/Page1Components/Focus'
import Intensity from '../components/Page1Components/Intensity'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App';

type page3Props = {
  navigation: NativeStackNavigationProp<RootParamList, 'HomeTwo'>;
}
const Page3 = ({ navigation }: page3Props) => {

  const value = useStore((state) => state.states.stateIR);
  const value2 = useStore((state) => state.states.stateER);
  const value3 = useStore((state) => state.states.stateCR);
  const value4 = useStore((state) => state.states.stateLR);
  const value5 = useStore((state) => state.states.stateDR);
  const value6 = useStore((state) => state.states.stateFR)
  const { sendMessage } = useWebSocket()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.blockOne}>
        <View style={styles.box}>
          <Intensity value={value} sendMessage={sendMessage} code='R' />
        </View>
        <View style={styles.box}>
          <Color value={value3} sendMessage={sendMessage} code='R' />
        </View>
        <View style={styles.box}>
          <Endo value={value2} sendMessage={sendMessage} code='R' />
        </View>
        <View style={styles.box}>
          <Lamp value={value4} sendMessage={sendMessage} code='R' />
        </View>
      </View>
      <View style={styles.blockTwo}>
        <View style={styles.box}>
          <BoostMode value={value5} sendMessage={sendMessage} code='R' />
        </View>
        <View style={styles.box}>
          <Settings navigation={navigation} navigateTo="FactorySettingTwo" />
        </View>
        <View style={styles.box2}>
          <Focus value={value6} sendMessage={sendMessage} code='R' />
        </View>
      </View>
      <Text style={styles.dome}>Dome 2</Text>
    </View>
  )
}

export default Page3

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