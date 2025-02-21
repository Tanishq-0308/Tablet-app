import { StyleSheet, View } from 'react-native'
import React from 'react'
import WhiteBalance from '../components/Page2Components/WhiteBalance'
import Iris from '../components/Page2Components/Iris'
import CameraFocus from '../components/Page2Components/CameraFocus'
import CameraSetting from '../components/Page2Components/CameraSetting'
import ImageRotation from '../components/Page2Components/ImageRotation'
import ImageFreeze from '../components/Page2Components/ImageFreeze'
import ImageStablizer from '../components/Page2Components/ImageStablizer'
import Zoom from '../components/Page2Components/Zoom'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Page2 = () => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.block}>
        <View style={styles.box}>
          <WhiteBalance />
        </View>
        <View style={styles.box1}>
          <Iris />
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.box}>
          <Zoom />
        </View>
        <View style={styles.box1}>
          <CameraFocus />
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.innerBlock}>
          <View style={styles.box2}>
            <ImageStablizer />
          </View>
          <View style={styles.box2}>
            <ImageFreeze />
          </View>
        </View>
        <View style={styles.innerBlock}>
          <View style={styles.box2}>
            <ImageRotation />
          </View>
          <View style={styles.box2}>
            <CameraSetting />
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