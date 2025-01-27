import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import rotationImg from '../../../assets/cameraIcons/imageRotation.png'

const ImageRotation = () => {
  return (
     <View style={styles.mainContainer}>
                       <View style={{alignItems:'center', gap:10,}}>
                       <View style={styles.container}>
                           <Image source={rotationImg} style={styles.Image}/>
                       </View>
                           <Text style={styles.heading}>Image Rotation</Text>
                       </View>
                   </View>
  )
}

export default ImageRotation

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        // borderWidth:2,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        // padding:10
    },
    container:{
        height:'41%',
        width:'55%',
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
        paddingHorizontal:11,
        // paddingVertical:2,
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    },
})