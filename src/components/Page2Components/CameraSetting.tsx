import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import cameraSettingImg from '../../../assets/cameraIcons/factorySetting.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const CameraSetting = () => {
  return (
    <View style={styles.mainContainer}>
                   <View style={{alignItems:'center', gap:10,}}>
                   <View style={styles.container}>
                       <Image source={cameraSettingImg} style={styles.Image} resizeMode='contain'/>
                   </View>
                   <TouchableOpacity>
                       <Text style={styles.heading}>Factory Setting</Text>
                   </TouchableOpacity>
                   </View>
               </View>
  )
}

export default CameraSetting

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        // borderWidth:2,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        // padding:10
    },
    container:{},
    Image:{
        height: hp('11.5%'),
        width: wp('7%'),
        aspectRatio: 1
    },
    heading:{
        fontSize: hp('2.6%'),
        fontWeight:'bold',
        borderWidth:2,
        backgroundColor:'#ced6e0',
        paddingHorizontal: moderateScale(20),
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    },
})