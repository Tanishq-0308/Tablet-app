import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import overHdSensorOn from '../../../assets/overheadSensorOn.png'

const OverheadEnable = () => {
    return (
        <View style={styles.container2}>
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} />
                    </View>
            <Text

                style={styles.heading}
            >OVERHEAD SENSOR</Text>
            <Text style={styles.onBtnTxt}>
                ENABLED
            </Text>
        </View>
    )
}

export default OverheadEnable

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic',
    },
    onImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOnImg: {
        height: '100%',
        width: '100%',
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white',
        fontStyle:'italic'
    },
})