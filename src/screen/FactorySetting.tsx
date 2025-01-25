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

type FactorySettingProps = NativeStackScreenProps<RootParamList, 'FactorySetting'>

const { width, height } = Dimensions.get('screen')
const FactorySetting = ({ navigation, route }: FactorySettingProps) => {
    const {greenEnabled,redEnabled,headSensorEnabled}=useContext(BtnEnableContext)
  return (
    <View style={styles.mainContainer}>
            <View style={styles.container1}>
                <View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <BackButton />
                    </Pressable>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                    <View style={styles.box}>
                        <FactoryBtn navigation={navigation} route={route} />
                    </View>
                    <View style={styles.box}>
                        {
                            headSensorEnabled && <OverheadEnable />
                        }
                    </View>
                </View>
                <View style={styles.blockTwo}>
                <View style={styles.box}>
                        {
                            greenEnabled && <GreenIntensity />
                        }
                    </View>
                    <View style={styles.box}>
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
  // box: {
  //   flexDirection: 'row',
  //   // width: width / 4,
  //   // height: height / 3,
  //   // justifyContent: 'space-between',
  //   margin: 10,
  //   // borderWidth:2
  // },
  // container1:{

  // },
  mainContainer: {
    flexDirection: 'row',
    // margin: 10,
    backgroundColor:'white',
    // borderWidth:2,
    height:'100%',
    width:'100%',
},
container1: {
    flexDirection: 'column',
    marginLeft:10,
    marginTop:10
},
container2: {
    flexDirection: 'column',
    gap: 35
},
box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 2.22,
    height: height / 3,
    // borderWidth:2,
},
blockOne: {
    flexDirection: 'row'
},
blockTwo: {
    flexDirection: 'row'
}
})