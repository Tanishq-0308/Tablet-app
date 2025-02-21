import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import logo from '../../../assets/logo.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  logoImage: {
    height: verticalScale(35),
    width: scale(80),
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  headText: {
    color: 'black',
    fontSize: hp('4%'),
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingRight: moderateScale(12)
  }
})