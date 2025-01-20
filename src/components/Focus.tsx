import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import focusOn from '../../assets/focus.png'
import focusOff from '../../assets/focusOff.png'

const Focus = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            {
                isEnabled ?
                <View  style={styles.offImgContainer}>
                    <Image source={focusOff} style={styles.boostOffImg} />
                </View>
                    :
                <View style={styles.onImgContainer}>
                    <Image source={focusOn} style={styles.boostOnImg} />
                </View>
            }
            <Text
               
                style={styles.heading}
            >FOCUS</Text>
            <View style={styles.switchContainer}>
            <Switch
                 trackColor={{false: '#767577', true: '#81b0ff'}}
                 thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={toggleSwitch}
                 value={isEnabled}
                 style={[styles.switchBtn, {transform: [{scaleX:1.7}, {scaleY:1.7}]}]}
            />
            </View>
        </View>
    )
}

export default Focus

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
        height:'100%',
        width:'100%',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic',
        // borderWidth:2,
        // marginBottom:33
    },
    onImgContainer:{
        height:'60%',
        width:'54%',
    },
    boostOnImg: {
        height: '100%',
        width: '100%',
        // borderWidth:2,
        // marginBottom:10
    },
    
    offImgContainer:{
        height:'60%',
        width:'54%',
    },
    boostOffImg: {
        height: '100%',
        width: '100%',
        // borderWidth:2
    },
    switchContainer:{
        // borderWidth:2,
        // paddingTop:20
    },
    switchBtn:{
        // backgroundColor:'#95d151',
        margin:18
        // borderRadius:17,
        // borderWidth:2
    }
})