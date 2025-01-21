import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import Page1 from './screen/Page1'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FactorySetting from './screen/FactorySetting'
import ColorMode from './screen/ColorMode'

const {width, height}= Dimensions.get('screen')

export type RootParamList={
  Home: undefined;
  FactorySetting:undefined;
  ColorMode:undefined;
}

const Stack= createNativeStackNavigator<RootParamList>()
const App = () => {
  return (
    <NavigationContainer>
    <Image source={logo} style={styles.logoImage} />
    <Stack.Navigator>
      <Stack.Screen
        component={Page1}
        name='Home'
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        component={FactorySetting}
        name='FactorySetting'
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        component={ColorMode}
        name='ColorMode'
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>

    {/* <ScrollView horizontal>
    <View style={styles.container}>
      <Page1/>
    </View>
    <View style={styles.container}>
      <Page1/>
    </View>
    </ScrollView> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    height:height-140,
    width:width,
    // borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    // margin:10
},
logoImage: {
    height: 70,
    width: 180,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor:'white'
  },
})