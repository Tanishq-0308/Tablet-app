import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import resetImage from '../../../assets/cameraIcons/reset.png'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

type ResetProps={
    sendMessage:any;
    loading:any;
    reset:()=>void;
}

const Reset = ({sendMessage, loading, reset}:ResetProps) => {

    const handleReset =() =>{
        loading(5);
        sendMessage('$RST#');
        reset();
    }
  return (
      <View style={styles.mainContainer}>
                <View style={{ alignItems: 'center', gap: 10, }}>
                    <View style={styles.container}>
                        <Image source={resetImage} style={styles.Image} resizeMode='contain'/>
                    </View>
                    <TouchableOpacity onPress={handleReset}>
                    <Text style={styles.heading}>Reset</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.buttons}>
                    <TouchableOpacity style={styles.pressable} >
                        {
                            irisEnable ?
                            <Text style={styles.onbutton}onPress={handleIris}>On</Text>
                            :
                        <Text style={styles.button} onPress={handleIris}>Off</Text>
                        }
                    </TouchableOpacity>
                </View> */}
            </View>
  )
}

export default Reset

const styles = StyleSheet.create({
        mainContainer: {
            height: '100%',
            width: '100%',
            // borderWidth:2,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent:'center',
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
            // color:'black',
            borderWidth: 2,
            backgroundColor: '#ced6e0',
            paddingHorizontal: moderateScale(20),
            borderRadius: 22,
            elevation: 5,
            borderColor: '#747d8c'
        },
        // buttons: {
        //     flexDirection: 'row',
        //     paddingVertical: moderateVerticalScale(10),
        //     gap: 15
        // },
        // button: {
        //     fontSize: hp('2.6%'),
        //     fontWeight: 'bold',
        //     borderWidth: 2,
        //     backgroundColor: '#ced6e0',
        //     paddingHorizontal: moderateScale(7),
        //     paddingVertical: moderateVerticalScale(2),
        //     borderRadius: 22,
        //     elevation: 5,
        //     borderColor: '#747d8c'
        // },
        // onbutton:{
        //     fontSize: hp('2.6%'),
        //     fontWeight: 'bold',
        //     borderWidth: 2,
        //     backgroundColor: '#8c8c8c',
        //     paddingHorizontal: moderateScale(7),
        //     paddingVertical: moderateVerticalScale(2),
        //     borderRadius: 22,
        //     elevation: 5,
        //     borderColor: '#747d8c',
        //     color:'#fff'
        // },
        // length: {
        //     flexDirection: 'row',
        //     flexGrow: 1,
        //     width: wp(10),
        //     height: hp(2.2),
        //     borderRadius: 10,
        //     borderColor: '#747d8c',
        //     backgroundColor: '#ced6e0',
        //     alignItems: 'center',
        //     overflow: 'hidden'
        // },
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
        // minus: { 
        //     fontSize: hp('8%'),
        //     paddingBottom:moderateScale(5)
        // },
        // plus: {
        //     fontSize: hp('5%'),
        //     paddingBottom:moderateScale(5)
        // },
        pressable:{
            height:hp('5%'),
            flexDirection:'row',
            gap:15
        }
})