import React from 'react'
import Page1 from './screen/Page1'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FactorySetting from './screen/FactorySetting'
import ColorMode from './screen/ColorMode'
import { BtnEnableProvider } from './Context/EnableContext'
import Header from './components/Header/Header'


export type RootParamList = {
  Home: undefined;
  FactorySetting: undefined;
  ColorMode: undefined;
}

const Stack = createNativeStackNavigator<RootParamList>()
const App = () => {
  return (
    <BtnEnableProvider>
    <NavigationContainer>
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
