import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import zoomImg from '../../../assets/cameraIcons/zoom.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';

type zoomProps={
    value:string;
    sendMessage:any;
}

const Zoom = ({sendMessage}:zoomProps) => {

    const increase = () => {
        sendMessage('$Z_P#')
    };
    const decrease = () => {
        sendMessage('$Z_M#')
    };
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={zoomImg} style={styles.Image} resizeMode='contain'/>
                </View>
                <Text style={styles.heading}>Zoom</Text>
            </View>
            <View style={styles.valueContainer}>
                <TouchableOpacity onPress={decrease} style={styles.button}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={increase} style={styles.button}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Zoom

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
    button: {
        paddingHorizontal:moderateScale(12),
        backgroundColor:'grey',
        borderRadius:55,
        elevation:8
    },
    length: {
        flexDirection: 'row',
        width: wp('25%'),
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
        justifyContent: "center",
        gap: 50,
        width: wp('20%'),
        height: hp('15%'),
        borderWidth:2,
        borderBlockColor:'#747d8c',
        marginLeft:moderateScale(25),
        borderRadius:55
    },
    minus: {
        fontSize: hp('8%'),
        paddingBottom:moderateScale(5),
        paddingHorizontal:moderateScale(10),
        color:'white'
    },
    plus: {
        fontSize: hp('8%'),
        paddingBottom:moderateScale(5),
        paddingHorizontal:moderateScale(5),
        color:"white"
    }
})