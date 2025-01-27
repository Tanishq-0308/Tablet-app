import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import whiteBalanceImg from '../../../assets/cameraIcons/whiteBalance.png'

const WhiteBalance = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={{alignItems:'center', gap:10,}}>
        <View style={styles.container}>
            <Image source={whiteBalanceImg} style={styles.Image}/>
        </View>
            <Text style={styles.heading}>White Balance</Text>
        </View>
        <View style={styles.buttons}>
            <Pressable>
            <Text style={styles.button}>Auto</Text>
            </Pressable>
            <Pressable>
            <Text style={styles.button}>Indoor</Text>
            </Pressable>
            <Pressable>
            <Text style={styles.button}>Outdoor</Text>
            </Pressable>
            <Pressable>
            <Text style={styles.button}>Manual</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default WhiteBalance

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        // borderWidth:2,
        flexDirection:'row',
        alignItems:'flex-start',
        // justifyContent:'center',
        padding:10
    },
    container:{
        height:'45%',
        width:'50%',
        // borderWidth:2,
    },
    Image:{
        height:'100%',
        width:'100%',
        // borderWidth:2
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        borderWidth:2,
        backgroundColor:'#ced6e0',
        paddingHorizontal:24,
        // width:159,
        // paddingVertical:2,
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    },
    buttons:{
        flexDirection:'row',
        paddingVertical:20,
        gap:15
    },
    button:{
        fontSize:20,
        fontWeight:'bold',
        borderWidth:2,
        backgroundColor:'#ced6e0',
        paddingHorizontal:13,
        paddingVertical:2,
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    }
})