import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import settingImg from '../../assets/factorySetting.png'
import { Dimensions } from 'react-native'
import BackButton from '../components/BackButton'

type FactorySettingProps=NativeStackScreenProps<RootParamList, 'FactorySetting'>

const {width, height}= Dimensions.get('screen')
const FactorySetting = ({navigation}:FactorySettingProps) => {
  return (
    <View style={styles.box}>
        <View>
            <Pressable onPress={()=>navigation.popToTop()}>
                <BackButton/>
            </Pressable>
        </View>
     <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={settingImg} style={styles.settingImg}/>
          </View>
          <Text style={styles.heading}>FACTORY SETTINGS</Text>
          <Pressable 
          style={styles.onBtnTxt}
          onPress={()=> navigation.navigate('ColorMode')}
          >
            <Icon name='play' size={38} color='#fff'/>
          </Pressable>
        </View>
    </View>
  )
}

export default FactorySetting

const styles = StyleSheet.create({
    box: {
        // borderWidth:2,
        flexDirection:'row',
        width:width/4,
        height:height/3,
        // gap:20,
        justifyContent:'space-between',
        margin:10,
    },
    container: {
        flexDirection: 'column',
        gap:5,
        height:'100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth:2
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
    },
})