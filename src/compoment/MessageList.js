import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const  MessageList=({item})=> { 
  
    const navigation = useNavigation();
    return (
    
        <TouchableOpacity
       onPress ={()=>
        navigation.navigate('Disscsion',{name:item.name})}
       style={{width:'100%'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
       
       <View style={{paddingTop:15,paddingBottom:15}}>
  
        <Image source={item.image} style={{width: 50 ,height:50,borderRadius:25}} />
        </View>
          
        
         <View style={{flexDirection:'column',justifyContent:'center',
         padding:15,paddingLeft:0,marginLeft:10,width:300,borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
        
          <Text style={{fontSize:14,fontWeight:"lato-Regular"}}>{item.name}</Text>
          <Text style={{fontSize:15,color:'#666',fontFamily:'lato-regular'}}>{item.messageTime}</Text> 
          </View>
          <Text style={{fontSize:14,coloe:'#333333'}}>{item.messageText}</Text> 
        
          
        </View>
        
        </View>
       
    
      
      
      </TouchableOpacity>
      
      
  )
}

export default MessageList;