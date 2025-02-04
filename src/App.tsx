import React from 'react'
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


export type RootParamList = {
  Home: undefined;
  FactorySetting: undefined;
  ColorMode: undefined;
  HomeTwo: undefined;
  FactorySettingTwo:undefined;
  RightColorMode:undefined
}

const Stack = createNativeStackNavigator<RootParamList>()
const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
    </BtnEnableProvider>
    </RightBtnEnableProvider>
    </WebSocketContextProvider>
  )
}

export default App
