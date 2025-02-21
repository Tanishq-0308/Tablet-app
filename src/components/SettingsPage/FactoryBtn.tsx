import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import settingImg from '../../../assets/updatedIcons/Factory_Setting.png'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '../../App'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type FactorySettingProps = {
  navigation: NativeStackNavigationProp<RootParamList>;
  navigateTo: keyof RootParamList; // This restricts to valid route names
};
const FactoryBtn: React.FC<FactorySettingProps> = ({ navigation, navigateTo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={settingImg} style={styles.settingImg} resizeMode='contain' />
      </View>
      <Text style={styles.heading}>FACTORY SETTINGS</Text>
      <TouchableOpacity
        style={styles.onBtnTxt}
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Icon name='play' style={styles.icon} color='#fff' />
      </TouchableOpacity>
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
    gap: 5,
    width: wp('31%'),
  },
  heading: {
    fontWeight: 'bold',
    fontSize: hp('3%'),
    fontStyle: 'italic'
  },
  imgContainer: {
  },
  settingImg: {
    height: hp('19%'),
    width: wp('13%'),
    aspectRatio: 1
  },
  onBtnTxt: {
    borderRadius: 7,
    backgroundColor: '#95d151',
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 11,
    color: 'white',
  },
  icon: {
    fontSize: hp('5%'),
  }

})