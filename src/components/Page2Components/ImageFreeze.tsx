import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import freezeImage from '../../../assets/cameraIcons/imageFreeze.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const ImageFreeze = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={freezeImage} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Image Freeze</Text>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <Text style={styles.button}>ON</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.button}>OFF</Text>
                </TouchableOpacity>
            </View>
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