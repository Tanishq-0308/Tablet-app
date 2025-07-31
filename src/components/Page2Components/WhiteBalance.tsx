import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import whiteBalanceImg from '../../../assets/cameraIcons/whiteBalance.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { cameraStore } from '../../Store/cameraStore';

type balanceProps = {
    value: string;
    sendMessage: any;
    context: {
        autoBtn: boolean,
        indoorBtn: boolean,
        outdoorBtn: boolean,
        manualBtn: boolean,
        setAutoBtn: (autoBtn: boolean) => void,
        setIndoorBtn: (indoorBtn: boolean) => void,
        setOutdoorBtn: (outdoorBtn: boolean) => void,
        setManualBtn: (manualBtn: boolean) => void
    }
    loading: any;
    hdmiValue: boolean;
}

const WhiteBalance = ({ value, sendMessage, context, loading, hdmiValue }: balanceProps) => {
    const { autoBtn, setAutoBtn, indoorBtn, outdoorBtn, manualBtn, setIndoorBtn, setOutdoorBtn, setManualBtn } = context;
    const setState = cameraStore((state) => state.setCameraState);
    const key = 'stateW';
    useEffect(() => {
        if (value.length > 0) {
            if (value == '$WA1#') {
                setAutoBtn(true);
                setIndoorBtn(false);
                setOutdoorBtn(false);
                setManualBtn(false);
            } else if (value == '$WI1#') {
                setAutoBtn(false);
                setIndoorBtn(true);
                setOutdoorBtn(false);
                setManualBtn(false);
            } else if (value == '$WO1#') {
                setAutoBtn(false);
                setIndoorBtn(false);
                setOutdoorBtn(true);
                setManualBtn(false);
            } else if (value == '$WM1#') {
                setAutoBtn(false);
                setIndoorBtn(false);
                setOutdoorBtn(false);
                setManualBtn(true);
            }
        }
    }, [value])


    const redGainIncrease = () => {
        loading(7);
        sendMessage('$WRP#')
    };
    const redGainDecrease = () => {
        loading(7);
        sendMessage('$WRM#')
    };
    const blueGainIncrease = () => {
        loading(7);
        sendMessage('$WBP#')
    };
    const blueGainDecrease = () => {
        loading(7);
        sendMessage('$WBM#')
    };
    const chromaIncrease = () => {
        loading(7);
        sendMessage('$WCP#')
    };
    const chromaDecrease = () => {
        loading(7);
        sendMessage('$WCM#')
    };

    const handleModeChange = (mode: string) => {
        loading(7);
        const commands: any = {
            auto: '$WA1#',
            indoor: '$WI1#',
            outdoor: '$WO1#',
            manual: '$WM1#'
        };

        const setButtonStates: any = {
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
            if (hdmiValue) {
                sendMessage(commands[mode] + 'H');
                // console.log(commands[mode]+'H');
            } else {
                sendMessage(commands[mode]);
                // console.log(commands[mode]);
            }
            setState(key, commands[mode])
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
                {/* <View style={manualBtn ? { flexDirection: 'column', gap: 20, position: 'relative', right: 70 } : styles.manualContainer}>
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
                                <TouchableOpacity onPress={redGainDecrease} style={styles.minusButton}>
                                    <Text style={styles.minus}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={redGainIncrease} style={styles.plusButton}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Blue Gain</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={blueGainDecrease} style={styles.minusButton}>
                                    <Text style={styles.minus}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={blueGainIncrease} style={styles.plusButton}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Chroma</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={chromaDecrease} style={styles.minusButton}>
                                    <Text style={styles.minus}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={chromaIncrease} style={styles.plusButton}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View> */}
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
        color: 'black',
        // borderWidth: 2,
        // backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(16),
        // borderRadius: 12,
        // elevation: 2,
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
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c'
    },
    onbutton: {
        fontSize: hp('2.7%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(7),
        paddingVertical: moderateVerticalScale(2),
        borderRadius: 22,
        elevation: 9,
        borderColor: '#747d8c',
        color: '#fff'
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
        fontSize: hp('3%'),
        fontWeight: 'bold'
    },
    valueContainer: {
        flexDirection: 'row',
        gap: 20,
        marginLeft: moderateVerticalScale(10)
        // borderWidth:2
    },
    minus: {
        fontSize: hp('3.5%'),
        // backgroundColor:'grey', 
        color: 'white',
        // margin:moderateScale(2)
    },
    plus: {
        fontSize: hp('3%'),
        // paddingBottom:moderateScale(5)
        color: 'white'
    },
    pressable: {
        height: hp('5%')
    },
    plusButton: {
        paddingHorizontal: moderateScale(10),
        backgroundColor: 'grey',
        borderRadius: 25,
        elevation: 8,
        marginBottom: 7
    },
    minusButton: {
        paddingHorizontal: moderateScale(10),
        backgroundColor: 'grey',
        borderRadius: 25,
        elevation: 8,
        marginBottom: 7
    }
})