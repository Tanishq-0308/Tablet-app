import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LampOn from '../../../assets/updatedIcons/lampOff.png';
import LampOff from '../../../assets/updatedIcons/lampOn.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';


type LampInput = {
    value: string
    sendMessage: any;
    code: string
}


const Lamp = ({ value, sendMessage, code }: LampInput) => {

    const [power, setPower] = useState(`@L_1#T${code}`)

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@L_1#T${code}`) {
                setPower(`@L_1#T${code}`)

            } else if (value === `@L_0#T${code}`) {
                setPower(`@L_0#T${code}`)

            }
        }
    }, [value])

    const handleButton = () => {
        if (power === `@L_0#T${code}`) {
            setPower(`@L_1#T${code}`);
            sendMessage(`@L_1#T${code}`)
        }
        else {
            setPower(`@L_0#T${code}`)
            sendMessage(`@L_0#T${code}`);
        }
    }
    return (
        <View style={styles.container}>
            {
                power !== `@L_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={LampOff} style={styles.lampOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={LampOn} style={styles.lampOnImg} resizeMode='contain' />
                    </View>
            }
            <Text

                style={styles.heading}
            >LAMP</Text>
            <TouchableOpacity
                style={styles.onBtn}
                onPress={handleButton}
            >
                {
                    power !== `@L_0#T${code}` ?
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                        :
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Lamp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic'
    },
    onImgContainer: {
    },
    lampOnImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio: 1
    },

    offImgContainer: {
    },
    lampOffImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio: 1
    },
    onBtn: {
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
    }
})