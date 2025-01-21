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
                    <View style={styles.offImgContainer}>
                        <Image source={LampOff} style={styles.lampOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={LampOn} style={styles.lampOnImg} />
                    </View>
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
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%',
        // borderWidth:2
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic'
    },
    onImgContainer:{
        height:'60%',
        width:'54%',
        // borderWidth:2
    },
    lampOnImg: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
    },
    
    offImgContainer:{
        height:'60%',
        width:'54%',
    },
    lampOffImg: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
    },
    onBtn: {
        // padding:
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal:12,
        paddingVertical:12,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal:12,
        paddingVertical:12,
        color: 'white'
    }
})