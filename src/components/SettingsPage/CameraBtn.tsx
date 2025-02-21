import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import cameraOnImage from '../../../assets/cameraOn.png'
import cameraOffImage from '../../../assets/cameraOff.png'
import { moderateScale } from 'react-native-size-matters';

type CameraInputType = {
    value: string
    sendMessage: any;
    code: string
}

const CameraBtn = ({ value, sendMessage, code }: CameraInputType) => {
    const [power, setPower] = useState(false)

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@M_1#T${code}`) {
                setPower(true)
            } else if (value === `@M_0#T${code}`) {
                setPower(false)
            }
        }
    }, [value])

    const toggleSwitch = () => {
        if (power) {
            setPower(false);
            sendMessage(`@M_0#T${code}`)
        } else {
            setPower(true);
            sendMessage(`@M_1#T${code}`)
        }
    };
    return (
        <View style={styles.container2}>
            {
                !power ?
                    <View style={styles.offImgContainer}>
                        <Image source={cameraOffImage} style={styles.boostOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={cameraOnImage} style={styles.boostOnImg} resizeMode='contain' />
                    </View>
            }
            <Text

                style={styles.heading}
            >CAMERA</Text>
            <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', justifyContent: 'center', }}>
                {power &&
                    <TouchableOpacity onPress={() => sendMessage(`@M_3#T${code}`)}>
                        <Text style={styles.zoomOutBtn}>
                            ZOOM OUT
                        </Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity
                    onPress={toggleSwitch}
                >
                    {
                        power ?
                            <Text style={styles.offBtnTxt}>
                                OFF
                            </Text>
                            :
                            <Text style={styles.onBtnTxt}>
                                ON
                            </Text>
                    }
                </TouchableOpacity>
                {power &&
                    <TouchableOpacity onPress={() => sendMessage(`@M_2#T${code}`)}>
                        <Text style={styles.zoomInBtn}>
                            ZOOM  IN
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default CameraBtn

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width: wp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('21%'),
        width: wp('13%'),
        aspectRatio: 1
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    },
    offImgContainer: {},
    boostOffImg: {
        height: hp('21%'),
        width: wp('13%'),
        aspectRatio: 1
    },
    zoomInBtn: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    },
    zoomOutBtn: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    }
})