import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import { Dimensions } from 'react-native'
import BackButton from '../components/BackButton'
import FactoryBtn from '../components/SettingsPage/FactoryBtn'
import GreenIntensity from '../components/SettingsPage/GreenIntensity'
import RedIntensity from '../components/SettingsPage/RedIntensity'
import OverheadEnable from '../components/SettingsPage/OverheadEnable'
import { BtnEnableContext } from '../Context/EnableContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CameraBtn from '../components/SettingsPage/CameraBtn'

type FactorySettingProps = NativeStackScreenProps<RootParamList, 'FactorySetting'>

const { width, height } = Dimensions.get('screen')
const FactorySetting = ({ navigation, route }: FactorySettingProps) => {
    const {greenEnabled,redEnabled,headSensorEnabled}=useContext(BtnEnableContext)
  return (
    <View style={styles.mainContainer}>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                <View style={styles.container1}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <BackButton />
                    </Pressable>
                </View>
                    <View style={styles.box}>
                        <FactoryBtn navigation={navigation} route={route} />
                    </View>
                    <View style={styles.box}>
                        <CameraBtn />
                    </View>
                    <View style={styles.box}>
                        {
                            headSensorEnabled && <OverheadEnable />
                        }
                    </View>
                </View>
                <View style={styles.blockTwo}>
                <View style={styles.box2}>
                        {
                            greenEnabled && <GreenIntensity />
                        }
                    </View>
                    <View style={styles.box2}>
                        {
                            redEnabled && <RedIntensity />
                        }
                    </View>
                </View>
            </View>
        </View>
  )
}

export default FactorySetting

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    // margin: 10,
    backgroundColor:'white',
    // borderWidth:1,
    height: hp('87%'),
    width: wp('100%'),
},
container1: {
    flexDirection: 'column',
    marginLeft:10,
    marginTop:10,
    // borderWidth:2
},
container2: {
    flexDirection: 'column',
    gap: 15
},
box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('30.6%'),
    height: hp('37%'),
    // borderWidth:1,
},
box2:{
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('50%'),
    height: hp('37%'),
    // borderWidth:1,
},
blockOne: {
    flexDirection: 'row',
},
blockTwo: {
    flexDirection: 'row'
}
})