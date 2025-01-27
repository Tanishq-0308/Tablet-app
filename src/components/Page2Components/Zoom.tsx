import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import zoomImg from '../../../assets/cameraIcons/zoom.png'

const Zoom = () => {
  return (
   <View style={styles.mainContainer}>
                 <View style={{alignItems:'center', gap:10,}}>
                 <View style={styles.container}>
                     <Image source={zoomImg} style={styles.Image}/>
                 </View>
                     <Text style={styles.heading}>Zoom</Text>
                 </View>
             </View>
  )
}

export default Zoom

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
        height:'41%',
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
        paddingHorizontal:62,
        // paddingVertical:2,
        borderRadius:12,
        elevation:2,
        borderColor:'#747d8c'
    },
})