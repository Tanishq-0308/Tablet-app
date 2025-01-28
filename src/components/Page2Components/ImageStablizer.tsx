import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stabilizerImage from '../../../assets/cameraIcons/imageStablizer.png'

const ImageStablizer = () => {
    const [width, setWidth] = useState(10);
    const [manualBtn, setManualBtn] = useState(false);

    const increase = () => {
        if (width < 100) {
            setWidth((prev) => prev + 10);
        }
    };
    const decrease = () => {
        if (width > 10) {
            setWidth((prev) => prev - 10);
        }
    };
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={stabilizerImage} style={styles.Image} />
                </View>
                <TouchableOpacity onPress={() => setManualBtn(!manualBtn)}>
                    <Text style={styles.heading}>Image Stabilizer</Text>
                </TouchableOpacity>
                <View style={manualBtn ? styles.valueContainer : styles.valueContainerOff}>
                    <View>
                        <TouchableOpacity onPress={decrease}>
                            <Text style={{ fontSize: 38 }}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.length}>
                        <View
                            style={{
                                height: "100%",
                                backgroundColor: "black",
                                width: `${width}%`,
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                            }}
                        ></View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={increase}>
                            <Text style={{ fontSize: 38 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ImageStablizer

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    container: {
        height: '42%',
        width: '51%',
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
        paddingHorizontal: 15,
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
        overflow: 'hidden'
    },
    valueContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    valueContainerOff: {
        display: 'none'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    manualContainer: {

    }
})