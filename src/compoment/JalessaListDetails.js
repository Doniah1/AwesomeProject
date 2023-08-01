import { StyleSheet, Text, View,Image, TouchableOpacity ,useWindowDimensions} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import slide from '../Screens/slide';
import JalessaItem from './JalessaItem';
 import { SharedElement } from 'react-native-shared-element';
import HomeScreen1 from '../Screens/HomeScreen1';

const JalessaListDetails=({navigation,route}) =>{

   const {item}=route.params;
  const { width,height } = useWindowDimensions();
  const topHeight=height*.3;
  return (
    <View style={{flex: 1,backgroundColor:'#AD40Af',height:topHeight+32}}>
      
      
      <TouchableOpacity >
      <Icon name="arrowleft"
      size={28}
      style={{
        pading:12,
        postion:'absolute',
        top:5,
        left:10,
        zIndex:2,

      }}
      color={'#333'}
      onPress={()=>{
        navigation.goBack();
      }}
      />
      </TouchableOpacity>

      <View style={{flexDirection:"row",padding:20,marginBottom:5,backgroundColor:'#AD40Af',borderRadius:25}}>
      
     

      <Image source={item.image} style={{width: 100 ,height:100,borderRadius:70,marginRight:10}} />
      
        <View style={{flex:1}}>
       
      
        <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
        <Text style={{fontSize:18,opacity:.7}}>{item.jobTitle}</Text> 
        <Text style={{fontSize:18,opacity:.7}}>{item.work}</Text>
        <Text style={{fontSize:18,opacity:.7}}>{item.job}</Text> 
       
    </View>
    </View>

      
     
     

   
      <View style={{postion:'absolute',flexDirection:'row',justifyContent:'space-between',
      width,height,backgroundColor:"white",transform:[{translateY:height/8}],borderRadius:32      }}>
        
        <View style={{flexDirection:'column'}}>
       
        <Image source={item.image1} style={{width: 100 ,height:100,borderRadius:70,marginTop:10,marginLeft:20,padding:50}} />
       <Text style={{fontSize:18,opacity:.7,padding:5,marginLeft:40}}>{item.age}</Text>
       </View>
       <View style={{flexDirection:'column'}}>
       
       <Image source={item.imag2} style={{width: 100 ,height:100,borderRadius:70,marginTop:10,marginRight:20,padding:50}} />
       <Text style={{fontSize:18,opacity:.7,padding:5,marginLeft:40}}>{item.age}</Text>
       </View>
       </View>
       </View>
         
       
       
   
     
    
     
    
    
   
  )  ;
}

const styles = StyleSheet.create({})

export default JalessaListDetails;