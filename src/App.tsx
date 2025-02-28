import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FactorySetting from './screen/FactorySetting'
import ColorMode from './screen/ColorMode'
import { BtnEnableProvider } from './Context/EnableContext'
import Header from './components/Header/Header'
import { WebSocketContextProvider } from './Context/webSocketContext'
import Page3 from './screen/Page3'
import FactorySettingTwo from './screen/FactorySettingTwo'
import Home from './screen/Home'
import { RightBtnEnableProvider } from './Context/RightContext'
import RightColorMode from './screen/RightColorMode'
import { PermissionsAndroid, Platform } from 'react-native'
import WifiManager from 'react-native-wifi-reborn';
import Controller from './components/Controller/Controller'

export type RootParamList = {
  Home: undefined;
  FactorySetting: undefined;
  ColorMode: undefined;
  HomeTwo: undefined;
  FactorySettingTwo:undefined;
  RightColorMode:undefined;
  Controller:undefined;
}

const Stack = createNativeStackNavigator<RootParamList>()
const App = () => {
  const requestWifiPermission= async()=>{
    if(Platform.OS === 'android'){
      const granted= await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to enable Wi-Fi.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log('Location permission granted. You can now access Wi-Fi.');
        connectToWifi(granted);
      }else{
        console.log('Location permission denied');
      }
    }
  };

  const connectToWifi=(granted:any)=>{
    if(granted){
      WifiManager.setEnabled(true)
      console.log('Wifi enabled');
    }else{
      console.log('location permission denied');
    }
    
  }

  useEffect(()=>{
    requestWifiPermission();
  },[]);
  return (
    <WebSocketContextProvider>
      <RightBtnEnableProvider>
    <BtnEnableProvider>
    <NavigationContainer>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
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
        <Stack.Screen
          component={Page3}
          name='HomeTwo'
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          component={FactorySettingTwo}
          name='FactorySettingTwo'
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          component={RightColorMode}
          name='RightColorMode'
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          component={Controller}
          name='Controller'
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BtnEnableProvider>
    </RightBtnEnableProvider>
    </WebSocketContextProvider>
  )
}

export default App
