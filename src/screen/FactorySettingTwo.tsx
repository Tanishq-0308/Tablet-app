import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import BackButton from '../components/BackButton'
import FactoryBtn from '../components/SettingsPage/FactoryBtn'
import GreenIntensity from '../components/SettingsPage/GreenIntensity'
import RedIntensity from '../components/SettingsPage/RedIntensity'
import OverheadEnable from '../components/SettingsPage/OverheadEnable'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CameraBtn from '../components/SettingsPage/CameraBtn'
import { RightBtnEnableContext } from '../Context/RightContext'
import useStore from '../Store/stateStore'
import { useWebSocket } from '../Context/webSocketContext'

type FactorySettingTwoProps = NativeStackScreenProps<RootParamList, 'FactorySettingTwo'>

const FactorySettingTwo: React.FC<FactorySettingTwoProps> = ({ navigation, route }) => {
    const {greenEnabled,redEnabled,headSensorEnabled, greenValue, setGreenValue, greenEnabledValue, setGreenEnabledValue,redValue, setRedValue, redEnabledValue, setRedEnabledValue, headSensor, setHeadSensor }=useContext(RightBtnEnableContext);

    const greenRightObjects= {
        color: greenValue,
        setColor: setGreenValue,
        enable: greenEnabledValue,
        setEnable: setGreenEnabledValue 
    }

    const rightHeadObjects={
        sensor:headSensor,
        setSensor: setHeadSensor
    }

    const redRightObjects={
        color: redValue,
        setColor: setRedValue,
        enable: redEnabledValue,
        setEnable: setRedEnabledValue 
    }
    
    const value= useStore((state)=>state.states.stateMR);
    const value2= useStore((state)=>state.states.stateGR);
    const value3= useStore((state)=>state.states.stateRR);
    const value4= useStore((state)=>state.states.stateOR)
    const {sendMessage}=useWebSocket();
  return (
    <View style={styles.mainContainer}>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                <View style={styles.container1}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <BackButton />
                    </Pressable>
                </View>
                    <View style={styles.box}>
                        <FactoryBtn navigation={navigation} navigateTo='RightColorMode' />
                    </View>
                    <View style={styles.box}>
                        <CameraBtn value={value} sendMessage={sendMessage} code='R'/>
                    </View>
                    <View style={styles.box}>
                        {
                            headSensorEnabled && <OverheadEnable context={rightHeadObjects} value={value4} sendMessage={sendMessage} code='R'/>
                        }
                    </View>
                </View>
                <View style={styles.blockTwo}>
                <View style={styles.box2}>
                        {
                            greenEnabled && <GreenIntensity context={greenRightObjects} value={value2} sendMessage={sendMessage} code='R'/>
                        }
                    </View>
                    <View style={styles.box2}>
                        {
                            redEnabled && <RedIntensity context={redRightObjects} value={value3} sendMessage={sendMessage} code='R'/>
                        }
                    </View>
                </View>
            </View>
        </View>
  )
}

export default FactorySettingTwo

const styles = StyleSheet.create({
     mainContainer: {
        flexDirection: 'row',
        // margin: 10,
        backgroundColor:'white',
        // borderWidth:1,
        height: hp('87%'),
        width: wp('100%'),
    },
    container1: {
        flexDirection: 'column',
        marginLeft:10,
        marginTop:10,
        // borderWidth:2
    },
    container2: {
        flexDirection: 'column',
        gap: 15
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('30.6%'),
        height: hp('37%'),
        // borderWidth:1,
    },
    box2:{
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('50%'),
        height: hp('37%'),
        // borderWidth:1,
    },
    blockOne: {
        flexDirection: 'row',
    },
    blockTwo: {
        flexDirection: 'row'
    }
})