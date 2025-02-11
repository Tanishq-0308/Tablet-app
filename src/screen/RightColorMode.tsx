import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { RightBtnEnableContext } from '../Context/RightContext'


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButton from '../components/BackButton';
import GreenMode from '../components/SwitchModeComponents/GreenMode';
import RedMode from '../components/SwitchModeComponents/RedMode';
import OverHeadSensor from '../components/SwitchModeComponents/OverHeadSensor';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../App';


type RightColorModeProps = NativeStackScreenProps<RootParamList, 'ColorMode'>
const RightColorMode = ({ navigation }: RightColorModeProps) => {
    const { greenEnabled, setGreenEnabled, redEnabled, setRedEnabled, headSensorEnabled, setHeadSensorEnabled } = useContext(RightBtnEnableContext)
    const rightGreenEnable = {
        enable: greenEnabled,
        setEnable: setGreenEnabled
    }

    const rightRedEnable = {
        enable: redEnabled,
        setEnable: setRedEnabled
    }

    const rightHeadEnable = {
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
                        <GreenMode context={rightGreenEnable} />
                    </View>
                    <View style={styles.box}>
                        <RedMode context={rightRedEnable} />
                    </View>
                </View>
                <View style={styles.blockTwo}>
                    <View style={styles.box}>
                        <OverHeadSensor context={rightHeadEnable} />
                    </View>
                </View>
                <Text style={styles.dome}>Dome 2</Text>
            </View>
        </View>
    )
}

export default RightColorMode

const styles = StyleSheet.create({
    dome: {
        textAlign: 'right',
        paddingRight: 30,
        fontSize: hp('3.2%'),
        fontStyle: 'italic',
        color: 'red',
        fontWeight: 'bold'
    },
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