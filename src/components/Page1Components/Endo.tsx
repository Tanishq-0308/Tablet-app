import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EndoOn from '../../../assets/updatedIcons/endoOff.png'
import EndoOff from '../../../assets/updatedIcons/endoOn.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import useStore from '../../Store/stateStore';


type EndoInput = {
    value: string
    sendMessage: any;
    code: string
}


const Endo = ({ value, sendMessage, code }: EndoInput) => {
    const [power, setPower] = useState(`@E_0#T${code}`)
    const setState= useStore((state)=>state.setState);
    const component = 'E';
    const dome = code == 'R1' ? 'R' : 'L';
    const key = `state${component + dome}`;

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@E_1#T${code}`) {
                setPower(`@E_1#T${code}`)

            } else if (value === `@E_0#T${code}`) {
                setPower(`@E_0#T${code}`)

            }
        }
    }, [value])

    const handleButton = () => {
        if (power === `@E_0#T${code}`) {
            setPower(`@E_1#T${code}`);
            sendMessage(`@E_1#T${code}`)
            setState(key,`@E_1#T${code}`);
        }
        else {
            setPower(`@E_0#T${code}`)
            sendMessage(`@E_0#T${code}`);
            setState(key,`@E_0#T${code}`);
        }
    }
    return (
        <View style={styles.container}>
            {
                power !== `@E_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={EndoOff} style={styles.endoOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={EndoOn} style={styles.endoOnImg} resizeMode='contain' />
                    </View>
            }
            <Text

                style={styles.heading}
            >ENDO</Text>
            <TouchableOpacity
                style={styles.onBtn}
                onPress={handleButton}
            >
                {
                    power === `@E_0#T${code}` ?
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                        :
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Endo

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
        fontStyle: 'italic',
    },
    onImgContainer: {
    },
    endoOnImg: {
        height: hp('19%'),
        width: wp('13%'),
        marginLeft: 2,
        aspectRatio: 1
    },
    offImgContainer: {
    },
    endoOffImg: {
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
    },
    iconBtn: {

    }
})