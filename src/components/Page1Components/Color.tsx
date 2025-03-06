import { Image, ImageSourcePropType, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colorImg from '../../../assets/updatedIcons/color.png'
import type { PropsWithChildren } from 'react'

import colorA from '../../../assets/24.png';
import colorB from '../../../assets/25.png';
import colorC from '../../../assets/26.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type colorImageProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

function ColorImage({ imageUrl }: colorImageProps): React.JSX.Element {
    return (
        <Image source={imageUrl} style={styles.colImage} />
    )
}

type ColorInput = {
    value: string
    sendMessage: any;
    code: string
}


const Color = ({ value, sendMessage, code }: ColorInput) => {
    const [colImage, setColImage] = useState<ImageSourcePropType>(colorB);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let number = (value[2]);
        switch (number) {
            case '-':
                setimage(0)
                setCounter(0);
                break;
            case '0':
                setimage(1)
                setCounter(1);
                break;
            case '+':
                setimage(2)
                setCounter(2);
                break;
            default:
                break;
        }
    }, [value]);

    const setimage = (imageNumber: number) => {
        switch (imageNumber) {
            case 0:
                setColImage(colorA)
                sendMessage(`@C-5#T${code}`)
                break;
            case 1:
                setColImage(colorB)
                sendMessage(`@C05#T${code}`)
                break;
            case 2:
                setColImage(colorC)
                sendMessage(`@C+5#T${code}`)
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
                <Image source={colorImg} style={styles.colorImage} resizeMode='contain' />
            </View>
            <View style={styles.colImageContainer}>
                <ColorImage imageUrl={colImage} />
            </View>
            <Text style={styles.title}>COLOR</Text>
            <View style={styles.counterBtn}>
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
                            if (counter < 2) {
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

export default Color

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    intImageContainer: {},
    colorImage: {
        height: hp('12%'),
        width: wp('22%'),
        aspectRatio: 3,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic',
    },
    headTxt: {
        fontSize: hp('3%'),
        fontWeight: 'bold'
    },
    counterBtn: {
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
    colImageContainer: {},
    colImage: {
        height: hp('4%'),
        width: wp('19%')
    }

})