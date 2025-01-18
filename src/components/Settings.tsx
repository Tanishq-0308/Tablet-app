import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import settingImg from '../../assets/settings.png'
import Icon from 'react-native-vector-icons/FontAwesome'

const Settings = () => {
  return (
    <View style={styles.container}>
        <Image source={settingImg} style={styles.settingImg}/>
      <Text style={styles.heading}>SETTINGS</Text>
      <Pressable style={styles.onBtnTxt}>
        <Icon name='play' size={38} color='#fff'/>
      </Pressable>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        fontStyle: 'italic'
    },
    settingImg: {
        height: 140,
        width: 170,
    },
    onBtnTxt:{
        borderRadius:7,
        backgroundColor:'#95d151',
        fontSize:30,
        fontWeight:'bold',
        paddingVertical:8,
        // paddingBottom:8,
        paddingHorizontal:10,
        color:'white',
        // marginTop:4
    },
    offBtnTxt:{
        borderRadius:7,
        backgroundColor:'red',
        fontSize:30,
        fontWeight:'bold',
        padding:6,
        color:'white'
    }
})