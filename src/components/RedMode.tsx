import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import redModeOn from '../../assets/redmodeOn.png'
import redModeOff from '../../assets/redModeOff.png'
import { BtnEnableContext } from '../Context/EnableContext'
import Snackbar from 'react-native-snackbar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RedMode = () => {
    const {redEnabled, setRedEnabled}= useContext(BtnEnableContext);
    const toggleSwitch = () => {
        setRedEnabled(!redEnabled)

        if(!redEnabled){
            Snackbar.show({
                text:'RedMode is Enabled!',
                duration:Snackbar.LENGTH_LONG,
                backgroundColor:'#5BBD17',
                textColor:'white'
            })
        }
    }
    return (
        <View style={styles.container2}>
            {
                !redEnabled ?
                    <View style={styles.offImgContainer}>
                        <Image source={redModeOff} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={redModeOn} style={styles.boostOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >RED MODE</Text>
            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={redEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={redEnabled}
                    style={[styles.switchBtn, { transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }]}
                />
            </View>
        </View>
    )
}

export default RedMode

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