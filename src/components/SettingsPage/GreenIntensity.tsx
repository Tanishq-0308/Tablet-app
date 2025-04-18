import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import greenModeOn from '../../../assets/updatedIcons/greenModeOn.png'
import greenModeOff from '../../../assets/updatedIcons/greenModeOff.png'

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

type GreenInputType = {
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


const GreenIntensity = ({ value, sendMessage, code, context }: GreenInputType) => {
  const [intImage, setIntImage] = useState<ImageSourcePropType>(IntZero)
  const { color, setColor, enable, setEnable } = context;
  const setState = useStore((state) => state.setState);
  const component = 'G';
  const dome = code == 'R1' ? 'R' : 'L';
  const key = `state${component + dome}`;

  useEffect(() => {
    setimage(color);

  }, [])

  useEffect(() => {
    setEnable(enable);
  }, [enable])
  useEffect(() => {
    if (value.length > 0) {

      if (value === `@G_0#T${code}`) {
        setEnable(`@G_0#T${code}`);
      }
      else if (value === `@G_1#T${code}`) {
        setEnable(`@G_1#T${code}`);
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
            setColor(9);
            break;
        }
      }
    }
  }, [value]);

  const handleButton = () => {
    if (enable == `@G_0#T${code}`) {
      setEnable(`@G_1#T${code}`);
      sendMessage(`@G_1#T${code}`)
      setState(key, `@G_1#T${code}`);

    }
    else {
      setEnable(`@G_0#T${code}`)
      sendMessage(`@G_0#T${code}`);
      setState(key, `@G_0#T${code}`);

    }
  }

  const setimage = (imageNumber: number) => {

    switch (imageNumber) {
      case 0:
        sendMessage(`@G01#T${code}`)
        setIntImage(IntZero)
        setState(key, `@G01#T${code}`);
        break;
      case 1:
        sendMessage(`@G02#T${code}`)
        setIntImage(IntOne)
        setState(key, `@G02#T${code}`);
        break;
      case 2:
        sendMessage(`@G03#T${code}`)
        setIntImage(IntTwo)
        setState(key, `@G03#T${code}`);
        break;
      case 3:
        sendMessage(`@G04#T${code}`)
        setIntImage(IntThree)
        setState(key, `@G04#T${code}`);
        break;
      case 4:
        sendMessage(`@G05#T${code}`)
        setIntImage(IntFour)
        setState(key, `@G05#T${code}`);
        break;
      case 5:
        sendMessage(`@G06#T${code}`)
        setIntImage(IntFive)
        setState(key, `@G06#T${code}`);
        break;
      case 6:
        sendMessage(`@G07#T${code}`)
        setIntImage(IntSix)
        setState(key, `@G07#T${code}`);
        break;
      case 7:
        sendMessage(`@G08#T${code}`)
        setIntImage(IntSeven)
        setState(key, `@G08#T${code}`);
        break;
      case 8:
        sendMessage(`@G09#T${code}`)
        setIntImage(IntEight)
        setState(key, `@G09#T${code}`);
        break;
      case 9:
        sendMessage(`@G0:#T${code}`)
        setIntImage(IntNine)
        setState(key, `@G0:#T${code}`);
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
          enable == `@G_1#T${code}` ?
            <View style={styles.onImgContainer}>
              <Image source={greenModeOn} style={styles.boostOnImg} resizeMode='contain' />
            </View>
            :
            <View style={styles.offImgContainer}>
              <Image source={greenModeOff} style={styles.boostOffImg} resizeMode='contain' />
            </View>
        }
        <Text

          style={styles.heading}
        >GREEN MODE</Text>
        <TouchableOpacity
          onPress={handleButton}
        >
          {
            enable == `@G_1#T${code}` ?
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
            disabled={enable ? false : true}
            onPress={() => {
              if (color > 0) {
                const newgreenValue = color - 1; // Calculate the new color
                setColor(newgreenValue);
                setimage(newgreenValue); // Use the new color value
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
            disabled={enable ? false : true}
            onPress={() => {
              if (color < 9) {
                const newgreenValue = color + 1; // Calculate the new color
                setColor(newgreenValue);
                setimage(newgreenValue); // Use the new color value
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

export default GreenIntensity

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