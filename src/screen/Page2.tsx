import { ActivityIndicator, Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
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
import Reset from '../components/Page2Components/Reset'
import PowerButton from '../components/Page2Components/PowerButton'

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
    powerEnable,
    setWAutoEnable,
    setWIndoorEnbale, 
    setWOutdoorEnbale,
    setWManualEnbale,
    setIrisEnable,
    setFAutoEnbale,
    setFOnePushEnbale,
    setFreezeEnable,
    setStablizerEnable,
    setPowerEnable
  }= useContext(CameraContext);

  const {sendMessage}= useWebSocket();
  const value= cameraStore((state)=> state.cameraStates.stateW);
  const value1= cameraStore((state)=> state.cameraStates.stateI);
  const value2= cameraStore((state)=> state.cameraStates.stateZ);
  const value3= cameraStore((state)=> state.cameraStates.stateF);
  const value4= cameraStore((state)=> state.cameraStates.stateS);
  const value5= cameraStore((state)=> state.cameraStates.stateH);
  const value6= cameraStore((state)=> state.cameraStates.stateR);

  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [loadingTime, setLoadingTime]= useState('7');
  // let timer= null;

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

  const powerValues={
    powerEnable,
    setPowerEnable
  }

  const handleButtonPress = (time:any) => {
    // const time= parseInt(loadingTime) || 5; 
    setIsLoading(true);
    setCountdown(time);

    // if (timer) clearInterval (timer)

    // timer = setInterval(() => {
    //   setCountdown((prevCount) => {
    //     if(prevCount <= 1){
    //       clearInterval(timer);
    //       setIsLoading(false);
    //       return 0;
    //     }
    //     return prevCount -1;
    //   })
    // }, 1000);
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          setIsLoading(false);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  }


  const reset=()=>{
      setIrisEnable(false);
      setFOnePushEnbale(false);
      setStablizerEnable(false);
      setFreezeEnable(false);
      setWIndoorEnbale(false);
      setWOutdoorEnbale(false);
      setWAutoEnable(true);
      setFAutoEnbale(true);
  }


  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
        onRequestClose={() => setIsLoading(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>
              Processing... {countdown}s
            </Text>
          </View>
        </View>
      </Modal>
      <View style={styles.block}>
        <View style={styles.box}>
          <WhiteBalance value={value} context={wbvalues} sendMessage={sendMessage} loading={handleButtonPress}/>
        </View>
        <View style={styles.box1}>
          <Iris value={value1} context={irisValues} sendMessage={sendMessage} loading={handleButtonPress}/>
        </View>
        <View style={styles.box1}>
          <Reset sendMessage={sendMessage} loading={handleButtonPress} reset={reset}/>
        </View>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={loadingTime}
          onChangeText={setLoadingTime}
          keyboardType="numeric"
          placeholder="Enter seconds"
          maxLength={3} // Limit input length
        />
      </View> */}
      </View>
      <View style={styles.block}>
        <View style={styles.box3}>
          <Zoom value={value2} sendMessage={sendMessage}/>
        </View>
        <View style={styles.box4}>
          <CameraFocus value={value3} context={focusValues} sendMessage={sendMessage} loading={handleButtonPress}/>
        </View>
        <View style={styles.box1}>
          <PowerButton context={powerValues} sendMessage={sendMessage} loading={handleButtonPress} reset={reset}/>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.innerBlock}>
          <View style={styles.box2}>
            <ImageStablizer value={value3} context={stablizerValues} sendMessage={sendMessage} loading={handleButtonPress}/>
          </View>
          <View style={styles.box2}>
            <ImageFreeze value={value5} context={freezeValues} sendMessage={sendMessage} loading={handleButtonPress}/>
          </View>
        </View>
        <View style={styles.innerBlock}>
          <View style={styles.box2}>
            <ImageRotation value={value6} sendMessage={sendMessage} loading={handleButtonPress}/>
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
    width: wp('50%'),
    height: hp('28%'),
    // borderWidth:2
  },
  box3: {
    // borderWidth:2,
    width: wp('50%'),
    height: hp('28%'),
  },
  box4:{
    width: wp('33%'),
    height: hp('28%'),
  },
  box1: {
    // borderWidth:2,
    width: wp('25%'),
    height: hp('28%'),
  },
  box2: {
    width: wp('25%'),
    height: hp('28%'),
    // borderWidth:2
  },
  innerBlock: {
    flexDirection: 'row',
    width: '50%',
    height: hp('28%'),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    minWidth: 200,
  },
  loadingText: {
    fontSize: 16,
    marginTop: 10,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:20,
    // marginBottom: 20,
    fontWeight:'bold'
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
  },
})