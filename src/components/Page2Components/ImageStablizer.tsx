import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stabilizerImage from '../../../assets/cameraIcons/imageStablizer.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const ImageStablizer = () => {
    const [width, setWidth] = useState(10);
    const [manualBtn, setManualBtn] = useState(false);

    const increase = () => {
        if (width < 100) {
            setWidth((prev) => prev + 10);
        }
    };
    const decrease = () => {
        if (width > 10) {
            setWidth((prev) => prev - 10);
        }
    };
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={stabilizerImage} style={styles.Image} resizeMode='contain'/>
                </View>
                <TouchableOpacity onPress={() => setManualBtn(!manualBtn)}>
                    <Text style={styles.heading}>Image Stabilizer</Text>
                </TouchableOpacity>
                <View style={manualBtn ? styles.valueContainer : styles.valueContainerOff}>
                    <View>
                        <TouchableOpacity onPress={decrease}>
                            <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.length}>
                        <View
                            style={{
                                height: "100%",
                                backgroundColor: "black",
                                width: `${width}%`,
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                            }}
                        ></View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={increase}>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        alignItems: 'flex-start',
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
        paddingHorizontal: moderateScale(10),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
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
        gap: 10,
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
        fontSize: hp('7%'),
        paddingBottom:moderateScale(5)
    },
    plus: {
        fontSize: hp('5%'),
        paddingBottom:moderateScale(5)
    }
})