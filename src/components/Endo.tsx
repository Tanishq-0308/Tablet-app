import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EndoOn from '../../assets/endo.png'
import EndoOff from '../../assets/endo-off.png'

const Endo = () => {
    const [power, setPower] = useState(false)
    return (
        <View style={styles.container}>
            {
                power ?
                    <Image source={EndoOff} style={styles.endoOffImg} />
                    :
                    <Image source={EndoOn} style={styles.endoOnImg} />
            }
            <Text
               
                style={styles.heading}
            >ENDO</Text>
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

export default Endo

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
    endoOnImg: {
        height: 150,
        width: 170,
        // borderWidth:2,
        marginLeft:12,
        marginRight:9
    },
    endoOffImg: {
        height: 150,
        width: 190,
        // borderWidth:2
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