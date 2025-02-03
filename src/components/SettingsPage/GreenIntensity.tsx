import { Image, ImageSourcePropType, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import greenModeOn from '../../../assets/greenModeOn.png'
import greenModeOff from '../../../assets/greenModeOff.png'

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
import { BtnEnableContext } from '../../Context/EnableContext';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters'
import { useWebSocket } from '../../Context/webSocketContext'
import useStore from '../../Store/stateStore'

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

const GreenIntensity = () => {
  const [intImage, setIntImage] = useState<ImageSourcePropType>(IntZero)
  const { greenValue, setGreenValue, greenEnabledValue, setGreenEnabledValue } = useContext(BtnEnableContext)
  const value= useStore((state)=>state.states.stateGL);
  const {sendMessage}= useWebSocket();

  useEffect(() => {
    setimage(greenValue);
  }, [greenValue])

  useEffect(()=>{
    if(value.length>0){
      if(value === '@G_0#TL'){
        setGreenEnabledValue(false);
      }
      else if( value === '@G_1#TL'){
        setGreenEnabledValue(true);
      }
      else {
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
      }
    }
  },[value]);

  const handleButton=()=>{
    if(greenEnabledValue){
      setGreenEnabledValue(false);
        sendMessage('@G_0#TL')
    }
    else{
      setGreenEnabledValue(true)
        sendMessage('@G_1#TL');
    }
}

  const setimage = (imageNumber: number) => {

    switch (imageNumber) {
      case 0:
        sendMessage('@G01#TL')
        setIntImage(IntZero)
        break;
      case 1:
        sendMessage('@G02#TL')
        setIntImage(IntOne)
        break;
      case 2:
        sendMessage('@G03#TL')
        setIntImage(IntTwo)
        break;
      case 3:
        sendMessage('@G04#TL')
        setIntImage(IntThree)
        break;
      case 4:
        sendMessage('@G05#TL')
        setIntImage(IntFour)
        break;
      case 5:
        sendMessage('@G06#TL')
        setIntImage(IntFive)
        break;
      case 6:
        sendMessage('@G07#TL')
        setIntImage(IntSix)
        break;
      case 7:
        sendMessage('@G08#TL')
        setIntImage(IntSeven)
        break;
      case 8:
        sendMessage('@G09#TL')
        setIntImage(IntEight)
        break;
      case 9:
        sendMessage('@G0:#TL')
        setIntImage(IntNine)
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
          greenEnabledValue ?
            <View style={styles.onImgContainer}>
              <Image source={greenModeOn} style={styles.boostOnImg} />
            </View>
            :
            <View style={styles.offImgContainer}>
              <Image source={greenModeOff} style={styles.boostOffImg} />
            </View>
        }
        <Text

          style={styles.heading}
        >GREEN MODE</Text>
        <Pressable
          onPress={handleButton}
        >
          {
            greenEnabledValue ?
              <Text style={styles.offBtnTxt}>
                OFF
              </Text>
              :
              <Text style={styles.onBtnTxt}>
                ON
              </Text>
          }
        </Pressable>
      </View>
      <View style={styles.container3}>

        <View style={styles.intImageContainer}>
          <IntensityImage imageUrl={intImage} />
        </View>
        <Text style={styles.heading}>INTENSITY</Text>
        <View style={styles.diceContainer}>
          <Pressable
            disabled={greenEnabledValue ? false : true}
            onPress={() => {
              if (greenValue > 0) {
                const newgreenValue = greenValue - 1; // Calculate the new greenValue
                setGreenValue(newgreenValue);
                setimage(newgreenValue); // Use the new greenValue value
              }
            }}
          >
            <Text
              style={styles.rollDiceBtnText}
            >
              ⬅️
            </Text>
          </Pressable>
          <Pressable
            disabled={greenEnabledValue ? false : true}
            onPress={() => {
              if (greenValue < 9) {
                const newgreenValue = greenValue + 1; // Calculate the new greenValue
                setGreenValue(newgreenValue);
                setimage(newgreenValue); // Use the new greenValue value
              }
            }}
          >
            <Text
              style={styles.rollDiceBtnText}
            >
              ➡️
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default GreenIntensity

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:'100%'
  },
  container2: {
    flexDirection: 'column',
    // height: '100%',
    width:wp('22%'),
    alignItems: 'center',
    justifyContent: 'center',
    gap:5,
    // borderWidth:2
  },
  container3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width:wp('22%'),
  },
  intImageContainer: {},
  intImage: {
    height: hp('19%'),
    width: wp('16%'),
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
    height: hp('19%'),
    width: wp('11.6%'),
  },

  offImgContainer: {},
  boostOffImg: {
    height: hp('19%'),
    width: wp('11.6%'),
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