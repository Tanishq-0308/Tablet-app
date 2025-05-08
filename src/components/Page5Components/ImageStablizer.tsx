import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import stabilizerImage from '../../../assets/cameraIcons/imageStablizer.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';


const ImageStablizer = () => {
    const [stablizerEnable, setStablizerEnable]= useState(false);

    const handleBtn = () => {
        if (!stablizerEnable) {
            setStablizerEnable(true);
        }
        else{
            setStablizerEnable(false);
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={stabilizerImage} style={styles.Image} resizeMode='contain' />
                </View>
                <TouchableOpacity onPress={handleBtn}>
                    <Text style={stablizerEnable ? styles.onheading: styles.heading}>Image Stabilizer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageStablizer

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
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
        paddingHorizontal: moderateScale(10),
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c'
    },
    onheading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(10),
        borderRadius: 22,
        elevation: 2,
        borderColor: '#747d8c',
        color: '#fff'
    },
})