import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Zoom from '../components/Page4Components/Zoom';
import Focus from '../components/Page4Components/Focus';
import Iris from '../components/Page4Components/Iris';
import ImageRotation from '../components/Page4Components/ImageRotation';
import PowerButton from '../components/Page4Components/PowerButton';
import AntiFlicker from '../components/Page4Components/AntiFlicker';
import { CameraContext } from '../Context/CameraContext';
import { useWebSocket } from '../Context/webSocketContext';
import CameraSetting from '../components/Page4Components/CameraSetting';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../App';

type page4Prop={
  navigation:NativeStackNavigationProp<RootParamList>
}

const Page4 = ({navigation}:page4Prop) => {
  const {sendMessage}= useWebSocket();
  const {
    analogIrisEnable,
    analogPowerEnable,
    flickerEnable,
    setAnalogIrisEnable,
    setAnalogPowerEnable,
    setFlickerEnable
  }= useContext(CameraContext);

  const irisValue={
    analogIrisEnable,
    setAnalogIrisEnable
  };

  const powerValue={
    analogPowerEnable,
    setAnalogPowerEnable
  };

  const flickerValue={
    flickerEnable,
    setFlickerEnable
  };

  const reset=()=>{
    setAnalogIrisEnable(false);
    setFlickerEnable(false);
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.blockOne}>
        <View style={styles.box3}>
          <Zoom sendMessage={sendMessage}/>
        </View>
        <View style={styles.box3}>
          <Focus sendMessage={sendMessage}/>
        </View>
        {/* <View style={styles.box2}>
          <Iris context={irisValue} sendMessage={sendMessage}/>
        </View> */}
      </View>
      <View style={styles.blockTwo}>
        {/* <View style={styles.box2}>
          <ImageRotation sendMessage={sendMessage}/>
          </View> */}
        <View style={styles.box2}>
          <AntiFlicker context={flickerValue}/>
        </View>
          <View style={styles.box2}>
            <PowerButton context={powerValue} sendMessage={sendMessage} reset={reset}/>
          </View>
        <View style={styles.box2}>
          <CameraSetting navigation={navigation}/>
        </View>
      </View>
    </View>
  )
}

export default Page4

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: hp('85.5%'),
    width: wp('100%'),
  },
  blockOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 2
  },
  blockTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 2
  },
  box: {
    width: wp('22%'),
    height: hp('37%'),
  },
  box2: {
    width: wp('33%'),
    height: hp('37%'),
  },
  box3: {
    // borderWidth:2,
    width: wp('50%'),
    height: hp('38%'),
  },
})