import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import overHdSensorOn from '../../assets/overheadSensorOn.png'
import overHdSensorOff from '../../assets/overheadSensorOff.png'
import { BtnEnableContext } from '../Context/EnableContext'
import Snackbar from 'react-native-snackbar'

const OverHeadSensor = () => {
    const {headSensorEnabled, setHeadSensorEnabled}= useContext(BtnEnableContext);
    const toggleSwitch = () => {
        setHeadSensorEnabled(!headSensorEnabled)

        if(!headSensorEnabled){
            Snackbar.show({
                text:'OverHead sensor is Enabled!',
                duration:Snackbar.LENGTH_LONG,
                backgroundColor:'#5BBD17',
                textColor:'white'
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
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic',
    },
    onImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOnImg: {
        height: '100%',
        width: '100%',
    },

    offImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOffImg: {
        height: '100%',
        width: '100%',
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
    },
})