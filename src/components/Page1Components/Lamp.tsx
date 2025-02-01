import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LampOn from '../../../assets/lamp.png';
import LampOff from '../../../assets/lamp-off.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale } from 'react-native-size-matters';

const Lamp = () => {

    const [power, setPower] = useState(false)
    return (
        <View style={styles.container}>
            {
                power ?
                    <View style={styles.offImgContainer}>
                        <Image source={LampOff} style={styles.lampOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={LampOn} style={styles.lampOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >LAMP</Text>
            <Pressable
                style={styles.onBtn}
                onPress={() => setPower(!power)}
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
            </Pressable>
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
        fontSize: hp('3.3%'),
        fontStyle: 'italic'
    },
    onImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    lampOnImg: {
            height: verticalScale(76),
            width: scale(75),
    },

    offImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    lampOffImg: {
        height: verticalScale(76),
        width: scale(75),
    },
    onBtn: {
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    }
})