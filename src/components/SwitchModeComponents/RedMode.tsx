import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import redModeOn from '../../../assets/redmodeOn.png'
import redModeOff from '../../../assets/redModeOff.png'
import { BtnEnableContext } from '../../Context/EnableContext'
import Snackbar from 'react-native-snackbar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


type RedModeType={
    context:{
        enable:boolean,
        setEnable: (enable:boolean)=>void
    }
}


const RedMode = ({context}:RedModeType) => {
    // const {enable, setEnable}= useContext(BtnEnableContext);
    const {enable, setEnable}= context;
    const toggleSwitch = () => {
        setEnable(!enable)

        if(!enable){
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
                !enable ?
                    <View style={styles.offImgContainer}>
                        <Image source={redModeOff} style={styles.boostOffImg} resizeMode='contain'/>
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={redModeOn} style={styles.boostOnImg} resizeMode='contain'/>
                    </View>
            }
            <Text

                style={styles.heading}
            >RED MODE</Text>
            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={enable ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={enable}
                    style={[styles.switchBtn, { transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }]}
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
        fontSize: hp('3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio:1
    },

    offImgContainer: {},
    boostOffImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio:1
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
    },
})