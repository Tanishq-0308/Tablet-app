import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import BackButton from '../components/BackButton'
import FactoryBtn from '../components/SettingsPage/FactoryBtn'
import GreenIntensity from '../components/SettingsPage/GreenIntensity'
import RedIntensity from '../components/SettingsPage/RedIntensity'
import OverheadEnable from '../components/SettingsPage/OverheadEnable'
import { BtnEnableContext } from '../Context/EnableContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CameraBtn from '../components/SettingsPage/CameraBtn'
import useStore from '../Store/stateStore'
import { useWebSocket } from '../Context/webSocketContext'
import Page2 from './Page2'

type FactorySettingProps = NativeStackScreenProps<RootParamList>

const FactorySetting = ({ navigation }: FactorySettingProps) => {
    const { greenEnabled, redEnabled, headSensorEnabled, greenValue, setGreenValue, greenEnabledValue, setGreenEnabledValue, redValue, setRedValue, redEnabledValue, setRedEnabledValue, headSensor, setHeadSensor, cameraEnabled } = useContext(BtnEnableContext)

    const greenLeftObjects = {
        color: greenValue,
        setColor: setGreenValue,
        enable: greenEnabledValue,
        setEnable: setGreenEnabledValue
    }

    const leftHeadObjects = {
        sensor: headSensor,
        setSensor: setHeadSensor
    }

    const redLeftObjects = {
        color: redValue,
        setColor: setRedValue,
        enable: redEnabledValue,
        setEnable: setRedEnabledValue
    }

    const value = useStore((state) => state.states.stateML);
    const value2 = useStore((state) => state.states.stateGL);
    const value3 = useStore((state) => state.states.stateRL);
    const value4 = useStore((state) => state.states.stateOL)
    const { sendMessage } = useWebSocket();

    return (
            <View style={styles.mainContainer}>
                <View style={styles.container2}>
                    <View style={styles.blockOne}>
                        <View style={styles.container1}>
                            <TouchableOpacity onPress={() => navigation.goBack()}
                                style={{
                                    elevation: 5,
                                    borderRadius: 14
                                }}
                            >
                                <BackButton />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <FactoryBtn navigation={navigation} navigateTo='ColorMode' />
                        </View>
                        <View style={styles.box}>
                            {
                                cameraEnabled && <CameraBtn value={value} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                        <View style={styles.box}>
                            {
                                headSensorEnabled && <OverheadEnable context={leftHeadObjects} value={value4} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                    </View>
                    <View style={styles.blockTwo}>
                        <View style={styles.box2}>
                            {
                                greenEnabled && <GreenIntensity context={greenLeftObjects} value={value2} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                        <View style={styles.box2}>
                            {
                                redEnabled && <RedIntensity context={redLeftObjects} value={value3} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                    </View>
                    <Text style={styles.dome}>Dome 1</Text>
                </View>
            </View>
    )
}

export default FactorySetting

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
    },
    container1: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10,
    },
    container2: {
        flexDirection: 'column',
        gap: 15,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('30.6%'),
        height: hp('37%'),
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('50%'),
        height: hp('37%'),
    },
    blockOne: {
        flexDirection: 'row',
    },
    blockTwo: {
        flexDirection: 'row'
    },
})