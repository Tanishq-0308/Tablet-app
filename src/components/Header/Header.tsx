import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../../../assets/logo.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('screen')
const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logoImage} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        // borderWidth:2,
        // alignItems:'center'
        backgroundColor:'white',
      },
    logoImage: {
        height: hp('10%'),
        width: 180,
        marginHorizontal: 15,
        marginVertical: 5,
        backgroundColor: 'white',
        // borderWidth:2
      },
})