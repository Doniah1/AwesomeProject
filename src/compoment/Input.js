import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const  Input=({inputMessage,onSendPress,setMessage})=> {
  return (
    <View style={styles.container}>
      <Entypo name='emoji-happy' color='#fff' size={20}/>
      <TextInput
      placeholder='Some text'
      value={inputMessage}
      onChange={setMessage}
      style={styles.input}
      />
    </View>
  )
}
export default Input;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0,2)',
        width:'85%',
        position:'absolute',
        bottom:10,
        paddingHorizontal:20,
        paddingVertical:10,
        border:30
    },
    input:{
        fontFamily:'Montserrat_600SemiBold',
        fontSize:11,
        color:'fff',
        paddingHorizontal:10,
        flex:1
    }
})
