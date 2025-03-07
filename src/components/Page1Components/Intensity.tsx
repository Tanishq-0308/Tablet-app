import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useStore from '../../Store/stateStore'
type ImageProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


function IntensityImage({ imageUrl }: ImageProps): React.JSX.Element {

  return (
    <View>
      <Image style={styles.intImage} source={imageUrl} resizeMode='contain' />
    </View>
  );
}

type IntensityInput = {
  value: string
  sendMessage: any;
  code: string
}

const Intensity = ({ value, sendMessage, code }: IntensityInput) => {
  const [intImage, setIntImage] = useState<ImageSourcePropType>(IntZero)
  const [counter, setCounter] = useState(0);
  const setState = useStore((state) => state.setState);
  const component = 'I';
  const dome = code == 'R1' ? 'R' : 'L';
  const key = `state${component + dome}`;

  useEffect(() => {
    let number = parseInt(value[3]);

    switch (number) {
      case 1:
        setIntImage(IntZero)
        setCounter(0);
        break;
      case 2:
        setIntImage(IntOne)
        setCounter(1);
        break;
      case 3:
        setIntImage(IntTwo)
        setCounter(2);
        break;
      case 4:
        setIntImage(IntThree)
        setCounter(3);
        break;
      case 5:
        setIntImage(IntFour)
        setCounter(4);
        break;
      case 6:
        setIntImage(IntFive)
        setCounter(5);
        break;
      case 7:
        setIntImage(IntSix)
        setCounter(6);
        break;
      case 8:
        setIntImage(IntSeven)
        setCounter(7);
        break;
      case 9:
        setIntImage(IntEight)
        setCounter(8);
        break;
        default:
          setIntImage(IntNine)
          setCounter(9);
        break;
    }
  }, [value]);

  const setimage = (imageNumber: number) => {

    switch (imageNumber) {
      case 0:
        sendMessage(`@I01#T${code}`)
        setIntImage(IntZero)
        setState(key,`@I01#T${code}`)
        break;
      case 1:
        sendMessage(`@I02#T${code}`)
        setIntImage(IntOne)
        setState(key,`@I02#T${code}`)
        break;
      case 2:
        sendMessage(`@I03#T${code}`)
        setIntImage(IntTwo)
        setState(key,`@I03#T${code}`)
        break;
      case 3:
        sendMessage(`@I04#T${code}`)
        setIntImage(IntThree)
        setState(key,`@I04#T${code}`)
        break;
      case 4:
        sendMessage(`@I05#T${code}`)
        setIntImage(IntFour)
        setState(key,`@I05#T${code}`)
        break;
      case 5:
        sendMessage(`@I06#T${code}`)
        setIntImage(IntFive)
        setState(key,`@I06#T${code}`)
        break;
      case 6:
        sendMessage(`@I07#T${code}`)
        setIntImage(IntSix)
        setState(key,`@I07#T${code}`)
        break;
      case 7:
        sendMessage(`@I08#T${code}`)
        setIntImage(IntSeven)
        setState(key,`@I08#T${code}`)
        break;
      case 8:
        sendMessage(`@I09#T${code}`)
        setIntImage(IntEight)
        setState(key,`@I09#T${code}`)
        break;
      case 9:
        sendMessage(`@I0:#T${code}`)
        setIntImage(IntNine)
        setState(key,`@I0:#T${code}`)
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
        <TouchableOpacity>
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
        </TouchableOpacity>
        <TouchableOpacity>
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
        </TouchableOpacity>
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
    height: '100%'
  },
  intImageContainer: {
  },
  intImage: {
    height: hp('20%'),
    width: wp('16%'),
    aspectRatio: 3
  },
  heading: {
    fontWeight: 'bold',
    fontSize: hp('3%'),
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