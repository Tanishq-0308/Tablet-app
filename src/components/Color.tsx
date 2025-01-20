import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colorImg from '../../assets/Color.png'
import type { PropsWithChildren } from 'react'

import colorA from '../../assets/24.png';
import colorB from '../../assets/25.png';
import colorC from '../../assets/26.png';

type colorImageProps=PropsWithChildren<{
    imageUrl:ImageSourcePropType
}>

function ColorImage({imageUrl}:colorImageProps): React.JSX.Element{
    return(
        <Image source={imageUrl} style={styles.colImage}/>
    )
}

const Color = () => {
    const [colImage, setColImage]= useState<ImageSourcePropType>(colorA);
    const [counter,setCounter]= useState(0);

    const setimage=(value:number)=>{    
        switch(value){
            case 0:
                setColImage(colorA)
              break;
            case 1:
                setColImage(colorB)
              break;
            case 2:
                setColImage(colorC)
              break;
            default:
                setColImage(colorA)
            break;
    }
}
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headTxt}>WW</Text>
                <Text style={styles.headTxt}>NW</Text>
                <Text style={styles.headTxt}>CW</Text>
            </View>
            <View style={styles.intImageContainer}>
                <Image source={colorImg} style={styles.colorImage} />
            </View>
            <View style={styles.colImageContainer}>
                <ColorImage imageUrl={colImage}/>
            </View>
             <Text style={styles.title}>COLOR</Text>
            <View style={styles.counterBtn}>
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
                            if (counter < 2) {
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

export default Color

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // gap:12,
        height:'100%',
        width:'100%'
    },
    intImageContainer:{
        height:'35%',
        width:'70%',
        // borderWidth:2,
      },
      colorImage: {
          height: '100%',
          width: '100%',
      },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap:40
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        fontStyle:'italic',
    },
    headTxt: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    counterBtn: {
        flexDirection:'row'
    },
    rollDiceBtnText:{
        paddingHorizontal:25,
        borderRadius:8,
        borderColor:'black',
        fontSize:48,
        color:'black',
        fontWeight:'700',
        textTransform:'uppercase'
      },
      colImageContainer:{
        height:'10%',
        width:'65%'
      },
    colImage:{
        height:'100%',
        width:'100%'
    }

})