import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import cameraFocusImg from '../../../assets/cameraIcons/cameraFocus.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

    type focusProps={
        value:string;
        sendMessage:any;
    }

const CameraFocus = ({value,sendMessage}:focusProps) => {
    const [autoBtn, setAutoBtn]= useState(true);
    const [manualBtn, setManualBtn]= useState(false);
    const [pushBtn, setPushBtn]= useState(false);

    useEffect(()=>{

    },[value])

    // const [width, setWidth] = useState(10);

    const increase = () => {
        sendMessage('$FMP#')
        // if (width < 100) {
        //     setWidth((prev) => prev + 10);
        // }
    };
    const decrease = () => {
        sendMessage('$FMM#')
        // if (width > 10) {
        //     setWidth((prev) => prev - 10);
        // }
    };

    
    const handleMode=(mode:string)=>{
        const commands:any={
            auto:'$F_A#',
            push:'$F_P#',
            manual:'$F_M#'
        };

        const setButtonStates:any={
            auto:setAutoBtn,
            push:setPushBtn,
            manual:setManualBtn
        }

        setAutoBtn(false);
        setPushBtn(false);
        setManualBtn(false);

        if(setButtonStates[mode]){
            setButtonStates[mode](true);
            sendMessage(commands[mode])
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={cameraFocusImg} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Focus</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.pressable} onPress={()=> handleMode('auto')}>
                    <Text style={autoBtn ? styles.onbutton : styles.button}>Auto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressable} onPress={()=> handleMode('push')}>
                    <Text style={pushBtn ? styles.onbutton : styles.button}>One Push</Text>
                </TouchableOpacity>
                {/* <View style={manualBtn ? { flexDirection: 'column', position: 'relative', right: 48 } : styles.manualContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={()=> handleMode('manual')}>
                            <Text style={manualBtn ? styles.onbutton : styles.button}>Manual</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={manualBtn ? styles.valueContainer : styles.valueContainerOff}>
                        <View>
                            <TouchableOpacity onPress={decrease}>
                                <Text style={styles.minus}>-</Text>
                            </TouchableOpacity>
                        </View>
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
                        <View>
                            <TouchableOpacity onPress={increase}>
                                <Text style={styles.plus}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
            </View>
        </View>
    )
}

export default CameraFocus

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
        paddingHorizontal: moderateScale(30),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    buttons: {
        flexDirection: 'row',
        paddingVertical: moderateVerticalScale(10),
        gap: 15
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
        overflow: 'hidden'
    },
    valueContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        gap: 10,
        zIndex:10
    },
    valueContainerOff: {
        display: 'none'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    manualContainer: {},
    minus: { 
        fontSize: hp('8%'),
        paddingBottom:moderateScale(5)
    },
    plus: {
        fontSize: hp('5%'),
        paddingBottom:moderateScale(5)
    },
    pressable:{
        height:hp('5%')
    }
})