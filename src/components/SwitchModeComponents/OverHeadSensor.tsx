import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import overHdSensorOn from '../../../assets/updatedIcons/overheadSensorOn.png'
import overHdSensorOff from '../../../assets/updatedIcons/overheadSensorOff.png'
import Snackbar from 'react-native-snackbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RNFS from 'react-native-fs';

type OverHeadModeType = {
    context: {
        enable: boolean,
        setEnable: (enable: boolean) => void
    }
}

const OverHeadSensor = ({ context }: OverHeadModeType) => {
    const { enable, setEnable } = context;

     const saveSensorEnable=async(value:string)=>{
            try{
                const filePath=`${RNFS.DocumentDirectoryPath}/sensor.txt`;
                await RNFS.writeFile(filePath, value, 'utf8');
            }catch(error){
                console.error('Error saving value to file:', error);
            }
        }

    const toggleSwitch = () => {
        setEnable(!enable)

        if (!enable) {
            saveSensorEnable('on');
            Snackbar.show({
                text: 'OverHead sensor is Enabled!',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: '#5BBD17',
                textColor: 'white'
            })
        }else{
            saveSensorEnable('off');
        }
    }
    return (
        <View style={styles.container2}>
            {
                !enable ?
                    <View style={styles.offImgContainer}>
                        <Image source={overHdSensorOff} style={styles.boostOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} resizeMode='contain' />
                    </View>
            }
            <Text

                style={styles.heading}
            >OVERHEAD SENSOR</Text>
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

export default OverHeadSensor

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width: wp('22%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
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
        aspectRatio: 1
    },

    offImgContainer: {},
    boostOffImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio: 1
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
    },
})