import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import cameraSettingImg from '../../../assets/cameraIcons/factorySetting.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../App';

type camera2SettingProp = {
    navigation: NativeStackNavigationProp<RootParamList>
}

const CameraSetting = ({ navigation }: camera2SettingProp) => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <TouchableOpacity onPress={() => navigation.navigate('Controller2')}>
                    <View style={styles.container}>
                        <Image source={cameraSettingImg} style={styles.Image} resizeMode='contain' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Controller2')}>
                    <Text style={styles.heading}>Controller</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CameraSetting

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        // padding:10,
        padding: moderateScale(5)
    },
    container: {},
    Image: {
        height: hp('13%'),
        width: wp('7%'),
        aspectRatio: 1
    },
    heading: {
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: moderateScale(20),
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c'
    },
})