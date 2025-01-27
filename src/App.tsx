import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import Page1 from './screen/Page1'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FactorySetting from './screen/FactorySetting'
import ColorMode from './screen/ColorMode'
import { BtnEnableProvider } from './Context/EnableContext'
import Header from './components/Header/Header'

const { width, height } = Dimensions.get('screen')

export type RootParamList = {
  Home: undefined;
  FactorySetting: undefined;
  ColorMode: undefined;
}
// console.log(width, height);

const Stack = createNativeStackNavigator<RootParamList>()
const App = () => {
  return (
    <BtnEnableProvider>
    <NavigationContainer>
      {/* <Image source={logo} style={[styles.logoImage, height<500 ? {display:'none'}: null]} /> */}
      <Header/>
      <Stack.Navigator>
        <Stack.Screen
          component={Page1}
          name='Home'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          component={FactorySetting}
          name='FactorySetting'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          component={ColorMode}
          name='ColorMode'
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BtnEnableProvider>
  )
}

export default App

const styles = StyleSheet.create({
  logoImage: {
    height: 70,
    width: 180,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    // borderWidth:2
  },
})