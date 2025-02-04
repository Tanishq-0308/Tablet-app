import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import BackButton from '../components/BackButton';
import { RootParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import GreenMode from '../components/SwitchModeComponents/GreenMode';
import RedMode from '../components/SwitchModeComponents/RedMode';
import OverHeadSensor from '../components/SwitchModeComponents/OverHeadSensor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BtnEnableContext } from '../Context/EnableContext';


type ColorModeProps = NativeStackScreenProps<RootParamList, 'ColorMode'>
const ColorMode = ({ navigation }: ColorModeProps) => {
    const { greenEnabled, setGreenEnabled, redEnabled, setRedEnabled, headSensorEnabled, setHeadSensorEnabled } = useContext(BtnEnableContext)
    const leftGreenEnable={
        enable:greenEnabled,
        setEnable: setGreenEnabled
    }

    const leftRedEnable={
        enable: redEnabled,
        setEnable: setRedEnabled
    }

    const leftHeadEnable={
        enable: headSensorEnabled,
        setEnable: setHeadSensorEnabled
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container1}>
                <View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <BackButton />
                    </Pressable>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                    <View style={styles.box}>
                        <GreenMode context={leftGreenEnable}/>
                    </View>
                    <View style={styles.box}>
                        <RedMode context={leftRedEnable}/>
                    </View>
                </View>
                <View style={styles.blockTwo}>
                    <View style={styles.box}>
                        <OverHeadSensor context={leftHeadEnable}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ColorMode

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: hp('85.5%'),
        width: wp('100%'),
        // borderWidth:1,
    },
    container1: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10
    },
    container2: {
        flexDirection: 'column',
        gap: 15
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('45.61%'),
        height: hp('37%'),
        // borderWidth:1,
    },
    blockOne: {
        flexDirection: 'row'
    },
    blockTwo: {
        flexDirection: 'row'
    }
})