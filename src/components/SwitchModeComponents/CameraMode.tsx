import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import cameraModeOff from '../../../assets/cameraOff.png'
import cameraModeOn from '../../../assets/cameraOn.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RNFS from 'react-native-fs';
import { moderateVerticalScale } from 'react-native-size-matters'

type CameraModeType = {
    context: {
        enable: boolean,
        setEnable: (enable: boolean) => void,
        sdiEnable: boolean,
        setSdiEnable: (sdiEnable: boolean) => void
        analogEnable: boolean,
        setAnalogEnable: (analogEnable: boolean) => void;
        ipEnable: boolean,
        setIpEnable: (ipEnable: boolean) => void;
        hdmiEnable: boolean,
        setHdmiEnable: (hdmiEnable: boolean) => void;
    }
}

const CameraMode = ({ context }: CameraModeType) => {

    const { enable, setEnable, sdiEnable, setSdiEnable, analogEnable, setAnalogEnable, ipEnable, setIpEnable, hdmiEnable, setHdmiEnable } = context;
    // const [sdiEnable,setSdiEnable]= useState(false);
    // const [analogEnable,setAnalogEnable]= useState(false);

    const saveCameraEnable = async (value: string) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/camera.txt`;
            await RNFS.writeFile(filePath, value, 'utf8');
        } catch (error) {
            console.error('Error saving value to file:', error);
        }
    }

    const toggleSwitch = () => {
        setEnable(!enable);

        if (!enable) {
            saveCameraEnable('on');
            saveSdiEnable('on')
            setSdiEnable(true);
            Snackbar.show({
                text: 'CameraMode is Enabled!',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: '#5BBD17',
                textColor: 'white'
            })
        } else {
            saveCameraEnable('off');
            saveSdiEnable('off')
            saveAnalogEnable('off')
            saveIpEnable('off');
            setAnalogEnable(false);
            setSdiEnable(false);
            setIpEnable(false);
        }
    }

    const saveSdiEnable = async (value: string) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/sdiEnable.txt`;
            await RNFS.writeFile(filePath, value, 'utf8');
        } catch (error) {

        }
    }

    const saveAnalogEnable = async (value: string) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/analogEnable.txt`;
            await RNFS.writeFile(filePath, value, 'utf8');
        } catch (error) {

        }
    }

    const saveIpEnable = async (value: string) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/ipEnable.txt`;
            await RNFS.writeFile(filePath, value, 'utf8');
        } catch (error) {

        }
    }

    const saveHDMIEnable = async (value: string) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/hdmiEnable.txt`;
            await RNFS.writeFile(filePath, value, 'utf8');
        } catch (error) {

        }
    }

    const hdmiEnableFunction = () => {
        if (hdmiEnable) {
            setHdmiEnable(false);
            saveHDMIEnable('off');
        } else {
            setHdmiEnable(true);
            saveHDMIEnable('on');
        }
        saveSdiEnable('off');
        setSdiEnable(false);
        saveAnalogEnable('off')
        setAnalogEnable(false);
        setIpEnable(false);
        saveIpEnable('off');
    }

    const sdiEnableFunction = () => {
        if (sdiEnable) {
            setSdiEnable(false);
            saveSdiEnable('off');
        } else {
            setSdiEnable(true);
            saveSdiEnable('on');
        }
        // setSdiEnable(prev=>!prev);
        saveAnalogEnable('off')
        setAnalogEnable(false);
        setIpEnable(false);
        saveIpEnable('off');
        setHdmiEnable(false);
        saveHDMIEnable('off');
    }

    const sdiAnalogFunction = () => {
        if (analogEnable) {
            setAnalogEnable(false);
            saveAnalogEnable('off');
        } else {
            setAnalogEnable(true);
            saveAnalogEnable('on');
        }
        // setAnalogEnable(prev=>!prev);
        saveSdiEnable('off');
        setSdiEnable(false);
        setIpEnable(false);
        saveIpEnable('off');
        setHdmiEnable(false);
        saveHDMIEnable('off');
    }
    const ipFunction = () => {
        if (ipEnable) {
            setIpEnable(false);
            saveIpEnable('off');
        } else {
            setIpEnable(true);
            saveIpEnable('on');
        }

        saveAnalogEnable('off');
        saveSdiEnable('off');
        setAnalogEnable(false);
        setSdiEnable(false);
        setHdmiEnable(false);
        saveHDMIEnable('off');
    }


    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.container2}>
                {
                    !enable ?
                        <View style={styles.offImgContainer}>
                            <Image source={cameraModeOff} style={styles.boostOffImg} resizeMode='contain' />
                        </View>
                        :
                        <View style={styles.onImgContainer}>
                            <Image source={cameraModeOn} style={styles.boostOnImg} resizeMode='contain' />
                        </View>
                }
                <Text

                    style={styles.heading}
                >CAMERA</Text>
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
            {
                enable &&
                <View style={styles.container}>
                    <View style={{flex:1, gap:20}}>
                        <Text style={[styles.button, hdmiEnable == true ? { backgroundColor: 'green' } : { backgroundColor: '#ced6e0' }]} onPress={hdmiEnableFunction}>HDMI</Text>
                        <Text style={[styles.button, sdiEnable == true ? { backgroundColor: 'green' } : { backgroundColor: '#ced6e0' }]} onPress={sdiEnableFunction}>SDI</Text>
                    </View>
                    <View style={{flex:1, gap:20}}>
                        <Text style={[styles.button, analogEnable == true ? { backgroundColor: 'green' } : { backgroundColor: '#ced6e0' }]} onPress={sdiAnalogFunction}>AHD</Text>
                        <Text style={[styles.button, ipEnable == true ? { backgroundColor: 'green' } : { backgroundColor: '#ced6e0' }]} onPress={ipFunction}>IP</Text>

                    </View>
                </View>
            }
        </View>
    )
}

export default CameraMode

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width: wp('22%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    container: {
        width: wp('22%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        flexDirection:'row'
    },
    button: {
        fontSize: hp('3%'),
        width: wp('10%'),
        textAlign: 'center',
        padding: moderateVerticalScale(10),
        color: '#fff',
        borderRadius: 12,
        elevation: 4
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
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