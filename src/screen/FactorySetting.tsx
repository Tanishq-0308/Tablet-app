import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView, Modal, TextInput, Button, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../App'
import { Dimensions } from 'react-native'
import BackButton from '../components/BackButton'
import FactoryBtn from '../components/SettingsPage/FactoryBtn'
import GreenIntensity from '../components/SettingsPage/GreenIntensity'
import RedIntensity from '../components/SettingsPage/RedIntensity'
import OverheadEnable from '../components/SettingsPage/OverheadEnable'
import { BtnEnableContext } from '../Context/EnableContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CameraBtn from '../components/SettingsPage/CameraBtn'
import useStore from '../Store/stateStore'
import { useWebSocket } from '../Context/webSocketContext'
import Page2 from './Page2'
import RNFS from 'react-native-fs';

type FactorySettingProps = NativeStackScreenProps<RootParamList, 'FactorySetting'>

const FactorySetting = ({ navigation, route }: FactorySettingProps) => {
    const { greenEnabled, redEnabled, headSensorEnabled, greenValue, setGreenValue, greenEnabledValue, setGreenEnabledValue, redValue, setRedValue, redEnabledValue, setRedEnabledValue, headSensor, setHeadSensor, cameraEnabled } = useContext(BtnEnableContext)

    const greenLeftObjects = {
        color: greenValue,
        setColor: setGreenValue,
        enable: greenEnabledValue,
        setEnable: setGreenEnabledValue
    }

    const leftHeadObjects = {
        sensor: headSensor,
        setSensor: setHeadSensor
    }

    const redLeftObjects = {
        color: redValue,
        setColor: setRedValue,
        enable: redEnabledValue,
        setEnable: setRedEnabledValue
    }

    const value = useStore((state) => state.states.stateML);
    const value2 = useStore((state) => state.states.stateGL);
    const value3 = useStore((state) => state.states.stateRL);
    const value4 = useStore((state) => state.states.stateOL)

    // const [enterPassword, setEnterPassword]= useState('');
    // const [createPassword, setCreatePassword] = useState('');
    // const [storePassword, setStorePassword] = useState('');
    // const [firstModal, setFirstModal] = useState(false);
    // const [isModalVisible, setModalVisible] = useState(false);
    const { sendMessage } = useWebSocket();

    // useEffect(()=>{
    //     setFirstModal(true);
    //     readPasswordFromFile();
    // },[]);

    // const savePasswordToFile = async (password: string) => {
    //     try {
    //         const filePath = `${RNFS.DocumentDirectoryPath}/password.txt`;
    //         await RNFS.writeFile(filePath, password, 'utf8');
    //     } catch (error) {
    //         console.error('Error saving password to file: ', error);
    //     }
    // }

    // const readPasswordFromFile = async () => {
    //     try {
    //         const filePath = `${RNFS.DocumentDirectoryPath}/password.txt`;
    //         const password = await RNFS.readFile(filePath, 'utf8');
    //         const checkPass = password;
    //         setStorePassword(checkPass);
    //     } catch (error) {
    //         setFirstModal(false);
    //         setModalVisible(true);
    //     }
    // }

    // const handleCheckPassword= async()=>{
    //     if(storePassword === enterPassword){
    //         setFirstModal(false);
    //         console.log('truee');
    //     }else if(enterPassword === 'masterkey@123'){
    //         setFirstModal(false);
    //         setModalVisible(true);
    //     }else {
    //         console.log('false');
    //         Alert.alert('Wrong password');
    //         setEnterPassword('');
    //     }
    // }

    // const handlePasswordSave = async () => {
    //     await savePasswordToFile(createPassword);
    //     await readPasswordFromFile();
    //     setModalVisible(false);
    // }

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
        >

            {/* <Modal
                animationType='slide'
                transparent={true}
                visible={firstModal}
                onRequestClose={()=> navigation.goBack()}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Insert Password</Text>
                        <TextInput
                            secureTextEntry
                            onChangeText={setEnterPassword}
                            value={enterPassword}
                            placeholder="Enter your password"
                            style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
                        />
                        <Button title="Save Password" onPress={handleCheckPassword}/>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => navigation.goBack()}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Create new Password</Text>
                        <TextInput
                            secureTextEntry
                            onChangeText={setCreatePassword}
                            value={createPassword}
                            placeholder='Enter new Password'
                            style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
                        />
                        <Button title='Save Password' onPress={handlePasswordSave} />
                    </View>
                </View>
            </Modal> */}
            <View style={styles.mainContainer}>
                <View style={styles.container2}>
                    <View style={styles.blockOne}>
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
                        <View style={styles.box}>
                            <FactoryBtn navigation={navigation} route={route} navigateTo='ColorMode' />
                        </View>
                        <View style={styles.box}>
                            {
                                cameraEnabled && <CameraBtn value={value} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                        <View style={styles.box}>
                            {
                                headSensorEnabled && <OverheadEnable context={leftHeadObjects} value={value4} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                    </View>
                    <View style={styles.blockTwo}>
                        <View style={styles.box2}>
                            {
                                greenEnabled && <GreenIntensity context={greenLeftObjects} value={value2} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                        <View style={styles.box2}>
                            {
                                redEnabled && <RedIntensity context={redLeftObjects} value={value3} sendMessage={sendMessage} code='L' />
                            }
                        </View>
                    </View>
                    <Text style={styles.dome}>Dome 1</Text>
                </View>

            </View>
            {cameraEnabled && <Page2 />}
        </ScrollView>
    )
}

export default FactorySetting

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
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
        // margin: 10,
        backgroundColor: 'white',
        // borderWidth:1,
        height: hp('85.5%'),
        width: wp('100%'),
    },
    container1: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10,
        // borderWidth:2
    },
    container2: {
        flexDirection: 'column',
        gap: 15,
        // borderWidth:2
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('30.6%'),
        height: hp('37%'),
        // borderWidth: 1,
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('50%'),
        height: hp('37%'),
        // borderWidth: 1,
    },
    blockOne: {
        flexDirection: 'row',
    },
    blockTwo: {
        flexDirection: 'row'
    }
})