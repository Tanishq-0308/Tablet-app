import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import cameraOnImage from '../../../assets/cameraOn.png'
import cameraOffImage from '../../../assets/cameraOff.png'
import { moderateScale } from 'react-native-size-matters';
import useStore from '../../Store/stateStore';

type CameraInputType = {
    value: string
    sendMessage: (message: string)=>void;
    code: string;
    context: {
        enable: boolean,
        setEnable: (enable: boolean) => void;
    };
    
}

const CameraBtn = ({ value, sendMessage, code, context }: CameraInputType) => {
    // const [enable, setEnable] = useState(false)
    const { enable, setEnable } = context;
    const setState = useStore((state) => state.setState);
    const component = 'M';
    const dome = code == 'R1'? 'R': 'L';
    const key = `state${component + dome}`;
    // useEffect(() => {
    //     const storedValue = useStore.getState()[key]; // Get the current Zustand state
    //     if (storedValue) {
    //         if (storedValue === `@M_1#T${code}` && enable) {
    //             setEnable(true);
    //         } else if (storedValue === `@M_0#T${code}` && !enable) {
    //             setEnable(false);
    //         }
    //     }
    // }, [code, enable, setEnable]);
    useEffect(() => {
        if (value.length > 0) {
            // const shouldEnable= value === `@M_1#T${code}`;
            // const shouldDisable = value === `@M_0#T${code}`;
            // if (shouldEnable && !enable) {
            //     setEnable(true); // Update context
            //     setState(key, `@M_1#T${code}`); // Sync Zustand
            // } else if (shouldDisable && enable) {
            //     setEnable(false); // Update context
            //     setState(key, `@M_0#T${code}`); // Sync Zustand
            // }
            if (value === `@M_1#T${code}`) {
                setEnable(true);
            } else if (value === `@M_0#T${code}`) {
                setEnable(false);
            }
        }
    }, [value]);

    const toggleSwitch = () => {
        if (enable) {
            setEnable(false);
            sendMessage(`@M_0#T${code}`)
            setState(key, `@M_0#T${code}`);
        } else {
            setEnable(true);
            sendMessage(`@M_1#T${code}`)
            setState(key, `@M_1#T${code}`);
        }
    };
    return (
        <View style={styles.container2}>
            {
                !enable ?
                    <View style={styles.offImgContainer}>
                        <Image source={cameraOffImage} style={styles.boostOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={cameraOnImage} style={styles.boostOnImg} resizeMode='contain' />
                    </View>
            }
            <Text

                style={styles.heading}
            >CAMERA</Text>
            <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', justifyContent: 'center', }}>
                {enable &&
                    <TouchableOpacity onPress={() => sendMessage(`@M_2#T${code}`)}>
                        <Text style={styles.zoomInBtn}>
                            ZOOM  IN
                        </Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity
                    onPress={toggleSwitch}
                >
                    {
                        enable ?
                            <Text style={styles.offBtnTxt}>
                                OFF
                            </Text>
                            :
                            <Text style={styles.onBtnTxt}>
                                ON
                            </Text>
                    }
                </TouchableOpacity>
                {enable &&
                    <TouchableOpacity onPress={() => sendMessage(`@M_3#T${code}`)}>
                        <Text style={styles.zoomOutBtn}>
                            ZOOM OUT
                        </Text>
                    </TouchableOpacity>
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
        width: wp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('21%'),
        width: wp('13%'),
        aspectRatio: 1
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
        height: hp('21%'),
        width: wp('13%'),
        aspectRatio: 1
    },
    zoomInBtn: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    },
    zoomOutBtn: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        paddingHorizontal: moderateScale(6),
        paddingVertical: moderateScale(8),
        color: 'white'
    }
})