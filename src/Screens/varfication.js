import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React,{useRef, useState} from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const varfication =({route})=> {
    const {tel}=route.params;
    const navigation = useNavigation();
    const firstInput= useRef();
    const secondInput= useRef();
    const thirdInput= useRef();
    const fourthInput= useRef();
  const [otp,setOtp]=useState({1:'',2:'',3:'',4:''});
  return (
   <View>
        <View style={styles.headercontainer}>
          
      
        <TouchableOpacity >
      <Icon name="chevron-back-outline"
      size={30}
      style={styles.arrow}
     onPress={()=>navigation.goBack()}
      
     
      />
      </TouchableOpacity>
            
      <Text style={styles.headerTitle}>varfication </Text>
      
      <Text style={styles.title}>varfication </Text>
      </View>
       
      <Text style={styles.content}> Enter the OTP number just sent you at{' '}
      <Text style={styles.tel}>{tel}</Text>
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
            keyboardType='number-pad'
            maxLength={1}
           ref={firstInput}
            onChangeText={text=>{
                setOtp({...otp,1:text})
                text && secondInput.current.focus();
            }}
            />

        </View>
        <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
             keyboardType='number-pad'
             maxLength={1}
            ref={secondInput}
             onChangeText={text=>{
                 setOtp({...otp,2:text})
                 text ? thirdInput.current.focus() : firstInput.current.focus();
             }}
               />
                


        </View>
        <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
             keyboardType='number-pad'
             maxLength={1}
             ref={thirdInput}
             onChangeText={text=>{
                 setOtp({...otp,3:text})
                 text ? fourthInput.current.focus() : secondInput.current.focus();
             }}/>

        </View>
        <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
             keyboardType='number-pad'
             maxLength={1}
             ref={fourthInput}
             onChangeText={text=>{
                 setOtp({...otp,4:text})
                 !text && thirdInput.current.focus();
             }}/>

        </View>

      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={()=> console.log(otp)}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      
     </View>
    

  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    headercontainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        color:'#333',
        
    },
    headerTitle:{
        fontSize:20,
        fontFamily:'Roboto-MediumItalic',
        textAlign:'center',
        paddingTop:100,
        
    },
    title:{
        fontSize:20,
        fontFamily:'Roboto-MediumItalic',
        marginTop:10,
        marginBottom:10,
        marginHorizontal:20
    },
    arrow:{

    
        pading:12,
        postion:'absolute',
        top:5,
        left:10,
        zIndex:2,

      
      color:'#333',
    },
    content:{
        fontSize:20,
        fontFamily:'Roboto-MediumItalic',
        marginTop:10,
        marginBottom:20,
        marginHorizontal:20,
    },
    tel:{
        fontSize:18,
        fontFamily:'Roboto-MediumItalic',
        color:'gray',
    },
    otpContainer:{
        marginHorizontal:50,
        marginBottom:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    },
    otpBox:{
        borderRadius:5,
        borderColor:'#AD40F',
        borderWidth:1,
    },
    otpText:{fontSize:25,
    color:'black',
    padding:0,
    textAlign:'center',
    paddingHorizontal:19,
     paddingVertical:10,
         },
         button:{
           
           //backgroundColor:'#AD40F',
           //borderRadius:8,
           //marginHorizontal:20,
           //justifyContent:'center',
           //alignItems:'center',
           //marginTop:20,


           borderRadius:50,
           backgroundColor: '#AD40AF',
   
             
            alignItems:"center",
            // marginTop:-90,
             flex:-0.2,
             fontWeight: 'bold',
             fontSize: 18,
             color: '#FFF',
             fontFamily: 'Roboto-MediumItalic',
            
             padding: 20,
             justifyContent:'center',
             flexDirection:'row',
              //backgroundColor:'tranparent',
               borderWidth:1,
              borderColor:"white",
             

         },
         buttonText:{
            fontWeight:'bold',
            fontSize:15,
            fontFamily:'Roboto-MediumItalic',
         }


})
export default varfication;