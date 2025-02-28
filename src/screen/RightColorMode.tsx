import { Alert, Button, Image, Modal, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { RightBtnEnableContext } from '../Context/RightContext'


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButton from '../components/BackButton';
import GreenMode from '../components/SwitchModeComponents/GreenMode';
import RedMode from '../components/SwitchModeComponents/RedMode';
import OverHeadSensor from '../components/SwitchModeComponents/OverHeadSensor';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../App';
import CameraMode from '../components/SwitchModeComponents/CameraMode';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/FontAwesome'


type RightColorModeProps = NativeStackScreenProps<RootParamList, 'RightColorMode'>
const RightColorMode = ({ navigation }: RightColorModeProps) => {
    const { cameraEnabled, setCameraEnabled, greenEnabled, setGreenEnabled, redEnabled, setRedEnabled, headSensorEnabled, setHeadSensorEnabled } = useContext(RightBtnEnableContext)
    const rightGreenEnable = {
        enable: greenEnabled,
        setEnable: setGreenEnabled
    }

    const rightRedEnable = {
        enable: redEnabled,
        setEnable: setRedEnabled
    }

    const rightHeadEnable = {
        enable: headSensorEnabled,
        setEnable: setHeadSensorEnabled
    }

    const rightCameraEnable = {
        enable: cameraEnabled,
        setEnable: setCameraEnabled
    }

    const [enterPassword, setEnterPassword] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [storePassword, setStorePassword] = useState('');
    const [firstModal, setFirstModal] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setFirstModal(true);
        readPasswordFromFile();
    }, []);

    const savePasswordToFile = async (password: string) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/password.txt`;
            await RNFS.writeFile(filePath, password, 'utf8');
        } catch (error) {
            console.error('Error saving password to file: ', error);
        }
    }

    const readPasswordFromFile = async () => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/password.txt`;
            const password = await RNFS.readFile(filePath, 'utf8');
            const checkPass = password;
            setStorePassword(checkPass);
        } catch (error) {
            setFirstModal(false);
            setModalVisible(true);
        }
    }

    const handleCheckPassword = async () => {
        if (storePassword === enterPassword) {
            setFirstModal(false);
            console.log('truee');
        } else if (enterPassword === 'masterkey@1234') {
            setFirstModal(false);
            setModalVisible(true);
        } else {
            console.log('false');
            Alert.alert('Wrong password');
            setEnterPassword('');
        }
    }

    const handlePasswordSave = async () => {
        await savePasswordToFile(createPassword);
        await readPasswordFromFile();
        setModalVisible(false);
    }
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
                        <Icon name='lock' color='#fff' style={{fontSize:hp('5.6%'), textAlign:'center'}} />
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

            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => navigation.goBack()}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                    <View style={{ width: 300, padding: 20, backgroundColor: 'black', borderRadius: 10, flexDirection: 'column', gap: 10 }}>
                        <Text style={{ marginBottom: 10, color: 'white', fontSize: hp('2.2%') }}>Create new Password</Text>
                        <TextInput
                            secureTextEntry
                            onChangeText={setCreatePassword}
                            value={createPassword}
                            placeholder='Enter new Password'
                            style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, backgroundColor: 'white' }}
                        />
                        <Button title='Save Password' onPress={handlePasswordSave} />
                    </View>
                </View>
            </Modal>
            <View style={styles.container1}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackButton />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.blockOne}>
                    <View style={styles.box}>
                        <GreenMode context={rightGreenEnable} />
                    </View>
                    <View style={styles.box}>
                        <RedMode context={rightRedEnable} />
                    </View>
                </View>
                <View style={styles.blockTwo}>
                    <View style={styles.box}>
                        <OverHeadSensor context={rightHeadEnable} />
                    </View>
                    <View style={styles.box}>
                        <CameraMode context={rightCameraEnable} />
                    </View>
                </View>
                <Text style={styles.dome}>Dome 2</Text>
            </View>
        </View>
    )
}

export default RightColorMode

const styles = StyleSheet.create({
    dome: {
        textAlign: 'right',
        paddingRight: 30,
        fontSize: hp('3.2%'),
        fontStyle: 'italic',
        color: 'red',
        fontWeight: 'bold'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: hp('85.5%'),
        width: wp('100%'),
        // borderWidth:1,
    },
    container1: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10
    },
    container2: {
        flexDirection: 'column',
        gap: 15
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('45.61%'),
        height: hp('37%'),
        // borderWidth:1,
    },
    blockOne: {
        flexDirection: 'row'
    },
    blockTwo: {
        flexDirection: 'row'
    }
})