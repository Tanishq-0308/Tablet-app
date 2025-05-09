import React, { useContext, useState } from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useWebSocket } from '../Context/webSocketContext';
import AntiFlicker from '../components/Page4Components/AntiFlicker';
import { CameraContext } from '../Context/CameraContext';
import Zoom from '../components/Page5Components/Zoom';
import Focus from '../components/Page5Components/Focus';
import ImageStablizer from '../components/Page5Components/ImageStablizer';
import Iris from '../components/Page5Components/Iris';
import PowerButton from '../components/Page4Components/PowerButton';

const Page5 = () => {
  const { sendMessage } = useWebSocket();
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const {
    analogIrisEnable,
    analogPowerEnable,
    flickerEnable,
    setAnalogIrisEnable,
    setAnalogPowerEnable,
    setFlickerEnable
  } = useContext(CameraContext);

  const irisValue = {
    analogIrisEnable,
    setAnalogIrisEnable
  };

  const powerValue = {
    analogPowerEnable,
    setAnalogPowerEnable
  };

  const flickerValue = {
    flickerEnable,
    setFlickerEnable
  };

  const reset = () => {
    setAnalogIrisEnable(false);
    setFlickerEnable(false);
  }

  const handleButtonPress = (time: any) => {
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
      <View style={styles.blockOne}>
        <View style={styles.box3}>
          <Zoom sendMessage={sendMessage} />
        </View>
        <View style={styles.box3}>
          <Focus sendMessage={sendMessage} />
        </View>
      </View>
      <View style={styles.blockTwo}>
        {/* <View style={styles.box2}>
          <ImageRotation sendMessage={sendMessage}/>
          </View> */}
        <View style={styles.box2}>
          <Iris context={irisValue} sendMessage={sendMessage} />
        </View>
        <View style={styles.box2}>
          <AntiFlicker context={flickerValue} />
        </View>
        <View style={styles.box2}>
          <PowerButton context={powerValue} sendMessage={sendMessage} reset={reset} loading={handleButtonPress} />
        </View>
        {/* <View style={styles.box2}>
          <CameraSetting navigation={navigation} />
        </View> */}
      </View>
      {/* <Text style={styles.dome}>AHD Camera</Text> */}
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
    // borderWidth: 2
  },
  box: {
    width: wp('22%'),
    height: hp('37%'),
  },
  box2: {
    width: wp('33.3%'),
    height: hp('37%'),
    // borderWidth:2
  },
  box3: {
    // borderWidth:2,
    width: wp('50%'),
    height: hp('38%'),
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
})