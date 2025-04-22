import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import IrisImage from '../../../assets/cameraIcons/iris.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

type irisProps={
  context:{
    analogIrisEnable: boolean;
    setAnalogIrisEnable: (analogIrisEnable: boolean)=> void;
  },
  sendMessage: any;
}

const Iris = ({context, sendMessage}: irisProps) => {
  const {analogIrisEnable, setAnalogIrisEnable}= context;
//   const handleIris=()=>{
//     setAnalogIrisEnable(!analogIrisEnable)
//   };
  const handleIris=()=>{
    // loading(7);
    if(analogIrisEnable){
        setAnalogIrisEnable(false);
        sendMessage('$IA0#')
    }else{
        setAnalogIrisEnable(true);
        sendMessage('$IA1#')
    }
}
  return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={IrisImage} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Iris</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.pressable} >
                    {
                        analogIrisEnable ?
                        <Text style={styles.onbutton}onPress={handleIris}>Off</Text>
                        :
                    <Text style={styles.button} onPress={handleIris}>On</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Iris

const styles = StyleSheet.create({
     mainContainer: {
          height: '100%',
          width: '100%',
          // borderWidth:2,
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent:'center',
          padding: moderateScale(4)
      },
      container: {},
      Image: {
              height: hp('13%'),
              width: wp('7%'),
              aspectRatio:1
      },
      heading: {
          fontSize: hp('2.6%'),
          fontWeight: 'bold',
          color:'black',
          // borderWidth: 2,
          // backgroundColor: '#ced6e0',
          paddingHorizontal: moderateScale(40),
          // borderRadius: 12,
          // elevation: 2,
          // borderColor: '#747d8c'
      },
      buttons: {
          flexDirection: 'row',
          paddingVertical: moderateVerticalScale(10),
          gap: 15
      },
      button: {
          fontSize: hp('2.6%'),
          fontWeight: 'bold',
          borderWidth: 2,
          backgroundColor: '#ced6e0',
          paddingHorizontal: moderateScale(7),
          paddingVertical: moderateVerticalScale(2),
          borderRadius: 22,
          elevation: 5,
          borderColor: '#747d8c'
      },
      onbutton:{
          fontSize: hp('2.6%'),
          fontWeight: 'bold',
          borderWidth: 2,
          backgroundColor: '#8c8c8c',
          paddingHorizontal: moderateScale(7),
          paddingVertical: moderateVerticalScale(2),
          borderRadius: 22,
          elevation: 5,
          borderColor: '#747d8c',
          color:'#fff'
      },
      length: {
          flexDirection: 'row',
          flexGrow: 1,
          width: wp(10),
          height: hp(2.2),
          borderRadius: 10,
          borderColor: '#747d8c',
          backgroundColor: '#ced6e0',
          alignItems: 'center',
          overflow: 'hidden'
      },
      valueContainer: {
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "center",
          gap: 10,
          // borderWidth:2
      },
      valueContainerOff: {
          display: 'none'
      },
      buttonContainer: {
          alignItems: 'center'
      },
      manualContainer: {
  
      },
      minus: { 
          fontSize: hp('8%'),
          paddingBottom:moderateScale(5)
      },
      plus: {
          fontSize: hp('5%'),
          paddingBottom:moderateScale(5)
      },
      pressable:{
          height:hp('5%'),
          flexDirection:'row',
          gap:15
      }
})