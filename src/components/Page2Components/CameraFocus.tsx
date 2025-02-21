import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import cameraFocusImg from '../../../assets/cameraIcons/cameraFocus.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const CameraFocus = () => {
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
                    <Image source={cameraFocusImg} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Focus</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <Text style={styles.button}>Auto</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.button}>One Push</Text>
                </TouchableOpacity>
                <View style={manualBtn ? { flexDirection: 'column', position: 'relative', right: 48 } : styles.manualContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => setManualBtn(!manualBtn)}>
                            <Text style={styles.button}>Manual</Text>
                        </TouchableOpacity>
                    </View>

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
        </View>
    )
}

export default CameraFocus

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent:'center',
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
        paddingHorizontal: moderateScale(30),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
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
        justifyContent:'center',
        gap: 10,
        // paddingTop:moderateScale(15),
        // borderWidth:2
    },
    valueContainerOff: {
        display: 'none'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    manualContainer: {},
    minus: { 
        fontSize: hp('8%'),
        paddingBottom:moderateScale(5)
    },
    plus: {
        fontSize: hp('5%'),
        paddingBottom:moderateScale(5)
    }
})