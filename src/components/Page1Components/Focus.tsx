import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import focusOn from '../../../assets/updatedIcons/focusOff.png'
import focusOff from '../../../assets/updatedIcons/focusOn.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useStore from '../../Store/stateStore';

type FocusInputType = {
    value: string
    sendMessage: any;
    code: string
}
const Focus = ({ value, sendMessage, code }: FocusInputType) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const setState= useStore((state)=>state.setState);
    const component = 'F';
    const dome = code == 'R1' ? 'R' : 'L';
    const key = `state${component + dome}`;

    const toggleSwitch = () => {
        if (isEnabled) {
            setIsEnabled(false);
            sendMessage(`@F_0#T${code}`)
            setState(key,`@F_0#T${code}`);
        } else {
            setIsEnabled(true);
            sendMessage(`@F_1#T${code}`)
            setState(key,`@F_1#T${code}`);
        }
    };

    useEffect(() => {
        if (value.length > 0) {
            if (value === `@F_1#T${code}`) {
                setIsEnabled(true)
            } else if (value === `@F_0#T${code}`) {
                setIsEnabled(false)
            }
        }
    }, [value])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {
                    isEnabled ?
                        <View style={styles.offImgContainer}>
                            <Image source={focusOff} style={styles.boostOffImg} resizeMode='contain' />
                        </View>
                        :
                        <View style={styles.onImgContainer}>
                            <Image source={focusOn} style={styles.boostOnImg} resizeMode='contain' />
                        </View>
                }
                <Text

                    style={styles.heading}
                >FOCUS</Text>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={[styles.switchBtn, { transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }]}
                    />
                </View>
            </View>
            {
                isEnabled && (
                    <View style={styles.container2}>
                        <TouchableOpacity style={styles.smallBtn} onPress={() => sendMessage(`@F01#T${code}`)}>
                            <Text style={styles.onBtnTxt}>
                                S
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mediumBtn} onPress={() => sendMessage(`@F02#T${code}`)}>
                            <Text style={styles.onBtnTxt}>
                                M
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.largeBtn} onPress={() => sendMessage(`@F03#T${code}`)}>
                            <Text style={styles.onBtnTxt}>
                                L
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default Focus

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: '100%',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        height: '100%',
        width: wp('25%'),
    },
    container2: {
        flexDirection: 'column',
        width: wp('25%'),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {},
    boostOnImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio: 1
    },

    offImgContainer: {},
    boostOffImg: {
        height: hp('19%'),
        width: wp('13%'),
        aspectRatio: 1
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 5,
        padding: 6
    },
    smallBtn: {
        backgroundColor: '#95d151',
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingVertical: 5

    },
    mediumBtn: {
        backgroundColor: '#f8a5c2',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 5

    },
    largeBtn: {
        backgroundColor: '#778beb',
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingVertical: 5

    },
    onBtnTxt: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
    },
})