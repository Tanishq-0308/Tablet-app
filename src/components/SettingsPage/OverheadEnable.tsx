import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, } from 'react'
import overHdSensorOn from '../../../assets/overheadSensorOn.png'
import overHdSensorOff from '../../../assets/overheadSensorOff.png'
import { BtnEnableContext } from '../../Context/EnableContext';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OverheadEnable = () => {
    const { headSensor, setHeadSensor } = useContext(BtnEnableContext);
    return (
        <View style={styles.container2}>
            {
                !headSensor ?
                    <View style={styles.offImgContainer}>
                        <Image source={overHdSensorOff} style={styles.boostOffImg} />
                    </View>
                    :
                    <View style={styles.onImgContainer}>
                        <Image source={overHdSensorOn} style={styles.boostOnImg} />
                    </View>
            }
            <Text

                style={styles.heading}
            >OVERHEAD SENSOR</Text>
            <Pressable
                onPress={() => setHeadSensor(!headSensor)}
            >
                {
                    headSensor ?
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
    )
}

export default OverheadEnable

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        height: '100%',
        width:wp('22%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
        borderWidth:2
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3.3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('19%'),
        width: wp('11%'),
    },
    onBtnTxt: {
        borderRadius: 7,
        backgroundColor: '#95d151',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offBtnTxt: {
        borderRadius: 7,
        backgroundColor: 'red',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white'
    },
    offImgContainer: {},
    boostOffImg: {
        height: hp('19%'),
        width: wp('11%'),
    }
})