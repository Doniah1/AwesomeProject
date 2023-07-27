import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LastWatch=({chekedOn})=> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{chekedOn}</Text>
    </View>
  )
}
export default LastWatch;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        elevation:3,
        paddingVertical:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:100,
        alignSelf:'center',
        marginTop:25,
    },
    text:{
        color:"#f20045",
        fontSize:12,
        fontFamily:'Monserrat_600SemiBold'
    }
})