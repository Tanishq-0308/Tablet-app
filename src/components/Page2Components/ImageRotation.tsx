import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import rotationImg from '../../../assets/cameraIcons/imageRotation.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const ImageRotation = () => {
  return (
     <View style={styles.mainContainer}>
                       <View style={{alignItems:'center', gap:10,}}>
                       <View style={styles.container}>
                           <Image source={rotationImg} style={styles.Image} resizeMode='contain'/>
                       </View>
                           <Text style={styles.heading}>Image Rotation</Text>
                       </View>
                   </View>
  )
}

export default ImageRotation

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
        // paddingVertical:2,
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    },
})