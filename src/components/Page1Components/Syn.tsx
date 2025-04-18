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
  context: {
    syncEnable:boolean,
    setSyncEnable:(syncEnable: boolean)=>void;
  }
}

const Syn = ({ value, sendMessage, context}: SynctModeInputType) => {
  const {syncEnable, setSyncEnable}= context;
  const setState= useStore((state)=>state.setState);
  const component = 'N';
  let code= 'L0';
  const dome = code == 'R0' ? 'R' : 'L';
  const key = `state${component + dome}`;

  useEffect(() => {
      if (value.length > 0) {
          if (value === `@N_1#T${code}`) {
            setSyncEnable(true)

          } else if (value === `@N_0#T${code}`) {
            setSyncEnable(false);
          }
      }
  }, [value])

  const handleButton = () => {
      if (syncEnable === false) {
        setSyncEnable(true);
        // console.log('true');
        sendMessage(`@N_1#T${code}`)
        setState(key,`@N_1#T${code}`);
      }
      else {
        setSyncEnable(false);
        // console.log('false');
          sendMessage(`@N_0#T${code}`);
          setState(key,`@N_0#T${code}`);
      }
  }
  return (
    <View style={styles.container}>
            {
                syncEnable !== false ?
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
                    syncEnable !== false ?
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