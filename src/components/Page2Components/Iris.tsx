import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import IrisImage from '../../../assets/cameraIcons/iris.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { cameraStore } from '../../Store/cameraStore';

type irisProps={
    value:string;
    sendMessage:any;
    context:{
        irisEnable:boolean,
        setIrisEnable:(irisEnable:boolean)=>void
    };
    loading: any;
}

const Iris = ({value,context,sendMessage, loading}:irisProps) => {
    const {irisEnable, setIrisEnable}= context
    const setState= cameraStore((state)=>state.setCameraState);
    const key='stateI';
    useEffect(()=>{
        if(value.length >0){
            if(value == '$IB0#'){
                setIrisEnable(false);
            }else if(value == '$IB1#'){
                setIrisEnable(true);
            }
        }
    },[value])


    const handleIris=()=>{
        loading(7);
        if(irisEnable){
            setIrisEnable(false);
            sendMessage('$IB0#')
            setState(key,'$IB0#');
        }else{
            setIrisEnable(true);
            sendMessage('$IB1#')
            setState(key,'$IB1#');
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={IrisImage} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Iris</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.pressable} >
                    {
                        irisEnable ?
                        <Text style={styles.onbutton}onPress={handleIris}>Off</Text>
                        :
                    <Text style={styles.button} onPress={handleIris}>On</Text>
                    }
                </TouchableOpacity>
                {/* <View style={manualBtn ? { flexDirection: 'column'} : styles.manualContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity >
                            <Text style={manualBtn ? styles.onbutton : styles.button}>OFF</Text>
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

export default Iris

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent:'center',
        padding: moderateScale(5)
    },
    container: {},
    Image: {
            height: hp('11.5%'),
            width: wp('7%'),
            aspectRatio:1
    },
    heading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        color:'black',
        // borderWidth: 2,
        // backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(40),
        // borderRadius: 12,
        // elevation: 2,
        // borderColor: '#747d8c'
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
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c'
    },
    onbutton:{
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(7),
        paddingVertical: moderateVerticalScale(2),
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c',
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
        // justifyContent: "center",
        gap: 10,
        // borderWidth:2
    },
    valueContainerOff: {
        display: 'none'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    manualContainer: {

    },
    minus: { 
        fontSize: hp('8%'),
        paddingBottom:moderateScale(5)
    },
    plus: {
        fontSize: hp('5%'),
        paddingBottom:moderateScale(5)
    },
    pressable:{
        height:hp('5%'),
        flexDirection:'row',
        gap:15
    }
})