import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EndoOn from '../../../assets/endo.png'
import EndoOff from '../../../assets/endo-off.png'
import { useWebSocket } from '../../Context/webSocketContext'
import useStore from '../../Store/stateStore'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const Endo = () => {
    const [power, setPower] = useState('@E_0#L')
    const {sendMessage}=useWebSocket();
    const value= useStore((state)=>state.states.stateEL)
    console.log("update", value);
    
    useEffect(()=>{
        if(value.length>0){
            if(value === '@E_1#L'){
                setPower('@E_1#L')
                console.log("====");
                
            } else if (value === '@E_0#L'){
                setPower('@E_0#L')
                console.log("+++");
                
            }
        }
    },[value])

    const handleButton=()=>{
        if(power === '@E_0#L'){
            setPower('@E_1#L');
            sendMessage('@E_1#L')
        }
        else{
            setPower('@E_0#L')
            sendMessage('@E_0#L');
        }
    }
    return (
        <View style={styles.container}>
            {
                power !== '@E_0#L' ?
                    <View style={styles.offImgContainer}>
                        <Image source={EndoOff} style={styles.endoOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={EndoOn} style={styles.endoOnImg} />
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
                    power === '@E_0#L' ?
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
        fontSize: hp('3.3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    endoOnImg: {
        height: verticalScale(76),
        width: scale(75),
        marginLeft: 2,
    },
    offImgContainer: {
        // height: '60%',
        // width: '62%',
    },
    endoOffImg: {
        height: verticalScale(76),
        width: scale(84),
    },
    onBtn: {
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    iconBtn: {

    }
})