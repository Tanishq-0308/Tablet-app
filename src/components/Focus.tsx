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
                    <Image source={focusOff} style={styles.boostOffImg} />
                    :
                    <Image source={focusOn} style={styles.boostOnImg} />
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
        // gap:10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        fontStyle: 'italic',
        // borderWidth:2,
        // marginBottom:33
    },
    boostOnImg: {
        height: 160,
        width: 170,
        // borderWidth:2,
        // marginBottom:10
    },
    boostOffImg: {
        height: 160,
        width: 170,
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