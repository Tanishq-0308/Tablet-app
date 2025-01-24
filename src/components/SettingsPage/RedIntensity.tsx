import { Image, ImageSourcePropType, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'
import Snackbar from 'react-native-snackbar';
import redModeOn from '../../../assets/redmodeOn.png'
import redModeOff from '../../../assets/redModeOff.png'

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

const RedIntensity = () => {
    const [intImage, setIntImage] = useState<ImageSourcePropType>(IntZero)
    const [counter, setCounter] = useState(0);
  
    const setimage = (value: number) => {
  
      switch (value) {
        case 0:
          setIntImage(IntZero)
          break;
        case 1:
          setIntImage(IntOne)
          break;
        case 2:
          setIntImage(IntTwo)
          break;
        case 3:
          setIntImage(IntThree)
          break;
        case 4:
          setIntImage(IntFour)
          break;
        case 5:
          setIntImage(IntFive)
          break;
        case 6:
          setIntImage(IntSix)
          break;
        case 7:
          setIntImage(IntSeven)
          break;
        case 8:
          setIntImage(IntEight)
          break;
        case 9:
          setIntImage(IntNine)
          break;
        default:
          setIntImage(IntZero)
          break;
      }
    }
        const [power, setPower] = useState(false)
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
    {
                power ?
                    <View style={styles.onImgContainer}>
                        <Image source={redModeOn} style={styles.boostOnImg} />
                    </View>
                    :
                    <View style={styles.offImgContainer}>
                        <Image source={redModeOff} style={styles.boostOffImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >RED MODE</Text>
                        <Pressable
                            onPress={() => setPower(!power)}
                        >
                            {
                                power ?
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
                        disabled={power ? false : true}
                        onPress={() => {
                          if (counter > 0) {
                            const newCounter = counter - 1; // Calculate the new counter
                            setCounter(newCounter);
                            setimage(newCounter); // Use the new counter value
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
                        disabled={power ? false : true}
                        onPress={() => {
                          if (counter < 9) {
                            const newCounter = counter + 1; // Calculate the new counter
                            setCounter(newCounter);
                            setimage(newCounter); // Use the new counter value
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

export default RedIntensity

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    container2: {
        flexDirection: 'column',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '50%',
    },
      intImageContainer: {
        height: '60%',
        width: '69%',
      },
      intImage: {
        height: '100%',
        width: '100%',
      },
      heading: {
        fontWeight: 'bold',
        fontSize: 24,
        fontStyle: 'italic',
      },
      diceContainer: {
        flexDirection: 'row'
      },
      rollDiceBtnText: {
        paddingHorizontal: 25,
        borderRadius: 8,
        borderColor: 'black',
        fontSize: 42,
        color: 'black',
        fontWeight: '700',
        textTransform: 'uppercase'
      },
    onImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOnImg: {
        height: '100%',
        width: '100%',
    },

    offImgContainer: {
        height: '60%',
        width: '54%',
    },
    boostOffImg: {
        height: '100%',
        width: '100%',
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    }
})