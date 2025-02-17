import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import Snackbar from 'react-native-snackbar'
import cameraModeOff from '../../../assets/cameraOff.png'
import cameraModeOn from '../../../assets/cameraOn.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type CameraModeType={
    context:{
        enable:boolean,
        setEnable: (enable:boolean)=>void
    }
}

const CameraMode = ({context}:CameraModeType) => {

    const {enable, setEnable} = context;
    const toggleSwitch = () =>{
        setEnable(!enable);

        if(!enable){
            Snackbar.show({
                text:'CameraMode is Enabled!',
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
                        <Image source={cameraModeOff} style={styles.boostOffImg} resizeMode='contain'/>
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={cameraModeOn} style={styles.boostOnImg} resizeMode='contain'/>
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
  )
}

export default CameraMode

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