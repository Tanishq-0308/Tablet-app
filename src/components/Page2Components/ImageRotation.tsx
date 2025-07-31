import { Animated, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import rotationImg from '../../../assets/cameraIcons/imageRotation.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';

type rotationProps = {
    value: string;
    sendMessage: any;
    loading: any;
    hdmiValue:boolean;
}

const ImageRotation = ({ value, sendMessage, loading, hdmiValue }: rotationProps) => {

    useEffect(() => {
        if (value == '$R_1#') {
            rotateImage();
        }
    }, [value])
    const rotation = useRef(new Animated.Value(0)).current;

    const rotateImage = () => {
        loading(7);
        rotation.setValue(0);
        Animated.timing(rotation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        if(hdmiValue){
        sendMessage('$R_1#H');
        }else{
        sendMessage('$R_1#');
        }
    }

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Pressable onPress={rotateImage}>
                        <Animated.Image
                            source={rotationImg}
                            style={[styles.Image, animatedStyle]}
                            resizeMode='contain'
                        />
                    </Pressable>
                </View>
                <TouchableOpacity onPress={rotateImage}>
                    <Text style={styles.heading}>Image Rotation</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageRotation

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent:'center',
        // padding:10
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
        paddingHorizontal: moderateScale(9),
        // paddingVertical:2,
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c'
    },
})