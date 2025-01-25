import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import overHdSensorOn from '../../../assets/overheadSensorOn.png'
import overHdSensorOff from '../../../assets/overheadSensorOff.png'
import Snackbar from 'react-native-snackbar';
import { BtnEnableContext } from '../../Context/EnableContext';

const OverheadEnable = () => {
        const [power, setPower] = useState(false)
    return (
        <View style={styles.container2}>
            {
                !power ?
                    <View style={styles.offImgContainer}>
                        <Image source={overHdSensorOff} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >OVERHEAD SENSOR</Text>
                        <Pressable
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
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOffImg: {
        height: '100%',
        width: '100%',
    }
})