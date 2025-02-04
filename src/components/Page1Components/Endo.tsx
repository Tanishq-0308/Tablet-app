import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EndoOn from '../../../assets/updatedIcons/endoOff.png'
import EndoOff from '../../../assets/updatedIcons/endoOn.png'
import { useWebSocket } from '../../Context/webSocketContext'
import useStore from '../../Store/stateStore'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


type EndoInput= {
    value: string
    sendMessage:any;
    code: string
  }
  

const Endo = ({value, sendMessage, code}: EndoInput) => {
    const [power, setPower] = useState(`@E_0#T${code}`)
    console.log("update", value);
    
    useEffect(()=>{
        if(value.length>0){
            if(value === `@E_1#T${code}`){
                setPower(`@E_1#T${code}`)
                console.log("====");
                
            } else if (value === `@E_0#T${code}`){
                setPower(`@E_0#T${code}`)
                console.log("+++");
                
            }
        }
    },[value])

    const handleButton=()=>{
        if(power === `@E_0#T${code}`){
            setPower(`@E_1#T${code}`);
            sendMessage(`@E_1#T${code}`)
        }
        else{
            setPower(`@E_0#T${code}`)
            sendMessage(`@E_0#T${code}`);
        }
    }
    return (
        <View style={styles.container}>
            {
                power !== `@E_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={EndoOff} style={styles.endoOffImg} resizeMode='contain'/>
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={EndoOn} style={styles.endoOnImg} resizeMode='contain'/>
                    </View>
            }
            <Text

                style={styles.heading}
            >ENDO</Text>
            <Pressable
                style={styles.onBtn}
                onPress={handleButton}
            >
                {
                    power === `@E_0#T${code}` ?
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

export default Endo

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
        fontStyle: 'italic',
    },
    onImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    endoOnImg: {
        height: hp('19%'),
        width: wp('13%'),
        marginLeft: 2,
        aspectRatio:1
    },
    offImgContainer: {
        // height: '60%',
        // width: '62%',
    },
    endoOffImg: {
        height: hp('19%'),
        width: wp('14.5%'),
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
    },
    iconBtn: {

    }
})