import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState, } from 'react'
import overHdSensorOn from '../../../assets/overheadSensorOn.png'
import overHdSensorOff from '../../../assets/overheadSensorOff.png'
import { BtnEnableContext } from '../../Context/EnableContext';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import { useWebSocket } from '../../Context/webSocketContext';
import useStore from '../../Store/stateStore';

const OverheadEnable = () => {
    const { headSensor, setHeadSensor } = useContext(BtnEnableContext);
    
    // const [power, setPower] = useState('@E_0#TL')
    const {sendMessage}=useWebSocket();
    const value= useStore((state)=>state.states.stateOL)
    console.log("update", value);
    
    useEffect(()=>{
        if(value.length>0){
            if(value === '@O_1#TL'){
                setHeadSensor('@O_1#TL')
                
            } else if (value === '@O_0#TL'){
                setHeadSensor('@O_0#TL')
            }
        }
    },[value])

    const handleButton=()=>{
        if(headSensor === '@O_0#TL'){
            setHeadSensor('@O_1#TL');
            sendMessage('@O_1#TL')
        }
        else{
            setHeadSensor('@O_0#TL')
            sendMessage('@O_0#TL');
        }
    }
    return (
        <View style={styles.container2}>
            {
                headSensor == '@O_0#TL' ?
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
                    headSensor === '@O_0#TL' ?
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