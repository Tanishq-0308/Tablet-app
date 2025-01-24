import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import BackButton from '../BackButton'
import settingImg from '../../../assets/factorySetting.png'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../../App'

type FactorySettingProps = NativeStackScreenProps<RootParamList, 'FactorySetting'>
const FactoryBtn = ({navigation}:FactorySettingProps) => {
  return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={settingImg} style={styles.settingImg} />
        </View>
        <Text style={styles.heading}>FACTORY SETTINGS</Text>
        <Pressable
          style={styles.onBtnTxt}
          onPress={() => navigation.navigate('ColorMode')}
        >
          <Icon name='play' size={38} color='#fff' />
        </Pressable>
      </View>
  )
}

export default FactoryBtn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth:2
      },
      heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic'
      },
      imgContainer: {
        height: '60%',
        width: '55%',
      },
      settingImg: {
        height: '100%',
        width: '100%',
      },
      onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 11,
        color: 'white',
      },
})