import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import stabilizerImage from '../../../assets/cameraIcons/imageStablizer.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import { cameraStore } from '../../Store/cameraStore';

type stabilizerProps = {
    value: string;
    sendMessage: any;
    context: {
        stablizerEnable: boolean,
        setStablizerEnable: (stablizerEnable: boolean) => void;
        fAutoEnable: boolean,
        setFAutoEnbale: (fAutoEnable: boolean) => void,
        fOnePushEnable: boolean,
        setFOnePushEnbale: (fOnePushEnable: boolean) => void,
    }
}
const ImageStablizer = ({ value, context, sendMessage }: stabilizerProps) => {
    const { stablizerEnable, setStablizerEnable, fAutoEnable, setFAutoEnbale, fOnePushEnable, setFOnePushEnbale } = context;
    const setState = cameraStore((state) => state.setCameraState);
    const key = 'stateF'

    useEffect(() => {
    }, [value])

    const increase = () => {
        sendMessage('$FMP#');
    };
    const decrease = () => {
        sendMessage('$FMM#');
    };
    const handleBtn = () => {
        if (!stablizerEnable) {
            setStablizerEnable(true);
            setFAutoEnbale(false);
            setFOnePushEnbale(false);
            sendMessage('$F_M#');
            setState(key, '$F_M#');
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={stabilizerImage} style={styles.Image} resizeMode='contain' />
                </View>
                <TouchableOpacity onPress={handleBtn}>
                    <Text style={stablizerEnable ? styles.onheading: styles.heading}>Image Stabilizer</Text>
                </TouchableOpacity>
                <View style={stablizerEnable ? styles.valueContainer : styles.valueContainerOff}>
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
            </View>
        </View>
    )
}

export default ImageStablizer

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
        paddingHorizontal: moderateScale(10),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    onheading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(7),
        borderRadius: 12,
        elevation: 2,
        borderColor: '#000',
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
        overflow: 'hidden'
    },
    valueContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
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
        fontSize: hp('7%'),
        paddingBottom: moderateScale(5)
    },
    plus: {
        fontSize: hp('5%'),
        paddingBottom: moderateScale(5)
    }
})