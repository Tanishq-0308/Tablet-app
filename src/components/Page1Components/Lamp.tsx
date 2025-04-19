import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LampOff from '../../../assets/updatedIcons/lampOff.png';
import LampOn from '../../../assets/updatedIcons/lampOn.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import useStore from '../../Store/stateStore';


type LampInput = {
    value: string
    sendMessage: any;
    code: string;
    toggle: {
        lampEnable: boolean,
        setlampEnable:(lampEnable: boolean)=> void;
    }
}


const Lamp = ({ value, sendMessage, code, toggle }: LampInput) => {
    const {lampEnable, setlampEnable}= toggle;
    // const [power, setPower] = useState(`@L_1#T${code}`)
    const setState= useStore((state)=>state.setState);
    const component = 'L';
    const dome = code == 'R0' ? 'R' : 'L';
    const key = `state${component + dome}`;

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@L_1#T${code}`) {
                setlampEnable(true)
            } else if (value === `@L_0#T${code}`) {
                setlampEnable(false)
            }
        }
    }, [value])

    const handleButton = () => {
        if (lampEnable == false) {
            setlampEnable(true)
            sendMessage(`@L_1#T${code}`)
            setState(key,`@L_1#T${code}`);
        }
        else {
            setlampEnable(false)
            sendMessage(`@L_0#T${code}`);
            setState(key,`@L_0#T${code}`);
        }
    }
    return (
        <View style={styles.container}>
            {
                lampEnable ?
                    <View style={styles.onImgContainer}>
                        <Image source={LampOn} style={styles.lampOnImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.offImgContainer}>
                        <Image source={LampOff} style={styles.lampOffImg} resizeMode='contain' />
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
                    lampEnable ?
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