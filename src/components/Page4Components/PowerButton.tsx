import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import powerImage from '../../../assets/cameraIcons/power-button.png'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

type powerProps={
  context:{
    analogPowerEnable: boolean;
    setAnalogPowerEnable: (analogPowerEnable: boolean)=> void;
  },
  sendMessage: any;
  reset:()=> void;
}

const PowerButton = ({context, sendMessage, reset}: powerProps) => {
  const {analogPowerEnable, setAnalogPowerEnable}= context;
  const handlePower =() =>{
    if(analogPowerEnable){
        // loading(5);
        setAnalogPowerEnable(false);
        sendMessage('$PA1#')
        console.log('$PA1#');
    }else{
        setAnalogPowerEnable(true);
        sendMessage('$PA0#')
        console.log('$PA0#');
        reset();
    }
}
  return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View >
                <View style={styles.container}>
                    <Image source={powerImage} style={styles.Image} resizeMode='contain'/>
                </View>
                </View>
                <TouchableOpacity>
                    {
                        analogPowerEnable ?
                <Text style={styles.onheading} onPress={handlePower}>Power On</Text>
                :
                <Text style={styles.heading} onPress={handlePower}>Power Off</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default PowerButton

const styles = StyleSheet.create({
      mainContainer: {
          height: '100%',
          width: '100%',
          // borderWidth:2,
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center',
          padding: moderateScale(5)
      },
      container: {},
      Image: {
          height: hp('13%'),
          width: wp('7%'),
          aspectRatio: 1
      },
      heading: {
          fontSize: hp('2.6%'),
          fontWeight: 'bold',
          borderWidth: 2,
          backgroundColor: '#ced6e0',
          paddingHorizontal: moderateScale(15),
          borderRadius: 22,
          elevation: 5,
          borderColor: '#747d8c'
      },
      onheading:{
          fontSize: hp('2.6%'),
          fontWeight: 'bold',
          borderWidth: 2,
          backgroundColor: '#8c8c8c',
          paddingHorizontal: moderateScale(15),
          borderRadius: 22,
          elevation: 5,
          borderColor: '#747d8c',
          color:'white'
      },
      buttons: {
          flexDirection: 'row',
          gap: 15
      },
      button: {
          fontSize: hp('2.6%'),
          fontWeight: 'bold',
          borderWidth: 2,
          backgroundColor: '#ced6e0',
          paddingHorizontal: moderateScale(7),
          paddingVertical: moderateVerticalScale(2),
          borderRadius: 12,
          elevation: 2,
          borderColor: '#747d8c'
      }
})