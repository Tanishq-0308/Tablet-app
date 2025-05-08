import { ScrollView, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Page1 from './Page1';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../App';
import Page2 from './Page2';
import RNFS from 'react-native-fs';
import Page4 from './Page4';
import Page5 from './Page5';

type HomeProps = NativeStackScreenProps<RootParamList>;

const Home = ({ navigation }: HomeProps) => {
  const [cameraPass, setCameraPass] = useState('');
  const [analogEnable, setAnalogEnbale] = useState('');
  const [ipEnable, setIpEnable] = useState('');

  const readSDIEnable = async () => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/sdiEnable.txt`;
      const pass = await RNFS.readFile(filePath, 'utf8');
      const checkpass = pass;
      setCameraPass(checkpass)
    } catch (error) {

    }
  }
  const readAnalogEnable = async () => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/analogEnable.txt`;
      const pass = await RNFS.readFile(filePath, 'utf8');
      const checkpass = pass;
      setAnalogEnbale(checkpass);
    } catch (error) {
      console.log(error);
    }
  }

  const readIpEnable = async () => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/ipEnable.txt`;
      const pass = await RNFS.readFile(filePath, 'utf8');
      const checkpass = pass;
      setIpEnable(checkpass);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    readSDIEnable();
    readAnalogEnable();
    readIpEnable();
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
        cameraPass == 'on' && <Page2 navigation={navigation} />
      }
      {
        analogEnable == 'on' && <Page4 navigation={navigation} />
      }
      {
        ipEnable == 'on' && <Page5 />
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
