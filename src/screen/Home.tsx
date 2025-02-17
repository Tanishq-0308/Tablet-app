import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Page2 from './Page2';
import Page1 from './Page1';
import Page3 from './Page3';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
        <Page2 />
        <Page1 navigation={navigation} />
        <Page3 navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default Home;
