import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EndoOn from '../../../assets/endo.png'
import EndoOff from '../../../assets/endo-off.png'

const Endo = () => {
    const [power, setPower] = useState(false)
    return (
        <View style={styles.container}>
            {
                power ?
                    <View style={styles.offImgContainer}>
                        <Image source={EndoOff} style={styles.endoOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={EndoOn} style={styles.endoOnImg} />
                    </View>
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
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
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
    endoOnImg: {
        height: '100%',
        width: '100%',
        marginLeft: 2,
    },
    offImgContainer: {
        height: '60%',
        width: '62%',
    },
    endoOffImg: {
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
    iconBtn: {

    }
})