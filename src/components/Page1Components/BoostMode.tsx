import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BoostOn from '../../../assets/updatedIcons/boostOff.png'
import BoostOff from '../../../assets/updatedIcons/boostOn.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import useStore from '../../Store/stateStore';

type BoostModeInputType = {
    value: string
    sendMessage: any;
    code: string
}


const BoostMode = ({ value, sendMessage, code }: BoostModeInputType) => {
    const [power, setPower] = useState(`@D_0#T${code}`);
    const setState= useStore((state)=>state.setState);
    const component = 'D';
    const dome = code == 'R0' ? 'R' : 'L';
    const key = `state${component + dome}`;

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@D_1#T${code}`) {
                setPower(`@D_1#T${code}`)

            } else if (value === `@D_0#T${code}`) {
                setPower(`@D_0#T${code}`)
            }
        }
    }, [value])

    const handleButton = () => {
        if (power === `@D_0#T${code}`) {
            setPower(`@D_1#T${code}`);
            sendMessage(`@D_1#T${code}`)
            setState(key,`@D_1#T${code}`);
        }
        else {
            setPower(`@D_0#T${code}`)
            sendMessage(`@D_0#T${code}`);
            setState(key,`@D_0#T${code}`);
        }
    }
    return (
        <View style={styles.container}>
            {
                power !== `@D_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={BoostOff} style={styles.boostOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={BoostOn} style={styles.boostOnImg} resizeMode='contain' />
                    </View>
            }
            <Text

                style={styles.heading}
            >BOOST MODE</Text>
            <TouchableOpacity
                style={styles.onBtn}
                onPress={handleButton}
            >
                {
                    power !== `@D_0#T${code}` ?
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

export default BoostMode

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
    onImgContainer: {},
    boostOnImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio: 1
    },
    offImgContainer: {},
    boostOffImg: {
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