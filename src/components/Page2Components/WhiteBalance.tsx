import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import whiteBalanceImg from '../../../assets/cameraIcons/whiteBalance.png'

const WhiteBalance = () => {
    const [redGain, setRedGain] = useState(10);
    const [blueGain, setBlueGain] = useState(10);
    const [chroma, setChroma] = useState(10);
    const [manualBtn, setManualBtn] = useState(true);

    const redGainIncrease = () => {
        if (redGain < 100) {
            setRedGain((prev) => prev + 10);
        }
    };
    const redGainDecrease = () => {
        if (redGain > 10) {
            setRedGain((prev) => prev - 10);
        }
    };
    const blueGainIncrease = () => {
        if (blueGain < 100) {
            setBlueGain((prev) => prev + 10);
        }
    };
    const blueGainDecrease = () => {
        if (blueGain > 10) {
            setBlueGain((prev) => prev - 10);
        }
    };
    const chromaIncrease = () => {
        if (chroma < 100) {
            setChroma((prev) => prev + 10);
        }
    };
    const chromaDecrease = () => {
        if (chroma> 10) {
            setChroma((prev) => prev - 10);
        }
    };
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={whiteBalanceImg} style={styles.Image} />
                </View>
                <Text style={styles.heading}>White Balance</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable>
                    <Text style={styles.button}>Auto</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.button}>Indoor</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.button}>Outdoor</Text>
                </Pressable>
                <View style={manualBtn ? { flexDirection: 'column', gap: 25, position: 'relative', right: 89 } : styles.manualContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => setManualBtn(!manualBtn)}>
                            <Text style={styles.button}>Manual</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={manualBtn ? styles.gainContainer : styles.valueContainerOff}>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Red Gain</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={redGainDecrease}>
                                    <Text style={{ fontSize: 30, lineHeight: 30, }}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.length}>
                                    <View
                                        style={{
                                            height: "100%",
                                            backgroundColor: "black",
                                            width: `${redGain}%`,
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                        }}
                                    ></View>
                                </View>
                                <TouchableOpacity onPress={redGainIncrease}>
                                    <Text style={{ fontSize: 30, lineHeight: 35 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Blue Gain</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={blueGainDecrease}>
                                    <Text style={{ fontSize: 30, lineHeight: 30 }}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.length}>
                                    <View
                                        style={{
                                            height: "100%",
                                            backgroundColor: "black",
                                            width: `${blueGain}%`,
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                        }}
                                    ></View>
                                </View>
                                <TouchableOpacity onPress={blueGainIncrease}>
                                    <Text style={{ fontSize: 30, lineHeight: 35 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valueMainContainer}>
                            <View>
                                <Text style={styles.gainHeading}>Chroma</Text>
                            </View>
                            <View style={styles.valueContainer}>
                                <TouchableOpacity onPress={chromaDecrease}>
                                    <Text style={{ fontSize: 30, lineHeight: 30 }}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.length}>
                                    <View
                                        style={{
                                            height: "100%",
                                            backgroundColor: "black",
                                            width: `${chroma}%`,
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                        }}
                                    ></View>
                                </View>
                                <TouchableOpacity onPress={chromaIncrease}>
                                    <Text style={{ fontSize: 30, lineHeight: 35 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default WhiteBalance

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10
    },
    container: {
        height: '45%',
        width: '50%',
    },
    Image: {
        height: '100%',
        width: '100%',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: 24,
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    buttons: {
        flexDirection: 'row',
        paddingVertical: 20,
        gap: 15
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: 13,
        paddingVertical: 2,
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    length: {
        flexDirection: 'row',
        flexGrow: 1,
        width: 130,
        height: 17,
        borderRadius: 10,
        borderColor: '#747d8c',
        backgroundColor: '#ced6e0',
        alignItems: 'center',
        overflow: 'hidden',
    },
    gainContainer: {
        flexDirection: 'column',
        position: 'relative',
        right: 30
    },
    valueMainContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 10
    },
    valueContainerOff: {
        display: 'none'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    manualContainer: {},
    gainHeading: { 
        fontSize: 20, 
        fontWeight: 'bold' 
    },
    valueContainer:{
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 10
    }
})