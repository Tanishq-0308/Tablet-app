import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import stabilizerImage from '../../../assets/cameraIcons/imageStablizer.png'

const ImageStablizer = () => {
  return (
    <View style={styles.mainContainer}>
              <View style={{alignItems:'center', gap:10,}}>
              <View style={styles.container}>
                  <Image source={stabilizerImage} style={styles.Image}/>
              </View>
                  <Text style={styles.heading}>Image Stabilizer</Text>
              </View>
          </View>
  )
}

export default ImageStablizer

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        // borderWidth:2,
        flexDirection:'row',
        alignItems:'flex-start',
        // justifyContent:'center',
        paddingHorizontal:10
    },
    container:{
        height:'42%',
        width:'51%',
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
        paddingHorizontal:15,
        // paddingVertical:2,
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    },
})