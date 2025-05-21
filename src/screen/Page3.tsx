import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '../App';
import Syn from '../components/Page1Components/Syn';
import { BtnEnableContext } from '../Context/EnableContext';
import { RightBtnEnableContext } from '../Context/RightContext';
import RNFS from 'react-native-fs';

type page3Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
}
const Page3 = ({ navigation }: page3Props) => {
  const { lampEnable, setlampEnable, focusEnable, setFocusEnable } = useContext(RightBtnEnableContext);
  const lampValue = {
    lampEnable,
    setlampEnable
  }
  const focusValue = {
    focusEnable, setFocusEnable
  }
  const value = useStore((state) => state.states.stateIR);
  const value2 = useStore((state) => state.states.stateER);
  const value3 = useStore((state) => state.states.stateCR);
  const value4 = useStore((state) => state.states.stateLR);
  const value5 = useStore((state) => state.states.stateDR);
  const value6 = useStore((state) => state.states.stateFR);
  const value7 = useStore((state) => state.states.stateNL);
  const { syncEnable, setSyncEnable } = useContext(BtnEnableContext);
  const syncValue = {
    syncEnable,
    setSyncEnable
  }
  const { sendMessage } = useWebSocket()
  const [syncModeEnable, setSyncModeEnable] = useState('');

  useEffect(() => {
    readSyncEnbale();
  }, []);

  const readSyncEnbale = async () => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/sync.txt`;
      const pass = await RNFS.readFile(filePath, 'utf8');
      const checkpass = pass;
      setSyncModeEnable(checkpass);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.blockOne}>
        <View style={styles.box}>
          <Intensity value={value} sendMessage={sendMessage} code="R0" />
        </View>
        <View style={styles.box}>
          <Color value={value3} sendMessage={sendMessage} code="R0" />
        </View>
        <View style={styles.box}>
          <Endo value={value2} sendMessage={sendMessage} code="R0" />
        </View>
        <View style={styles.box}>
          <Lamp value={value4} sendMessage={sendMessage} code="R0" toggle={lampValue} />
        </View>
      </View>
      <View style={styles.blockTwo}>
        <View style={styles.box}>
          <BoostMode value={value5} sendMessage={sendMessage} code="R0" />
        </View>
        <View style={styles.box}>
          <Settings navigation={navigation} navigateTo="FactorySettingTwo" />
        </View>
        <View style={styles.box}>
          {
            syncModeEnable == 'on' && <Syn value={value7} sendMessage={sendMessage} context={syncValue} code="R0" />
          }
        </View>

        <View style={styles.box}>
          <Focus value={value6} sendMessage={sendMessage} code="R0" toggle={focusValue} />
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
    width: wp('22%'),
    height: hp('37%'),
    // borderWidth:1
  },
  box2: {
    width: wp('50%'),
    height: hp('37%'),
    // borderWidth:1
  }
})