import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import redModeOn from '../../../assets/updatedIcons/redModeOn.png'
import redModeOff from '../../../assets/updatedIcons/redModeOff.png'

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

import { moderateScale } from 'react-native-size-matters'
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

type RedInputType = {
  value: string;
  sendMessage: any;
  code: string;
  context: {
    color: number; // or the type you expect
    setColor: (color: number) => void;
    enable: string;
    setEnable: (enabled: string) => void;
  }
}

const RedIntensity = ({ value, sendMessage, code, context }: RedInputType) => {
  const [intImage, setIntImage] = useState<ImageSourcePropType>(IntZero)
  const { color, setColor, enable, setEnable } = context;
  const setState = useStore((state) => state.setState);
  const component = 'R';
  const dome = code == 'R0'? 'R': 'L';
  const key = `state${component + dome}`;

  useEffect(() => {
    setimage(color)
  }, [])
  useEffect(() => {
    if (value.length > 0) {
      if (value === `@R_0#T${code}`) {
        setEnable(`@R_0#T${code}`);
        setIntImage(IntOne)
        setColor(0)
      }
      else if (value === `@R_1#T${code}`) {
        setEnable(`@R_1#T${code}`);
        setIntImage(IntOne)
        setColor(0)
      }
      else {
        let number = parseInt(value[3]);

        switch (number) {
          case 1:
            setIntImage(IntZero)
            setColor(0);
            break;
          case 2:
            setIntImage(IntOne)
            setColor(1);
            break;
          case 3:
            setIntImage(IntTwo)
            setColor(2);
            break;
          case 4:
            setIntImage(IntThree)
            setColor(3);
            break;
          case 5:
            setIntImage(IntFour)
            setColor(4);
            break;
          case 6:
            setIntImage(IntFive)
            setColor(5);
            break;
          case 7:
            setIntImage(IntSix)
            setColor(6);
            break;
          case 8:
            setIntImage(IntSeven)
            setColor(7);
            break;
          case 9:
            setIntImage(IntEight)
            setColor(8);
            break;
          default:
            setIntImage(IntNine)
            setColor(9)
            break;
        }
      }
    }
  }, [value]);

  const handleButton = () => {
    if (enable == `@R_0#T${code}`) {
      setEnable(`@R_1#T${code}`);
      sendMessage(`@R_1#T${code}`)
      setState(key, `@R01#T${code}`);
    }
    else {
      setEnable(`@R_0#T${code}`)
      sendMessage(`@R_0#T${code}`);
      setState(key, `@R01#T${code}`);
    }
  }

  const setimage = (imageNumber: number) => {

    switch (imageNumber) {
      case 0:
        sendMessage(`@R01#T${code}`)
        setIntImage(IntZero)
        setState(key, `@R01#T${code}`);
        break;
      case 1:
        sendMessage(`@R02#T${code}`)
        setIntImage(IntOne)
        setState(key, `@R02#T${code}`);
        break;
      case 2:
        sendMessage(`@R03#T${code}`)
        setIntImage(IntTwo)
        setState(key, `@R03#T${code}`);
        break;
      case 3:
        sendMessage(`@R04#T${code}`)
        setIntImage(IntThree)
        setState(key, `@R04#T${code}`);
        break;
      case 4:
        sendMessage(`@R05#T${code}`)
        setIntImage(IntFour)
        setState(key, `@R05#T${code}`);
        break;
      case 5:
        sendMessage(`@R06#T${code}`)
        setIntImage(IntFive)
        setState(key, `@R06#T${code}`);
        break;
      case 6:
        sendMessage(`@R07#T${code}`)
        setIntImage(IntSix)
        setState(key, `@R07#T${code}`);
        break;
      case 7:
        sendMessage(`@R08#T${code}`)
        setIntImage(IntSeven)
        setState(key, `@R08#T${code}`);
        break;
      case 8:
        sendMessage(`@R09#T${code}`)
        setIntImage(IntEight)
        setState(key, `@R09#T${code}`);
        break;
      case 9:
        sendMessage(`@R0:#T${code}`)
        setIntImage(IntNine)
        setState(key, `@R0:#T${code}`);
        break;
      default:
        setIntImage(IntZero)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {
          enable == `@R_1#T${code}` ?
            <View style={styles.onImgContainer}>
              <Image source={redModeOn} style={styles.boostOnImg} resizeMode='contain' />
            </View>
            :
            <View style={styles.offImgContainer}>
              <Image source={redModeOff} style={styles.boostOffImg} resizeMode='contain' />
            </View>
        }
        <Text

          style={styles.heading}
        >RED MODE</Text>
        <TouchableOpacity
          onPress={handleButton}
        >
          {
            enable == `@R_1#T${code}` ?
              <Text style={styles.offBtnTxt}>
                OFF
              </Text>
              :
              <Text style={styles.onBtnTxt}>
                ON
              </Text>
          }
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>

        <View style={styles.intImageContainer}>
          <IntensityImage imageUrl={intImage} />
        </View>
        <Text style={styles.heading}>INTENSITY</Text>
        <View style={styles.diceContainer}>
          <TouchableOpacity
            disabled={enable == `@R_1#T${code}` ? false : true}
            onPress={() => {
              if (color > 0) {
                const newCounter = color - 1; // Calculate the new counter
                setColor(newCounter);
                setimage(newCounter); // Use the new counter value
              }
            }}
          >
            <Text
              style={styles.rollDiceBtnText}
            >
              ⬅️
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={enable == `@R_1#T${code}` ? false : true}
            onPress={() => {
              if (color < 9) {
                const newCounter = color + 1; // Calculate the new counter
                setColor(newCounter);
                setimage(newCounter); // Use the new counter value
              }
            }}
          >
            <Text
              style={styles.rollDiceBtnText}
            >
              ➡️
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RedIntensity

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%'
  },
  container2: {
    flexDirection: 'column',
    width: wp('22%'),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  container3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: wp('22%'),
  },
  intImageContainer: {},
  intImage: {
    height: hp('21%'),
    width: wp('11.6%'),
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
  },
  onImgContainer: {},
  boostOnImg: {
    height: hp('21%'),
    width: wp('11.6%'),
    aspectRatio: 3
  },

  offImgContainer: {},
  boostOffImg: {
    height: hp('21%'),
    width: wp('11.6%'),
    aspectRatio: 3
  },
  switchContainer: {
  },
  switchBtn: {
    margin: 18
  },
  onBtnTxt: {
    borderRadius: 7,
    backgroundColor: '#95d151',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(8),
    color: 'white'
  },
  offBtnTxt: {
    borderRadius: 7,
    backgroundColor: 'red',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(8),
    color: 'white'
  }
})