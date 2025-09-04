import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { verticalScale } from 'react-native-size-matters';
import PointerOff from '../../../assets/Pointer_off.png';
import PointerOn from '../../../assets/Pointer_on.png';
import Snackbar from 'react-native-snackbar';
import RNFS from 'react-native-fs';

type PointerModeInputType = {
  context: {
    pointerModeEnable: boolean,
    setPointerModeEnable: (pointerModeEnable: boolean) => void;
  }
}


const Pointer = ({ context }: PointerModeInputType) => {

      const { pointerModeEnable, setPointerModeEnable } = context;

  const savePointerEnable = async (value: string) => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/pointer.txt`;
      await RNFS.writeFile(filePath, value, 'utf8');
    } catch (error) {
      console.error('Error saving value to file:', error);
    }
  }

  const toggleSwitch = () => {
    setPointerModeEnable(!pointerModeEnable)

    if (!pointerModeEnable) {
      savePointerEnable('on');
      Snackbar.show({
        text: 'Pointer is Enabled!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#5BBD17',
        textColor: 'white'
      })
    } else {
      savePointerEnable('off');
    }
  }
  return (
     <View style={styles.container}>
      {
        pointerModeEnable !== false ?
          <View style={styles.offImgContainer}>
            <Image source={PointerOn} style={styles.settingImg} resizeMode='contain' />
          </View>
          :
          <View style={styles.onImgContainer}>
            <Image source={PointerOff} style={styles.settingImg} resizeMode='contain' />
          </View>
      }
      <Text

        style={styles.heading}
      >POINTER MODE</Text>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={pointerModeEnable ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={pointerModeEnable}
          style={[styles.switchBtn, { transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }]}
        />
      </View>
    </View>
  )
}

export default Pointer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        width: wp('22%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      },
      heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic',
      },
      onImgContainer: {},
      boostOnImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio: 1
      },
    
      offImgContainer: {},
      boostOffImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio: 1
      },
      switchContainer: {
      },
      switchBtn: {
        margin: 18
      },
      settingImg: {
        height: hp('16%'),
        // width: wp('10%'),
        aspectRatio: 1,
        margin: verticalScale(6),
      },
})