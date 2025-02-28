import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '../../App'
import BackButton from '../BackButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

type controllerProp={
    navigation:NativeStackNavigationProp<RootParamList>;
}

const Controller = ({navigation}:controllerProp) => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.container2}>
            <View style={styles.container1}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{
                        elevation: 5,
                        borderRadius: 14
                    }}
                >
                    <BackButton />
                </TouchableOpacity>
            </View>
    </View>
            <View style={styles.container3}>
                <View style={styles.box1}>
                    <TouchableOpacity>
                    <Icon name='caret-up' style={[styles.upIcon, styles.icon]}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name='caret-right' style={[styles.rightIcon, styles.icon]}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name='caret-down' style={[styles.downIcon, styles.icon]}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name='caret-left' style={[styles.leftIcon,styles.icon]}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity>
                    <Icon name='circle' style={styles.roundIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
</View>
  )
}

export default Controller

const styles = StyleSheet.create({
        mainContainer: {
            flexDirection: 'row',
            backgroundColor: 'white',
            height: hp('85.5%'),
            width: wp('100%'),
        },
        container1: {
            flexDirection: 'column',
            marginLeft: 10,
            marginTop: 10,
        },
        container2: {
            flexDirection: 'column',
            gap: 15,
        },
        blockOne: {
            flexDirection: 'row',
        },
        container3: {
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            gap:50
        },
        icon:{
            fontSize:wp('8%'),
            position:'absolute',
            color:'#000'
        },
        upIcon:{
            top:moderateVerticalScale(-10),
            left:moderateScale(60)
        },
        rightIcon:{
            right:10,
            top:moderateVerticalScale(48)
        },
        leftIcon:{
            left:10,
            top:moderateVerticalScale(35)
        },
        downIcon:{
            top:moderateVerticalScale(100),
            left:moderateScale(60)
        },
        roundIcon:{
            color:'#ced6e0',
            fontSize:wp('10%'),
            borderRadius:90,
            borderColor:'#fff',
            paddingLeft:moderateScale(6),
            paddingRight:moderateScale(6),
            backgroundColor:'#000'
        },
        box1:{
            gap:10,
            width:wp('20%'),
            height:hp('34%'),
            borderRadius:140,
            backgroundColor:'#ced6e0'
        },
        box2:{
            width:wp('20%'),
            height:hp('34%'),
            alignItems:'center',
            justifyContent:'center',
            borderRadius:130,
            backgroundColor:'#ced6e0',
        }
})