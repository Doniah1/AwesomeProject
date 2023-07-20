import { StyleSheet, Text, View, Image, useWindowDimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import globalStyles from '../res/Styles/global'
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-native-shared-element';








export default JalessaItem = ({ item }) => {
  
  
  const { width,height } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
     onPress ={()=>
      navigation.navigate('JalessaListDetails',{item})}
     style={{marginBottom:20,height:100}}>
      <View style={{flexDirection:"row",padding:20,marginBottom:5,backgroundColor:'#AD40Af',borderRadius:25}}>
      
     

      <Image source={item.image} style={{width: 70 ,height:70,borderRadius:70,marginRight:10}} />
      
        <View style={{flex:1}}>
       
       
      
        <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
        <Text style={{fontSize:18,opacity:.7}}>{item.jobTitle}</Text> 
        <Text style={{fontSize:18,opacity:.7}}>{item.work}</Text> 
      
        
      </View>
     
        </View>
    
    
    </TouchableOpacity>
    
    
  )
}


const styles = StyleSheet.create({}) 