import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-svg';

const randomTime=()=>{
    const hrs=Math.round(Math.random()*12);
    const min=Math.round(Math.random()*60);
    const hFormat=hrs<10 ? '0':'';
    const mFormat=min <10 ? '0':'';
    const amPm=hrs <12?'AM':'PM';
    return String (hFormat +hrs +":" + mFormat+ min + " "+amPm)
}


const Chat=(username,uri,count,onPress)=> {

  return (

    <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    >
        {

        count>0 ?(
            <LinearGradient
            colors={['#f26a50','#f20045','#f20045']}
            style={styles.gradientStyle}
            >
        <Text style={styles.count}>{count}</Text>
        </LinearGradient>
        ):null
         } 

        <Image source={{uri:uri}} style={StyleSheet.image}/>
        <View STYLE={{marginLef:10}}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.text}>Hello,How are you</Text>


            <Text style={styles.duration}>{randomTime()}</Text>
        </View>
        
        </TouchableOpacity>
  )
}
export default Chat;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:30
    },
    gradientStyle:{
        height:20,
        width:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20
    },
   count:{
    color:'#fff',
    fontFamily:'Montserrat_700Boldf',
   },
   image:{
    width:60,
    height:60,
    borderRadius:30,
   },
   username:{
    color:'#b6b6b6',
    fontFamily:'Montserrat_600SemiBold',
    fontSize:11

   },
   duration:{
    color:'#000119',
    fontSize:12,
    flexL:1,
    marginLeft:280,
    position:'absolute',
    fontFamily:'Montserrat_600SemiBold'
   }
})