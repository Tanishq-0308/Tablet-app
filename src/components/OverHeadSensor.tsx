import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import overHdSensorOn from '../../assets/overheadSensorOn.png'
import overHdSensorOff from '../../assets/overheadSensorOff.png'
import { BtnEnableContext } from '../Context/EnableContext'
import Snackbar from 'react-native-snackbar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OverHeadSensor = () => {
    const { headSensorEnabled, setHeadSensorEnabled } = useContext(BtnEnableContext);
    const toggleSwitch = () => {
        setHeadSensorEnabled(!headSensorEnabled)

        if (!headSensorEnabled) {
            Snackbar.show({
                text: 'OverHead sensor is Enabled!',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: '#5BBD17',
                textColor: 'white'
            })
        }
    }
    return (
        <View style={styles.container2}>
            {
                !headSensorEnabled ?
                    <View style={styles.offImgContainer}>
                        <Image source={overHdSensorOff} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >OVERHEAD SENSOR</Text>
            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={headSensorEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={headSensorEnabled}
                    style={[styles.switchBtn, { transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }]}
                />
            </View>
        </View>
    )
}

export default OverHeadSensor

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width:wp('22%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3.3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('19%'),
        width: wp('11.6%'),
    },

    offImgContainer: {},
    boostOffImg: {
        height: hp('19%'),
        width: wp('11.6%'),
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
    },
})