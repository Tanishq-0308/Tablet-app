import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import WhiteBalance from '../components/Page2Components/WhiteBalance'
import Iris from '../components/Page2Components/Iris'
import CameraFocus from '../components/Page2Components/CameraFocus'
import CameraSetting from '../components/Page2Components/CameraSetting'
import ImageRotation from '../components/Page2Components/ImageRotation'
import ImageFreeze from '../components/Page2Components/ImageFreeze'
import ImageStablizer from '../components/Page2Components/ImageStablizer'
import Zoom from '../components/Page2Components/Zoom'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { cameraStore } from '../Store/cameraStore'
import { useWebSocket } from '../Context/webSocketContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import { CameraContext } from '../Context/CameraContext'

type page2Prop={
  navigation:NativeStackNavigationProp<RootParamList>
}

const Page2 = ({navigation}:page2Prop) => {

  const {
    wAutoEnable, 
    wIndoorEnable, 
    wOutdoorEnable, 
    wManualEnable,
    irisEnable,
    fAutoEnable,
    fOnePushEnable,
    freezeEnable,
    stablizerEnable,
    setWAutoEnable,
    setWIndoorEnbale, 
    setWOutdoorEnbale,
    setWManualEnbale,
    setIrisEnable,
    setFAutoEnbale,
    setFOnePushEnbale,
    setFreezeEnable,
    setStablizerEnable
  }= useContext(CameraContext);

  const {sendMessage}= useWebSocket();
  const value= cameraStore((state)=> state.cameraStates.stateW);
  const value1= cameraStore((state)=> state.cameraStates.stateI);
  const value2= cameraStore((state)=> state.cameraStates.stateZ);
  const value3= cameraStore((state)=> state.cameraStates.stateF);
  const value4= cameraStore((state)=> state.cameraStates.stateS);
  const value5= cameraStore((state)=> state.cameraStates.stateH);
  const value6= cameraStore((state)=> state.cameraStates.stateR);

  const wbvalues={
    autoBtn:wAutoEnable,
    indoorBtn:wIndoorEnable,
    outdoorBtn:wOutdoorEnable,
    manualBtn:wManualEnable,
    setAutoBtn:setWAutoEnable, 
    setIndoorBtn:setWIndoorEnbale,
    setOutdoorBtn:setWOutdoorEnbale,
    setManualBtn:setWManualEnbale
  }

  const irisValues={
    irisEnable,
    setIrisEnable
  }

  const focusValues={
    autoBtn:fAutoEnable,
    setAutoBtn:setFAutoEnbale,
    pushBtn:fOnePushEnable,
    setPushBtn:setFOnePushEnbale,
    stablizerEnable,
    setStablizerEnable
  }
  
  const freezeValues={
    freeze:freezeEnable,
    setFreeze:setFreezeEnable
  }
  const stablizerValues={
    fAutoEnable,
    setFAutoEnbale,
    fOnePushEnable,
    setFOnePushEnbale,
    stablizerEnable,
    setStablizerEnable
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.block}>
        <View style={styles.box}>
          <WhiteBalance value={value} context={wbvalues} sendMessage={sendMessage}/>
        </View>
        <View style={styles.box1}>
          <Iris value={value1} context={irisValues} sendMessage={sendMessage}/>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.box}>
          <Zoom value={value2} sendMessage={sendMessage}/>
        </View>
        <View style={styles.box1}>
          <CameraFocus value={value3} context={focusValues} sendMessage={sendMessage}/>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.innerBlock}>
          <View style={styles.box2}>
            <ImageStablizer value={value3} context={stablizerValues} sendMessage={sendMessage}/>
          </View>
          <View style={styles.box2}>
            <ImageFreeze value={value5} context={freezeValues} sendMessage={sendMessage}/>
          </View>
        </View>
        <View style={styles.innerBlock}>
          <View style={styles.box2}>
            <ImageRotation value={value6} sendMessage={sendMessage}/>
          </View>
          <View style={styles.box2}>
            <CameraSetting navigation={navigation}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Page2

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: hp('85.5%'),
    width: wp('100%'),
  },
  block: {
    height: hp('28%'),
    width: wp('100%'),
    flexDirection: 'row',
  },
  box: {
    width: wp('55%'),
    height: hp('28%'),
  },
  box1: {
    width: wp('60%'),
    height: hp('28%'),
  },
  box2: {
    width: wp('25%'),
    height: hp('28%'),
  },
  innerBlock: {
    flexDirection: 'row',
    width: '50%',
    height: hp('28%'),
  }
})