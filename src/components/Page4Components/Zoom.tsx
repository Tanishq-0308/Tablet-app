import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import zoomImg from '../../../assets/cameraIcons/zoom.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';

type zoomProps={
    sendMessage:any;
}

const Zoom = ({sendMessage}:zoomProps) => {

    const increase = () => {
        sendMessage('$ZAP#')
    };
    const decrease = () => {
        sendMessage('$ZAM#')
    };

    const handleZoomIN=async()=>{
        try {
            const response= await fetch('http://192.168.4.4:8000/api/camera_zoom/move/',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ2MzYwMTE0LCJpYXQiOjE3NDYyNzM3MTQsImp0aSI6IjFhN2Q4NjYxNmFiMDRlMmU5MzBiYzZiZDBlODgxYjAzIiwidXNlcl9pZCI6ImJyYWluIn0.c91FrX67zAG6JgtTeOZ7y_EhWmoV80tUVY8Z9PG6GdI'
                },
                body:JSON.stringify({
                    direction:'zoom_in',
                    speed: 0.1,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to zoom camera');
              }
        
              const result = await response.json();
              console.log('Zoom result:', result);
        } catch (error) {
                console.error('Zoom error:', error);
        }
    }

    const handleZoomOut=async()=>{
        try {
            const response= await fetch('http://192.168.4.4:8000/api/camera_zoom/move/',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ2MzYwMTE0LCJpYXQiOjE3NDYyNzM3MTQsImp0aSI6IjFhN2Q4NjYxNmFiMDRlMmU5MzBiYzZiZDBlODgxYjAzIiwidXNlcl9pZCI6ImJyYWluIn0.c91FrX67zAG6JgtTeOZ7y_EhWmoV80tUVY8Z9PG6GdI'
                },
                body:JSON.stringify({
                    direction:'zoom_out',
                    speed: 0.1,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to zoom camera');
              }
        
              const result = await response.json();
              console.log('Zoom result:', result);
        } catch (error) {
                console.error('Zoom error:', error);
        }
    }
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
            alignItems: 'center',
            padding: moderateScale(5),
            // borderWidth:2
        },
        container: {},
        Image: {
            height: hp('13%'),
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