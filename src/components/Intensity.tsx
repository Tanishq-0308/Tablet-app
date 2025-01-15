import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'


import IntZero from '../../assets/0.png'
import IntOne from '../../assets/1.png'
import IntTwo from '../../assets/2.png'
import IntThree from '../../assets/3.png'
import IntFour from '../../assets/4.png'
import IntFive from '../../assets/5.png'
import IntSix from '../../assets/6.png'
import IntSeven from '../../assets/7.png'
import IntEight from '../../assets/8.png'
import IntNine from '../../assets/9.png'

type ImageProps=PropsWithChildren<{
    imageUrl:ImageSourcePropType
}>


function IntensityImage({imageUrl}: ImageProps): React.JSX.Element {

  return (
    <View>
      <Image style={styles.intImage} source={imageUrl}/>
    </View>
  );
}

const Intensity = () => {
      const [intImage,setIntImage]= useState<ImageSourcePropType>(IntZero)
      const [counter,setCounter]= useState(0);

      const setimage=(value:number)=>{
    
        switch(value){
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
  return (
    <View style={styles.container}>
         <IntensityImage imageUrl={intImage}/>
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
    intImage:{
        height:170,
        width:210
    },
    heading:{
      fontWeight:'bold',
      fontSize:22,
      fontStyle:'italic'
    },
    container:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    diceContainer:{
      flexDirection:'row'
    },
    rollDiceBtnText:{
      paddingHorizontal:25,
      borderRadius:8,
      borderColor:'black',
      fontSize:43,
      color:'black',
      fontWeight:'700',
      textTransform:'uppercase'
    }
})