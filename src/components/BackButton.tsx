import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const BackButton = () => {
    return (
        <View style={styles.backBtnContainer}>
            <Icons name='return-up-back-outline' 
            style={styles.icon} />
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
        fontSize: hp('1.6%'),
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1
    },
    icon:{
        fontSize:hp('4%'),
        color:'white',
    }
})