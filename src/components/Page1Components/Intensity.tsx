import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import IntZero from '../../../assets/0.png'
import IntOne from '../../../assets/1.png'
import IntTwo from '../../../assets/2.png'
import IntThree from '../../../assets/3.png'
import IntFour from '../../../assets/4.png'
import IntFive from '../../../assets/5.png'
import IntSix from '../../../assets/6.png'
import IntSeven from '../../../assets/7.png'
import IntEight from '../../../assets/8.png'
import IntNine from '../../../assets/9.png'
import useStore from '../../Store/stateStore'
import { useWebSocket } from '../../Context/webSocketContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
type ImageProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


function IntensityImage({ imageUrl }: ImageProps): React.JSX.Element {

  return (
    <View>
      <Image style={styles.intImage} source={imageUrl} />
    </View>
  );
}

const Intensity = () => {
  const [intImage, setIntImage] = useState<ImageSourcePropType>(IntZero)
  const [counter, setCounter] = useState(0);
  const value= useStore((state)=>state.states.stateIL);
  const {sendMessage}= useWebSocket();

  useEffect(()=>{
    let number= parseInt(value[3]);
    console.log(value, number);
    
    switch (number) {
      case 1:
        setIntImage(IntZero)
        break;
      case 2:
        setIntImage(IntOne)
        break;
      case 3:
        setIntImage(IntTwo)
        break;
      case 4:
        setIntImage(IntThree)
        break;
      case 5:
        setIntImage(IntFour)
        break;
      case 6:
        setIntImage(IntFive)
        break;
      case 7:
        setIntImage(IntSix)
        break;
      case 8:
        setIntImage(IntSeven)
        break;
      case 9:
        setIntImage(IntEight)
        break;
      case NaN:
        setIntImage(IntNine)
        break;
      default:
        setIntImage(IntNine)
        break;
    }
  },[value]);

  const setimage = (imageNumber: number) => {

    switch (imageNumber) {
      case 0:
        sendMessage('@I01#L')
        setIntImage(IntZero)
        break;
      case 1:
        sendMessage('@I02#L')
        setIntImage(IntOne)
        break;
      case 2:
        sendMessage('@I03#L')
        setIntImage(IntTwo)
        break;
      case 3:
        sendMessage('@I04#L')
        setIntImage(IntThree)
        break;
      case 4:
        sendMessage('@I05#L')
        setIntImage(IntFour)
        break;
      case 5:
        sendMessage('@I06#L')
        setIntImage(IntFive)
        break;
      case 6:
        sendMessage('@I07#L')
        setIntImage(IntSix)
        break;
      case 7:
        sendMessage('@I08#L')
        setIntImage(IntSeven)
        break;
      case 8:
        sendMessage('@I09#L')
        setIntImage(IntEight)
        break;
      case 9:
        sendMessage('@I0:#L')
        setIntImage(IntNine)
        break;
      default:
        setIntImage(IntZero)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.intImageContainer}>
        <IntensityImage imageUrl={intImage} />
      </View>
      <Text style={styles.heading}>INTENSITY</Text>
      <View style={styles.diceContainer}>
        <Pressable>
          <Text
            style={styles.rollDiceBtnText}
            onPress={() => {
              if (counter > 0) {
                const newCounter = counter - 1; // Calculate the new counter
                setCounter(newCounter);
                setimage(newCounter); // Use the new counter value
              }
            }}
          >
            ⬅️
          </Text>
        </Pressable>
        <Pressable>
          <Text
            style={styles.rollDiceBtnText}
            onPress={() => {
              if (counter < 9) {
                const newCounter = counter + 1; // Calculate the new counter
                setCounter(newCounter);
                setimage(newCounter); // Use the new counter value
              }
            }}
          >
            ➡️
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Intensity

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:2,
    height:'100%'
  },
  intImageContainer: {
    // height: '60%',
    // width: '60%',
    // borderWidth:2
  },
  intImage: {
    height: hp('20%'),
    width: wp('16%'),
    // borderWidth:2
  },
  heading: {
    fontWeight: 'bold',
    fontSize: hp('3.3%'),
    fontStyle: 'italic',
  },
  diceContainer: {
    flexDirection: 'row'
  },
  rollDiceBtnText: {
    paddingHorizontal: 25,
    borderRadius: 8,
    borderColor: 'black',
    fontSize: hp('6%'),
    color: 'black',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
})