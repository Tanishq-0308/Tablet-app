import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import freezeImage from '../../../assets/cameraIcons/imageFreeze.png'

const ImageFreeze = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', gap: 10, }}>
                <View style={styles.container}>
                    <Image source={freezeImage} style={styles.Image} />
                </View>
                <Text style={styles.heading}>Image Freeze</Text>
            <View style={styles.buttons}>
                <Pressable>
                    <Text style={styles.button}>ON</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.button}>OFF</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
}

export default ImageFreeze

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'center',
        padding:10
    },
    container: {
        height: '41%',
        width: '55%',
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
        paddingHorizontal: 24,
        // paddingVertical:2,
        borderRadius: 12,
        elevation: 2,
        borderColor: '#747d8c'
    },
    buttons: {
        flexDirection: 'row',
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
    }
})