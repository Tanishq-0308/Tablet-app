import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation= useNavigation();
  
    const [selectedValue, setSelectedValue] = useState("Dome 1");
    const handleDomeSwitch=(value:string)=>{
      setSelectedValue(value)
      if(value == 'Dome 1'){
        navigation.navigate('Home')
      }else if(value == 'Dome 2'){
        navigation.navigate('HomeTwo')
      }
      if (value !== "Select a Dome...") {
        setSelectedValue("Select a Dome...");
    }
    }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoImage} />
      
      <View style={styles.selectedContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue)=>handleDomeSwitch(itemValue)}
          style={styles.dome}
        >
          <Picker.Item label="Select a Dome" value={null} />
          <Picker.Item label='Dome 1' value='Dome 1' />
          <Picker.Item label='Dome 2' value='Dome 2' />
        </Picker>
        </View>
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
  },
  selectedContainer:{
    flexDirection:'row',
  },
  dome: {
    // color: 'red',
    // fontWeight: 'bold',
    // height:'100%',
    width:wp('13%'),
  },
})