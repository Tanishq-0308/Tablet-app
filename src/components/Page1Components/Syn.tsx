import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import Sync from '../../../assets/sync-off.png';
import SyncOn from '../../../assets/sync-on.png';
import useStore from '../../Store/stateStore';

type SynctModeInputType ={
  value: string
  sendMessage: any;
  code: string
}

const Syn = ({ value, sendMessage, code }: SynctModeInputType) => {
  const [power, setPower] = useState(`@N_0#T${code}`);
  const setState= useStore((state)=>state.setState);
  const component = 'N';
  const dome = code == 'R1' ? 'R' : 'L';
  const key = `state${component + dome}`;

  useEffect(() => {
      if (value.length > 0) {
          if (value === `@N_1#T${code}`) {
              setPower(`@N_1#T${code}`)

          } else if (value === `@N_0#T${code}`) {
              setPower(`@N_0#T${code}`)
          }
      }
  }, [value])

  const handleButton = () => {
      if (power === `@N_0#T${code}`) {
          setPower(`@N_1#T${code}`);
          sendMessage(`@N_1#T${code}`)
          setState(key,`@N_1#T${code}`);
      }
      else {
          setPower(`@N_0#T${code}`)
          sendMessage(`@N_0#T${code}`);
          setState(key,`@N_0#T${code}`);
      }
  }
  return (
    <View style={styles.container}>
            {
                power !== `@N_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                      <Image source={SyncOn} style={styles.settingImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                      <Image source={Sync} style={styles.settingImg} resizeMode='contain' />
                    </View>
            }
      <Text style={styles.heading}>SYNC</Text>
            <TouchableOpacity
                style={styles.onBtn}
                onPress={handleButton}
            >
                {
                    power !== `@N_0#T${code}` ?
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                        :
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                }
            </TouchableOpacity>
    </View>
  )
}

export default Syn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic'
      },
      imgContainer: {
      },
      settingImg: {
        height: hp('16%'),
        // width: wp('10%'),
        aspectRatio: 1,
        margin:verticalScale(6),
      },
      onBtn: {
      },
      onBtnTxt: {
          borderRadius: 7,
          backgroundColor: '#95d151',
          fontSize: hp('3.5%'),
          fontWeight: 'bold',
          paddingHorizontal: moderateScale(6),
          paddingVertical: moderateScale(8),
          color: 'white'
      },
      offBtnTxt: {
          borderRadius: 7,
          backgroundColor: 'red',
          fontSize: hp('3.5%'),
          fontWeight: 'bold',
          paddingHorizontal: moderateScale(6),
          paddingVertical: moderateScale(8),
          color: 'white'
      },
      icon: {
        fontSize: hp('5%'),
      },
      offImgContainer: {},
      onImgContainer:{}
})