import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IrisImage from '../../../assets/cameraIcons/iris.png'

const Iris = () => {
    const [width, setWidth] = useState(10);

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
                    <Image source={IrisImage} style={styles.Image} />
                </View>
                <Text style={styles.heading}>Iris</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable>
                    <Text style={styles.button}>Auto</Text>
                </Pressable>
                <Text style={styles.button}>Manual</Text>
                <View>
                <View
                    style={styles.valueContainer}
                >
                    <View>
                        <TouchableOpacity onPress={decrease}>
                            <Text style={{ fontSize: 28 }}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.length}>
                        <View
                            style={{
                                height: "100%",
                                backgroundColor: "black",
                                width: `${width}%`,
                                borderRadius:10
                            }}
                        >
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={increase}>
                            <Text style={{ fontSize: 28 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default Iris

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent:'center',
        padding: 10
    },
    container: {
        height: '45%',
        width: '55.5%',
        // borderWidth:2,
    },
    Image: {
        height: '100%',
        width: '100%',
        // borderWidth:2
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        backgroundColor: '#ced6e0',
        paddingHorizontal: 65,
        // paddingVertical:2,
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
        width: 100,
        height: 15,
        borderRadius: 10,
        borderColor: '#747d8c',
        backgroundColor:'#ced6e0'
    },
    valueContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,

    }
})