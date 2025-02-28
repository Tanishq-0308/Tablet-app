import { ScrollView, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import Page1 from './Page1';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../App';
import Page2 from './Page2';
import { BtnEnableContext } from '../Context/EnableContext';

type HomeProps = NativeStackScreenProps<RootParamList>;

const Home = ({ navigation }: HomeProps) => {
  const {cameraEnabled}= useContext(BtnEnableContext);
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <Page1 navigation={navigation} />
      {
       cameraEnabled && <Page2 navigation={navigation}/>
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
