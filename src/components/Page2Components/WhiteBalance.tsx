import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import whiteBalanceImg from '../../../assets/cameraIcons/whiteBalance.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { cameraStore } from '../../Store/cameraStore';

type balanceProps={
    value:string;
    sendMessage:any;
    context:{
        autoBtn:boolean,
        indoorBtn:boolean,
        outdoorBtn:boolean,
        manualBtn:boolean,
        setAutoBtn:(autoBtn:boolean)=>void,
        setIndoorBtn:(indoorBtn:boolean)=>void,
        setOutdoorBtn:(outdoorBtn:boolean)=>void,
        setManualBtn: (manualBtn: boolean)=>void
    }
}

const WhiteBalance = ({value,sendMessage, context}:balanceProps) => {
    const {autoBtn,setAutoBtn, indoorBtn, outdoorBtn, manualBtn, setIndoorBtn, setOutdoorBtn, setManualBtn}=context;
    const setState= cameraStore((state)=>state.setCameraState);
    const key='stateW';
    useEffect(()=>{
        if(value.length >0){
            if(value == '$WA1#'){
                setAutoBtn(true);
                setIndoorBtn(false);
                setOutdoorBtn(false);
                setManualBtn(false);
            }else if( value == '$WI1#'){
                setAutoBtn(false);
                setIndoorBtn(true);
                setOutdoorBtn(false);
                setManualBtn(false);
            }else if(value == '$WO1#'){     
                setAutoBtn(false);
                setIndoorBtn(false);
                setOutdoorBtn(true);
                setManualBtn(false);
            }else if(value == '$WM1#'){
                setAutoBtn(false);
                setIndoorBtn(false);
                setOutdoorBtn(false);
                setManualBtn(true);
            }
        }
    },[value])


    const redGainIncrease = () => {
        sendMessage('$WRP#')
    };
    const redGainDecrease = () => {
        sendMessage('$WRM#')
    };
    const blueGainIncrease = () => {
        sendMessage('$WBP#')
    };
    const blueGainDecrease = () => {
        sendMessage('$WBM#')
    };
    const chromaIncrease = () => {
        sendMessage('$WCP#')
    };
    const chromaDecrease = () => {
        sendMessage('$WCM#')
    };

    const handleModeChange = (mode:string) => {
        const commands:any = {
            auto: '$WA1#',
            indoor: '$WI1#',
            outdoor: '$WO1#',
            manual: '$WM1#'
        };
    
        const setButtonStates:any = {
            auto: setAutoBtn,
            indoor: setIndoorBtn,
            outdoor: setOutdoorBtn,
            manual: setManualBtn
        };
    
        // Reset all buttons
        setAutoBtn(false);
        setIndoorBtn(false);
        setOutdoorBtn(false);
        setManualBtn(false);
    
        // Set the selected mode
        if (setButtonStates[mode]) {
            setButtonStates[mode](true);
            sendMessage(commands[mode]);
            setState(key,commands[mode])
        }
    }


    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={whiteBalanceImg} style={styles.Image} resizeMode='contain' />
                </View>
                <Text style={styles.heading}>White Balance</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.pressable} onPress={() => handleModeChange('auto')}>
                    <Text style={autoBtn ? styles.onbutton : styles.button}>Auto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressable} onPress={() => handleModeChange('indoor')}>
                    <Text style={indoorBtn ? styles.onbutton : styles.button}>Indoor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressable} onPress={() => handleModeChange('outdoor')}>
                    <Text style={outdoorBtn ? styles.onbutton : styles.button}>Outdoor</Text>
                </TouchableOpacity>
                <View style={manualBtn ? { flexDirection: 'column', gap: 25, position: 'relative', right: 89 } : styles.manualContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => handleModeChange('manual')}>
                            <Text style={manualBtn ? styles.onbutton : styles.button}>Manual</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={manualBtn ? styles.gainContainer : styles.valueContainerOff}>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Red Gain</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={redGainDecrease}>
                                    <Text style={styles.minus}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.length}>
                                    <View
                                        style={{
                                            height: "100%",
                                            backgroundColor: "black",
                                            width: `100%`,
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                        }}
                                    ></View>
                                </View>
                                <TouchableOpacity onPress={redGainIncrease}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Blue Gain</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={blueGainDecrease}>
                                    <Text style={styles.minus}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.length}>
                                    <View
                                        style={{
                                            height: "100%",
                                            backgroundColor: "black",
                                            width: `100%`,
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                        }}
                                    ></View>
                                </View>
                                <TouchableOpacity onPress={blueGainIncrease}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Chroma</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={chromaDecrease}>
                                    <Text style={styles.minus}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.length}>
                                    <View
                                        style={{
                                            height: "100%",
                                            backgroundColor: "black",
                                            width: `100%`,
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                        }}
                                    ></View>
                                </View>
                                <TouchableOpacity onPress={chromaIncrease}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default WhiteBalance

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: moderateScale(5)
    },
    container: {},
    Image: {
        height: hp('11.5%'),
        width: wp('7%'),
        aspectRatio: 1
    },
    heading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(16),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    buttons: {
        flexDirection: 'row',
        paddingVertical: moderateVerticalScale(10),
        gap: 15,
    },
    button: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(7),
        paddingVertical: moderateVerticalScale(2),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    onbutton:{
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(7),
        paddingVertical: moderateVerticalScale(2),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#000',
        color:'#fff'
    },
    length: {
        flexDirection: 'row',
        flexGrow: 1,
        width: wp(10),
        height: hp(2.2),
        borderRadius: 10,
        borderColor: '#747d8c',
        backgroundColor: '#ced6e0',
        alignItems: 'center',
        overflow: 'hidden',
    },
    gainContainer: {
        flexDirection: 'column',
        position: 'relative',
        right: 30
    },
    valueMainContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 10
    },
    valueContainerOff: {
        display: 'none'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    manualContainer: {},
    gainHeading: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    },
    valueContainer: {
        flexDirection: 'row',
        gap: 10
    },
    minus: {
        fontSize: hp('7%'),
        lineHeight: 40
    },
    plus: {
        fontSize: hp('4.5%'),
        lineHeight: 28,
        paddingBottom:moderateScale(5)
    },
    pressable:{
        height:hp('5%')
    }
})