import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, } from 'react'
import overHdSensorOn from '../../../assets/updatedIcons/overheadSensorOn.png'
import overHdSensorOff from '../../../assets/updatedIcons/overheadSensorOff.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import useStore from '../../Store/stateStore';
import { enableFreeze } from 'react-native-screens';


type OverHeadSensorType = {
    value: string;
    sendMessage: any;
    code: string;
    context: {
        sensor: string,
        setSensor: (sensor: string) => void
    }
}


const OverheadEnable = ({ value, sendMessage, code, context }: OverHeadSensorType) => {
    const { sensor, setSensor } = context;
    const setState = useStore((state) => state.setState);
    const component = 'O';
    const dome = code == 'R1'? 'R': 'L';
    const key = `state${component + dome}`;

    useEffect(() => {
        if (value.length > 0) {
            // const shouldEnable= value === `@O_1#T${code}`;
            // const shouldDisable = value === `@O_0#T${code}`;
            // if(shouldEnable && sensor == `@O_0#T${code}`){
            //     setSensor(`@O_1#T${code}`)
            //     setState(key,`@O_1#T${code}`)
            // }else if(shouldDisable && sensor == `@O_1#T${code}`){
            //     setSensor(`@O_0#T${code}`)
            //     setState(key, `@O_0#T${code}`);
            // }
            if (value === `@O_1#T${code}`) {
                setSensor(`@O_1#T${code}`)

            } else if (value === `@O_0#T${code}`) {
                setSensor(`@O_0#T${code}`)
            }
        }
    }, [value])

    const handleButton = () => {
        if (sensor == `@O_0#T${code}`) {
            setSensor(`@O_1#T${code}`);
            sendMessage(`@O_1#T${code}`)
            setState(key,`@O_1#T${code}`);
        }
        else {
            setSensor(`@O_0#T${code}`)
            sendMessage(`@O_0#T${code}`);
            setState(key,`@O_0#T${code}`);
        }
    }
    return (
        <View style={styles.container2}>
            {
                sensor == `@O_0#T${code}` ?
                    <View style={styles.offImgContainer}>
                        <Image source={overHdSensorOff} style={styles.boostOffImg} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} resizeMode='contain' />
                    </View>
            }
            <Text
                style={styles.heading}
            >OVERHEAD SENSOR</Text>
            <TouchableOpacity
                onPress={handleButton}
            >
                {
                    sensor === `@O_0#T${code}` ?
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

export default OverheadEnable

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