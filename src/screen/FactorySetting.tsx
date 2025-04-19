import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
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
import RNFS from 'react-native-fs';

type FactorySettingProps = NativeStackScreenProps<RootParamList>

const FactorySetting = ({ navigation }: FactorySettingProps) => {
    const { cameraEnabledValue, setCameraEnabledValue, greenValue, setGreenValue, greenEnabledValue, setGreenEnabledValue, redValue, setRedValue, redEnabledValue, setRedEnabledValue, headSensor, setHeadSensor } = useContext(BtnEnableContext)

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

    const cameraLeftObject = {
        enable: cameraEnabledValue,
        setEnable: setCameraEnabledValue
    }

    const [greenPass, setGreenPass] = useState('');
    const [redPass, setRedPass] = useState('');
    const [cameraPass, setCameraPass] = useState('');
    const [sensorPass, setSensorPass] = useState('');
    const value = useStore((state) => state.states.stateML);
    const value2 = useStore((state) => state.states.stateGL);
    const value3 = useStore((state) => state.states.stateRL);
    const value4 = useStore((state) => state.states.stateOL)
    const { sendMessage } = useWebSocket();

    const readGreenEnable = async () => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/green.txt`;
            const pass = await RNFS.readFile(filePath, 'utf8');
            const checkpass = pass;
            setGreenPass(checkpass);
        } catch (error) {
            console.log(error);
        }
    }
    const readRedEnbale = async () => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/red.txt`;
            const pass = await RNFS.readFile(filePath, 'utf8');
            const checkpass = pass;
            setRedPass(checkpass);
        } catch (error) {
            console.log(error);
        }
    }
    // const readCameraEnbale= async()=>{
    //     try {
    //         const filePath=`${RNFS.DocumentDirectoryPath}/camera.txt`;
    //         const pass = await RNFS.readFile(filePath,'utf8');
    //         const checkpass= pass;
    //         setCameraPass(checkpass);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const readSensorEnbale = async () => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/sensor.txt`;
            const pass = await RNFS.readFile(filePath, 'utf8');
            const checkpass = pass;
            setSensorPass(checkpass);
        } catch (error) {
            console.log(error);
        }
    }


    const readAnalogEnable = async () => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/analogEnable.txt`;
            const pass = await RNFS.readFile(filePath, 'utf8');
            const checkpass = pass;
            setCameraPass(checkpass);
        } catch (error) {

        }
    }

    useEffect(() => {
        readGreenEnable();
        readRedEnbale();
        // readCameraEnbale();
        readSensorEnbale();
        readAnalogEnable();
    }, []);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}
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
                            cameraPass == 'on' && <CameraBtn context={cameraLeftObject} value={value} sendMessage={sendMessage} code="L0" />
                        }
                    </View>
                    <View style={styles.box}>
                        {
                            sensorPass == 'on' && <OverheadEnable context={leftHeadObjects} value={value4} sendMessage={sendMessage} code="L0" />
                        }
                    </View>
                </View>
                <View style={styles.blockTwo}>
                    <View style={styles.box2}>
                        {
                            greenPass == 'on' && <GreenIntensity context={greenLeftObjects} value={value2} sendMessage={sendMessage} code="L0" />
                        }
                    </View>
                    <View style={styles.box2}>
                        {
                            redPass == 'on' && <RedIntensity context={redLeftObjects} value={value3} sendMessage={sendMessage} code="L0" />
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