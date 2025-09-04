import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, } from 'react'
import PointerOn from '../../../assets/updatedIcons/FinalPointerUIOn.png'
import PointerOff from '../../../assets/updatedIcons/FinalPointerUIOff.png'
// import PointerOff from '../../../assets/Pointer_off.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import useStore from '../../Store/stateStore';


type PointerType = {
    value: string;
    sendMessage: any;
    code: string;
    context: {
        pointerValue: string,
        setPointerValue: (pointerValue: string) => void
    }
}


const PointerBtn = ({ value, sendMessage, code, context }: PointerType) => {
    const { pointerValue, setPointerValue } = context;
    const setState = useStore((state) => state.setState);
    const component = 'LA';
    const dome = code == 'R1'? 'R': 'L';
    const key = `state${component + dome}`;

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@LA1#T${code}`) {
                setPointerValue(`@LA1#T${code}`)

            } else if (value === `@LA0#T${code}`) {
                setPointerValue(`@LA0#T${code}`)
            }
        }
    }, [value])

    const handleButton = () => {
        if (pointerValue == `@LA0#T${code}`) {
            setPointerValue(`@LA1#T${code}`);
            sendMessage(`@LA1#T${code}`)
            setState(key,`@LA1#T${code}`);
        }
        else {
            setPointerValue(`@LA0#T${code}`)
            sendMessage(`@LA0#T${code}`);
            setState(key,`@LA0#T${code}`);
        }
    }
    return (
        <View style={styles.container2}>
            {
                pointerValue == `@LA0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={PointerOff} style={styles.boostOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={PointerOn} style={styles.boostOnImg} resizeMode='contain' />
                    </View>
            }
            <Text
                style={styles.heading}
            >POINTER</Text>
            <TouchableOpacity
                onPress={handleButton}
            >
                {
                    pointerValue === `@LA0#T${code}` ?
                        <Text style={styles.onBtnTxt}>
                            ON
                        </Text>
                        :
                        <Text style={styles.offBtnTxt}>
                            OFF
                        </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default PointerBtn

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width: wp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio: 2
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
    },
    offImgContainer: {},
    boostOffImg: {
        height: hp('21%'),
        width: wp('11.6%'),
        aspectRatio: 1
    }
})