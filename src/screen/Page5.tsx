import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useWebSocket } from '../Context/webSocketContext';
import AntiFlicker from '../components/Page4Components/AntiFlicker';
import { CameraContext } from '../Context/CameraContext';
import Zoom from '../components/Page5Components/Zoom';
import Focus from '../components/Page5Components/Focus';
import ImageStablizer from '../components/Page5Components/ImageStablizer';
import Iris from '../components/Page5Components/Iris';

const Page5 = () => {
  const { sendMessage } = useWebSocket();

  const {
    flickerEnable,
    analogIrisEnable,
    setFlickerEnable,
    setAnalogIrisEnable,
  } = useContext(CameraContext);

  const flickerValue = {
    flickerEnable,
    setFlickerEnable
  };

  const irisValue = {
    analogIrisEnable,
    setAnalogIrisEnable
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.blockOne}>
        <View style={styles.box3}>
          <Zoom sendMessage={sendMessage} />
        </View>
        <View style={styles.box3}>
          <Focus sendMessage={sendMessage} />
        </View>
      </View>
      <View style={styles.blockTwo}>
        <View style={styles.box2}>
          <AntiFlicker context={flickerValue} />
        </View>
        {/* <View style={styles.box2}>
          <ImageRotation sendMessage={sendMessage}/>
          </View> */}
        <View style={styles.box2}>
          {/* <ImageStablizer/> */}
          <Iris context={irisValue} sendMessage={sendMessage} />
          {/* <PowerButton context={powerValue} sendMessage={sendMessage} reset={reset}/> */}
        </View>
        {/* <View style={styles.box2}> */}
        {/* <CameraSetting navigation={navigation}/> */}
        {/* </View> */}
      </View>
      {/* <Text style={styles.dome}>IP Camera</Text> */}
    </View>
  )
}

export default Page5

const styles = StyleSheet.create({
  dome: {
    textAlign: 'right',
    paddingRight: 30,
    fontSize: hp('3.2%'),
    fontStyle: 'italic',
    color: 'green',
    fontWeight: 'bold',
    opacity:0.5
  },
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
    justifyContent: 'space-around'
    // borderWidth: 2
  },
  box: {
    width: wp('22%'),
    height: hp('37%'),
  },
  box2: {
    width: wp('25%'),
    height: hp('37%'),
  },
  box3: {
    // borderWidth:2,
    width: wp('50%'),
    height: hp('38%'),
  },
})