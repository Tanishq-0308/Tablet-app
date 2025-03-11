import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import freezeImage from '../../../assets/cameraIcons/imageFreeze.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { cameraStore } from '../../Store/cameraStore';

type freezeProps={
    value:string;
    sendMessage:any;
    context:{
        freeze: boolean,
        setFreeze: (freeze: boolean)=> void;
    }
}

const ImageFreeze = ({value,sendMessage, context}:freezeProps) => {
    const {freeze, setFreeze}= context;
    const setState= cameraStore((state)=>state.setCameraState);
    const key= 'stateH';
    useEffect(()=>{
        if(value == '$H_0#'){
            setFreeze(false);
        }else if(value == '$H_1#'){
            setFreeze(true);
        }
    },[value])
    const switching=()=>{
        if(freeze == true){
            setFreeze(false);
            sendMessage('$H_0#');
            setState(key,'$H_0#')
        }
        else {
            setFreeze(true);
            sendMessage('$H_1#');
            setState(key,'$H_1#')
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <TouchableOpacity onPress={switching}>
                <View style={styles.container}>
                    <Image source={freezeImage} style={styles.Image} resizeMode='contain'/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={switching}>
                <Text style={freeze ? styles.onheading : styles.heading}>Image Freeze</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageFreeze

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'center',
        padding: moderateScale(5)
    },
    container: {},
    Image: {
        height: hp('11.5%'),
        width: wp('7%'),
        aspectRatio: 1
    },
    heading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(15),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    onheading:{
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(15),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#000',
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