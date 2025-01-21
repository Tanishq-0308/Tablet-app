import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'

const BackButton = () => {
    return (
        <View style={styles.backBtnContainer}>
            <Icons name='return-up-back-outline' size={30} style={{ color: 'white', fontWeight: 'bold' }} />
            <Text style={styles.backBtn}>GO BACK</Text>
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    backBtnContainer: {
        backgroundColor: '#27ae60',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 1,
        borderRadius: 13,
    },
    backBtn: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        // lineHeight:20,
        letterSpacing: 1
    }
})