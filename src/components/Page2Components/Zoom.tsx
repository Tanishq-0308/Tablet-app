import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import zoomImg from '../../../assets/cameraIcons/zoom.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

type zoomProps={
    value:string;
    sendMessage:any;
}

const Zoom = ({value,sendMessage}:zoomProps) => {

    useEffect(()=>{

    },[value])

    const increase = () => {
        sendMessage('$Z_P#')
    };
    const decrease = () => {
        sendMessage('$Z_M#')
    };
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={zoomImg} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Zoom</Text>
            </View>
            <View style={styles.valueContainer}>
                <TouchableOpacity onPress={decrease}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
                <View style={styles.length}>
                    <View
                        style={{
                            height: "100%",
                            backgroundColor: "black",
                            width: `100%`,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}
                    ></View>
                </View>
                <TouchableOpacity onPress={increase}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Zoom

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: moderateScale(5)
    },
    container: {},
    Image: {
        height: hp('11.5%'),
        width: wp('7%'),
        aspectRatio:1
    },
    heading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(40),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },

    length: {
        flexDirection: 'row',
        width: wp('32%'),
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
        gap: 10,
        width: wp('38%'),
        height: hp('15%')
    },
    minus: {
        fontSize: hp('8%'),
        paddingBottom:moderateScale(6)
    },
    plus: {
        fontSize: hp('5%'),
        paddingBottom:moderateScale(5)
    }
})