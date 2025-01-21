import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import settingImg from '../../assets/settings.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'

type HomeProps= NativeStackScreenProps<RootParamList, 'Home'>
const Settings = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={settingImg} style={styles.settingImg}/>
      </View>
      <Text style={styles.heading}>SETTINGS</Text>
      <Pressable 
      style={styles.onBtnTxt}
      onPress={()=>{
        navigation.navigate('FactorySetting')
      }}
      >
        <Icon name='play' size={38} color='#fff'/>
      </Pressable>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap:5,
        height:'100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic'
    },
    imgContainer:{
      height:'60%',
      width:'55%',
      // borderWidth:2
    },
    settingImg: {
        height: '100%',
        width: '100%',
        // borderWidth:2
    },
    onBtnTxt:{
        borderRadius:7,
        backgroundColor:'#95d151',
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal:12,
        paddingVertical:11,
        color:'white',
        // marginTop:4
    }
})