import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import { Dimensions } from 'react-native';
import { RootParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import GreenMode from '../components/GreenMode';
import RedMode from '../components/RedMode';
import OverHeadSensor from '../components/OverHeadSensor';


type ColorModeProps = NativeStackScreenProps<RootParamList, 'ColorMode'>
const { width, height } = Dimensions.get('screen')
const ColorMode = ({ navigation }: ColorModeProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container1}>
                <View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <BackButton />
                    </Pressable>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                    <View style={styles.box}>
                        <GreenMode />
                    </View>
                    <View style={styles.box}>
                        <RedMode />
                    </View>
                </View>
                <View style={styles.blockTwo}>
                    <View style={styles.box}>
                        <OverHeadSensor />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ColorMode

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    container1: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10
    },
    container2: {
        flexDirection: 'column',
        gap: 20
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 2.2,
        height: height / 3,
    },
    blockOne: {
        flexDirection: 'row'
    },
    blockTwo: {
        flexDirection: 'row'
    }
})