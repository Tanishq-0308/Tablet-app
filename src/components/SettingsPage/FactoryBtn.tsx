import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import BackButton from '../BackButton'
import settingImg from '../../../assets/factorySetting.png'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../../App'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
          <Icon name='play' style={styles.icon} color='#fff' />
        </Pressable>
      </View>
  )
}

export default FactoryBtn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
        width:wp('31%'),
        // borderWidth:2
      },
      heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic'
      },
      imgContainer: {
        // height: '60%',
        // width: '55%',
      },
      settingImg: {
        height: hp('19%'),
        width: wp('13%'),
      },
      onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 11,
        color: 'white',
      },
      icon:{
        fontSize: hp('5%'),
      }

})