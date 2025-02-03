import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BtnEnableContext } from '../../Context/EnableContext';
import cameraOnImage from '../../../assets/cameraOn.png'
import cameraOffImage from '../../../assets/cameraOff.png'
import { moderateScale } from 'react-native-size-matters';
import { useWebSocket } from '../../Context/webSocketContext';
import useStore from '../../Store/stateStore';

const CameraBtn = () => {
    const [power,setPower]= useState(false)
    const {sendMessage}=useWebSocket();
    const value= useStore((state)=>state.states.stateEL)
    console.log("update", value);
    
    useEffect(()=>{
            if(value.length>0){
                if(value === '@M_1#TL'){
                    setPower(true)
                } else if (value === '@M_0#TL'){
                    setPower(false)
                }
            }
        },[value])

    const toggleSwitch = () => {
        if(power){
            setPower(false);          
            sendMessage('@M_0#TL')
        } else {
            setPower(true);
            sendMessage('@M_1#TL')
        }
    };
    return (
        <View style={styles.container2}>
            {
                !power ?
                    <View style={styles.offImgContainer}>
                        <Image source={cameraOffImage} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={cameraOnImage} style={styles.boostOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >CAMERA</Text>
            <View style={{flexDirection:'row', gap:15, alignItems:'center', justifyContent:'center',}}>
            { power && 
            <Pressable onPress={()=> sendMessage('@M_3#TL')}>
                <Text style={styles.zoomOutBtn}>
                            ZOOM OUT
                        </Text>
            </Pressable>
            }
            <Pressable
                onPress={toggleSwitch}
            >
                {
                    power ?
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                        :
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                }
            </Pressable>
            { power && 
            <Pressable onPress={()=> sendMessage('@M_2#TL')}>
                <Text style={styles.zoomInBtn}>
                            ZOOM  IN
                        </Text>
            </Pressable>
            }
            </View>
        </View>
    )
}

export default CameraBtn

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
            width: wp('13%'),
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
            width: wp('13%'),
        },
        zoomInBtn:{
            borderRadius: 7,
            backgroundColor: '#95d151',
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            paddingHorizontal: moderateScale(6),
            paddingVertical: moderateScale(8),
            color: 'white'
        },  
        zoomOutBtn:{
            borderRadius: 7,
            backgroundColor: 'red',
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            paddingHorizontal: moderateScale(6),
            paddingVertical: moderateScale(8),
            color: 'white'
        }
})