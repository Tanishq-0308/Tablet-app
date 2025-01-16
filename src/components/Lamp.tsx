import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LampOn from '../../assets/lamp.png';
import LampOff from '../../assets/lamp-off.png';

const Lamp = () => {
    
        const [power, setPower] = useState(false)
  return (
    <View style={styles.container}>
            {
                power ?
                    <Image source={LampOff} style={styles.lampOffImg} />
                    :
                    <Image source={LampOn} style={styles.lampOnImg} />
            }
            <Text
               
                style={styles.heading}
            >LAMP</Text>
            <Pressable
            style={styles.onBtn}
                 onPress={() => setPower(!power)}
            >
                {
                    power ?
                <Text style={styles.offBtnTxt}>
                    OFF
                </Text>
                    :
                <Text style={styles.onBtnTxt}>
                    ON
                </Text>
                }
            </Pressable>
        </View>
  )
}

export default Lamp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap:10,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth:2
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        fontStyle: 'italic'
    },
    lampOnImg: {
        height: 150,
        width: 170,
        // borderWidth:2,
    },
    lampOffImg: {
        height: 150,
        width: 170,
        // borderWidth:2,
    },
    onBtn:{
        // padding:
    },
    onBtnTxt:{
        borderRadius:7,
        backgroundColor:'#95d151',
        fontSize:30,
        fontWeight:'bold',
        padding:6,
        color:'white'
    },
    offBtnTxt:{
        borderRadius:7,
        backgroundColor:'red',
        fontSize:30,
        fontWeight:'bold',
        padding:6,
        color:'white'
    }
})