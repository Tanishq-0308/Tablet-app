import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import focusOn from '../../../assets/focus.png'
import focusOff from '../../../assets/focusOff.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Focus = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {
                    isEnabled ?
                        <View style={styles.offImgContainer}>
                            <Image source={focusOff} style={styles.boostOffImg} />
                        </View>
                        :
                        <View style={styles.onImgContainer}>
                            <Image source={focusOn} style={styles.boostOnImg} />
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
                        style={[styles.switchBtn, { transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }]}
                    />
                </View>
            </View>
            {
                isEnabled && (
                    <View style={styles.container2}>
                        <Pressable style={styles.smallBtn}>
                            <Text style={styles.onBtnTxt}>
                                S
                            </Text>
                        </Pressable>
                        <Pressable style={styles.mediumBtn}>
                            <Text style={styles.onBtnTxt}>
                                M
                            </Text>
                        </Pressable>
                        <Pressable style={styles.largeBtn}>
                            <Text style={styles.onBtnTxt}>
                                L
                            </Text>
                        </Pressable>
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
        fontSize: hp('3.3%'),
        fontStyle: 'italic',
    },
    onImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    boostOnImg: {
        height: hp('19%'),
        width: wp('13%'),
    },

    offImgContainer: {
        // height: '60%',
        // width: '54%',
    },
    boostOffImg: {
        height: hp('19%'),
        width: wp('13%'),
    },
    switchContainer: {
    },
    switchBtn: {
        margin: 18
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
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
    },
})