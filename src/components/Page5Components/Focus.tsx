import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import focusImg from '../../../assets/cameraIcons/cameraFocus.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';

type focusProps={
    sendMessage:any;
}


const Focus = ({sendMessage}:focusProps) => {
    const increase = () => {
        // sendMessage('$FAP#')
    };
    const decrease = () => {
        // sendMessage('$FAM#')
    };
  return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={focusImg} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Focus</Text>
            </View>
            <View style={styles.valueContainer}>
                <TouchableOpacity onPress={decrease} style={styles.button}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={increase} style={styles.button}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Focus

const styles = StyleSheet.create({
            mainContainer: {
                height: '100%',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: moderateScale(5),
                // borderWidth:2
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
            button: {
                paddingHorizontal:moderateScale(12),
                backgroundColor:'grey',
                borderRadius:55,
                elevation:8
            },
            length: {
                flexDirection: 'row',
                width: wp('25%'),
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
                justifyContent: "center",
                gap: 50,
                width: wp('20%'),
                height: hp('15%'),
                borderWidth:2,
                borderBlockColor:'#747d8c',
                marginLeft:moderateScale(25),
                borderRadius:55
            },
            minus: {
                fontSize: hp('8%'),
                paddingBottom:moderateScale(5),
                paddingHorizontal:moderateScale(10),
                color:'white'
            },
            plus: {
                fontSize: hp('8%'),
                paddingBottom:moderateScale(5),
                paddingHorizontal:moderateScale(5),
                color:"white"
            }
})