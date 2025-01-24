import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoostOn from '../../../assets/boostMode.png'
import BoostOff from '../../../assets/boostOff.png'

const BoostMode = () => {
    const [power, setPower] = useState(false)
    return (
        <View style={styles.container}>
            {
                power ?
                    <View style={styles.offImgContainer}>
                        <Image source={BoostOff} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={BoostOn} style={styles.boostOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >BOOST MODE</Text>
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

export default BoostMode

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic'
    },
    onImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOnImg: {
        height: '100%',
        width: '100%',
    },
    offImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOffImg: {
        height: '100%',
        width: '100%',
    },
    onBtn: {
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 11,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 11,
        color: 'white'
    }
})