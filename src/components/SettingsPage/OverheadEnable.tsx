import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState, } from 'react'
import overHdSensorOn from '../../../assets/overheadSensorOn.png'
import overHdSensorOff from '../../../assets/overheadSensorOff.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';


type OverHeadSensorType= {
    value: string;
    sendMessage:any;
    code: string;
    context: {
     sensor:string,
     setSensor:(sensor: string)=> void
    }
  }


const OverheadEnable = ({value, sendMessage, code, context}: OverHeadSensorType) => {
    const {sensor, setSensor}= context;
    console.log("update", value);
    
    useEffect(()=>{
        if(value.length>0){
            if(value === `@O_1#T${code}`){
                setSensor(`@O_1#T${code}`)
                
            } else if (value === `@O_0#T${code}`){
                setSensor(`@O_0#T${code}`)
            }
        }
    },[value])

    const handleButton=()=>{
        if(sensor === `@O_0#T${code}`){
            setSensor(`@O_1#T${code}`);
            sendMessage(`@O_1#T${code}`)
        }
        else{
            setSensor(`@O_0#T${code}`)
            sendMessage(`@O_0#T${code}`);
        }
    }
    return (
        <View style={styles.container2}>
            {
                sensor == `@O_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={overHdSensorOff} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} />
                    </View>
            }
            <Text
                style={styles.heading}
            >OVERHEAD SENSOR</Text>
            <Pressable
                onPress={handleButton}
            >
                {
                    sensor === `@O_0#T${code}` ?
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                        :
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                }
            </Pressable>
        </View>
    )
}

export default OverheadEnable

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width:wp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
        // borderWidth:2
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
    onBtnTxt: {
            borderRadius: 7,
            backgroundColor: '#95d151',
            fontSize: hp('3.5%'),
            fontWeight: 'bold',
            paddingHorizontal: moderateScale(6),
            paddingVertical: moderateScale(8),
            color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    },
    offImgContainer: {},
    boostOffImg: {
        height: hp('19%'),
        width: wp('11.6%'),
    }
})