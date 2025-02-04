import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LampOn from '../../../assets/lamp.png';
import LampOff from '../../../assets/lamp-off.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useWebSocket } from '../../Context/webSocketContext';
import useStore from '../../Store/stateStore';


type LampInput= {
    value: string
    sendMessage:any;
    code: string
  }
  

const Lamp = ({value, sendMessage, code}:LampInput) => {

    const [power, setPower] = useState(`@L_0#T${code}`)
    // const {sendMessage}=useWebSocket();
    // const value= useStore((state)=>state.states.stateLL)

    useEffect(()=>{
            if(value.length>0){
                if(value === `@L_1#T${code}`){
                    setPower(`@L_1#T${code}`)
                    console.log("====");
                    
                } else if (value === `@L_0#T${code}`){
                    setPower(`@L_0#T${code}`)
                    console.log("+++");
                    
                }
            }
        },[value])
    
        const handleButton=()=>{
            if(power === `@L_0#T${code}`){
                setPower(`@L_1#T${code}`);
                sendMessage(`@L_1#T${code}`)
            }
            else{
                setPower(`@L_0#T${code}`)
                sendMessage(`@L_0#T${code}`);
            }
        }
    return (
        <View style={styles.container}>
            {
                power !== `@L_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={LampOff} style={styles.lampOffImg} resizeMode='contain'/>
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={LampOn} style={styles.lampOnImg} resizeMode='contain'/>
                    </View>
            }
            <Text

                style={styles.heading}
            >LAMP</Text>
            <Pressable
                style={styles.onBtn}
                onPress={handleButton}
            >
                {
                    power !== `@L_0#T${code}` ?
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                        :
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                }
            </Pressable>
        </View>
    )
}

export default Lamp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic'
    },
    onImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    lampOnImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio:1
    },

    offImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    lampOffImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio:1
    },
    onBtn: {
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
    }
})