import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import freezeImage from '../../../assets/cameraIcons/imageFreeze.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

type freezeProps={
    value:string;
    sendMessage:any;
}

const ImageFreeze = ({value,sendMessage}:freezeProps) => {

    useEffect(()=>{
        if(value == '$H_0#'){
            setFreeze(false);
        }else if(value == '$H_1#'){
            setFreeze(true);
        }
    },[value])
    const [freeze, setFreeze] = useState(false);
    const switching=()=>{
        setFreeze(prev=>!prev);
        if(freeze == true){
            sendMessage('$H_0#');
        }
        else {
            sendMessage('$H_1#');
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