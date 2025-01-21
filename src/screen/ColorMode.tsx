import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import { Dimensions } from 'react-native';
import greenModeOn from '../../assets/greenModeOn.png'
import greenModeOff from '../../assets/greenModeOff.png'
import { RootParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type ColorModeProps=NativeStackScreenProps<RootParamList, 'ColorMode'>
const {width, height}= Dimensions.get('screen')
const ColorMode = ({navigation}:ColorModeProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.box}>
        <View style={styles.backBtnContainer}>
            <Pressable onPress={()=>navigation.goBack()}>
                <BackButton/>
            </Pressable>
        </View>
        <View style={styles.container}>
               <View style={styles.container2}>
               {
                    isEnabled ?
                        <View style={styles.onImgContainer}>
                            <Image source={greenModeOn} style={styles.boostOnImg} />
                        </View>
                        :
                        <View style={styles.offImgContainer}>
                            <Image source={greenModeOff} style={styles.boostOffImg} />
                        </View>
                }
                <Text

                    style={styles.heading}
                >FOCUS</Text>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={[styles.switchBtn, { transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }]}
                    />
                </View>
               </View>
            </View>
            <View style={styles.container}>
                <View style={styles.container2}>
                {
                    isEnabled ?
                        <View style={styles.onImgContainer}>
                            <Image source={greenModeOn} style={styles.boostOnImg} />
                        </View>
                        :
                        <View style={styles.offImgContainer}>
                            <Image source={greenModeOff} style={styles.boostOffImg} />
                        </View>
                }
                <Text

                    style={styles.heading}
                >FOCUS</Text>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={[styles.switchBtn, { transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }]}
                    />
                </View>
                </View>
            </View>
    </View>
  )
}

export default ColorMode

const styles = StyleSheet.create({
    box: {
        // borderWidth:2,
        flexDirection:'row',
        margin:10
    },
    backBtnContainer:{
        // borderWidth:2
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width:width/2.2,
        height:height/3,
        borderWidth:2
    },
    container2: {
        flexDirection:'column',
        borderWidth:2,
        height:'100%',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        // gap:5
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic',
    },
    onImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOnImg: {
        height: '100%',
        width: '100%',
    },

    offImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOffImg: {
        height: '100%',
        width: '100%',
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
    },
})