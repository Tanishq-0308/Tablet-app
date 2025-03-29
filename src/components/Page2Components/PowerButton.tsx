import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import powerImage from '../../../assets/cameraIcons/power-button.png'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';


type PowerProps={
    context:{
        powerEnable: boolean,
        setPowerEnable: (powenEnable:boolean)=> void,
    };
    sendMessage:any;
    loading:any;
    reset:()=> void;
}

const PowerButton = ({context,sendMessage,loading, reset}: PowerProps) => {
    const {powerEnable, setPowerEnable}= context;
    const handlePower =() =>{
        if(powerEnable){
            loading(5);
            setPowerEnable(false);
            sendMessage('$PW1#')
            console.log('$PW1#');
        }else{
            setPowerEnable(true);
            sendMessage('$PW0#')
            console.log('$PW0#');
            reset();
        }
    }
  return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View >
                <View style={styles.container}>
                    <Image source={powerImage} style={styles.Image} resizeMode='contain'/>
                </View>
                </View>
                <TouchableOpacity>
                    {
                        powerEnable ?
                <Text style={styles.onheading} onPress={handlePower}>On</Text>
                :
                <Text style={styles.heading} onPress={handlePower}>Off</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default PowerButton

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'center',
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
        paddingHorizontal: moderateScale(15),
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c'
    },
    onheading:{
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: moderateScale(15),
        borderRadius: 22,
        elevation: 5,
        borderColor: '#747d8c',
        color:'white'
    },
    buttons: {
        flexDirection: 'row',
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
    }
})