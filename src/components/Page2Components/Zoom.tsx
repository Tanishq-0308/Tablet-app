import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import zoomImg from '../../../assets/cameraIcons/zoom.png'

const Zoom = () => {
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
                    <Image source={zoomImg} style={styles.Image} />
                </View>
                <Text style={styles.heading}>Zoom</Text>
            </View>
            <View style={styles.valueContainer}>
                    <TouchableOpacity onPress={decrease}>
                        <Text style={{ fontSize: 38 }}>-</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity onPress={increase}>
                        <Text style={{ fontSize: 38 }}>+</Text>
                    </TouchableOpacity>
            </View>
        </View>

    )
}

export default Zoom

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent:'center',
        paddingHorizontal: 10
    },
    container: {
        height: '41%',
        width: '50%',
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
        paddingHorizontal: 62,
        // paddingVertical:2,
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },

    length: {
        flexDirection: 'row',
        // flexGrow: 1,
        width: '85%',
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
        justifyContent: "center",
        gap: 10,
        // borderWidth:2,
        width:'70%',
        height:'60%'
    },
})