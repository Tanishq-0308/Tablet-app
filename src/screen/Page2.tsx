import { Dimensions, Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WhiteBalance from '../components/Page2Components/WhiteBalance'
import Iris from '../components/Page2Components/Iris'
import CameraFocus from '../components/Page2Components/CameraFocus'
import CameraSetting from '../components/Page2Components/CameraSetting'
import ImageRotation from '../components/Page2Components/ImageRotation'
import ImageFreeze from '../components/Page2Components/ImageFreeze'
import ImageStablizer from '../components/Page2Components/ImageStablizer'
import Zoom from '../components/Page2Components/Zoom'

const { width, height } = Dimensions.get('screen')
const Page2 = () => {
console.log("width", width + "height" + height);

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
    height: height-170,
    width: width,
    // borderWidth:2
  },
  block: {
    height: (height - 170) / 3,
    width: '100%',
    flexDirection: 'row',
    borderWidth:2
  },
  box: {
    width: '55%',
    height: '100%',
    borderWidth:2
  },
  box1: {
    width: '60%',
    height: '100%',
    borderWidth:2
  },
  box2: {
    width: '50%',
    height: '100%',
    borderWidth:2
  },
  innerBlock: {
    flexDirection: 'row',
    width: '50%',
    height: '100%',
  }
})