import { Alert, Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParamList } from '../../App'
import BackButton from '../BackButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { useWebSocket } from '../../Context/webSocketContext'
import RNFS from 'react-native-fs';

type controller2Prop = {
    navigation: NativeStackNavigationProp<RootParamList>;
}

const Controller2 = ({ navigation }: controller2Prop) => {

    const [enterPassword, setEnterPassword] = useState('');
    const [storePassword, setStorePassword] = useState('');
    const [firstModal, setFirstModal] = useState(false);
    const { sendMessage } = useWebSocket();

    const readPasswordFromFile = async () => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/password.txt`;
            const password = await RNFS.readFile(filePath, 'utf8');
            const checkPass = password;
            setStorePassword(checkPass);
        } catch (error) {
            setFirstModal(false);
            navigation.goBack();
            // setNewModal(true);
        }
    }

    const handleCheckPassword = async () => {
        if (storePassword === enterPassword) {
            setFirstModal(false);
        } else {
            Alert.alert('Wrong password');
            setEnterPassword('');
        }
    }

    useEffect(() => {
        // setFirstModal(true);
        // readPasswordFromFile();
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={firstModal}
                onRequestClose={() => navigation.goBack()}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                    <View style={{ width: 350, padding: 20, backgroundColor: 'black', borderRadius: 10, flexDirection: 'column', gap: 10 }}>
                        <Icon name='lock' color='#fff' style={{ fontSize: hp('5.6%'), textAlign: 'center' }} />
                        {/* <Text style={{ marginBottom: 10, color: 'white', fontSize: hp('2.2%') }}>Enter to Login</Text> */}
                        <TextInput
                            secureTextEntry
                            onChangeText={setEnterPassword}
                            value={enterPassword}
                            placeholder="Enter your password"
                            style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, backgroundColor: 'white' }}
                        />
                        <Button title="Login" onPress={handleCheckPassword} />
                    </View>
                </View>
            </Modal>
            <View style={styles.container2}>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={{
                            elevation: 5,
                            borderRadius: 14
                        }}
                    >
                        <BackButton />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={styles.box1}>
                    <TouchableOpacity >
                        <Icon name='caret-up' style={[styles.upIcon, styles.icon]} onPress={() => sendMessage('$J_U#')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='caret-right' style={[styles.rightIcon, styles.icon]} onPress={() => sendMessage('$J_R#')} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name='caret-down' style={[styles.downIcon, styles.icon]} onPress={() => sendMessage('$J_D#')} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name='caret-left' style={[styles.leftIcon, styles.icon]} onPress={() => sendMessage('$J_L#')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity onPress={() => sendMessage('$J_S#')}>
                        <Icon name='circle' style={styles.roundIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Controller2

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: hp('85.5%'),
        width: wp('100%'),
    },
    container1: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10,
    },
    container2: {
        flexDirection: 'column',
        gap: 15,
    },
    blockOne: {
        flexDirection: 'row',
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 50
    },
    icon: {
        fontSize: wp('8%'),
        position: 'absolute',
        color: '#000'
    },
    upIcon: {
        top: moderateVerticalScale(-10),
        left: moderateScale(60)
    },
    rightIcon: {
        right: 10,
        top: moderateVerticalScale(48)
    },
    leftIcon: {
        left: 10,
        top: moderateVerticalScale(35)
    },
    downIcon: {
        top: moderateVerticalScale(100),
        left: moderateScale(60)
    },
    roundIcon: {
        color: '#ced6e0',
        fontSize: wp('10%'),
        borderRadius: 90,
        borderColor: '#fff',
        paddingLeft: moderateScale(6),
        paddingRight: moderateScale(6),
        backgroundColor: '#000'
    },
    box1: {
        gap: 10,
        width: wp('20%'),
        height: hp('34%'),
        borderRadius: 140,
        backgroundColor: '#ced6e0'
    },
    box2: {
        width: wp('20%'),
        height: hp('34%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 130,
        backgroundColor: '#ced6e0',
    }
})