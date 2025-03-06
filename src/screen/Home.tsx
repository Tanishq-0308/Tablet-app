import { ScrollView, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Page1 from './Page1';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../App';
import Page2 from './Page2';
import RNFS from 'react-native-fs';

type HomeProps = NativeStackScreenProps<RootParamList>;

const Home = ({ navigation }: HomeProps) => {
  const [cameraPass, setCameraPass]= useState('');

      const readCameraEnbale= async()=>{
          try {
              const filePath=`${RNFS.DocumentDirectoryPath}/camera.txt`;
              const pass = await RNFS.readFile(filePath,'utf8');
              const checkpass= pass;
              setCameraPass(checkpass);
          } catch (error) {
              console.log(error);
          }
      }
useEffect(()=>{
  readCameraEnbale();
})
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <Page1 navigation={navigation} />
      {
       cameraPass == 'on' && <Page2 navigation={navigation}/>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default Home;
