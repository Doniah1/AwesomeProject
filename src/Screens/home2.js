import React from 'react';
import {View, StyleSheet,Text,FlatList,Image,TouchableOpacity,useWindowDimensions} from 'react-native';
import slide from './slide';
import JalessaItem from '../compoment/JalessaItem';
import { SafeAreaView } from 'react-native';
import JalessaListDetails from '../compoment/JalessaListDetails';
import { SharedElement } from 'react-native-shared-element';


const HomeScreen1 = ({navigation}) => {
 
  const { width,height } = useWindowDimensions();
 
  const  headerComponent =()=> {
  return  <Text style={{fontWeight:'700',paddingBottom:20,
  fontSize:30}}>Jalessa Available :</Text>

 }
 
  const renderItem =({ item }) =>{
    return(
      <TouchableOpacity
      onPress ={()=>{
      navigation.navigate('JalessaListDetails',(item))}}
      style={{marginBottom:20,height:100}}>
       
        
      <View style={{flexDirection:"row",padding:20,marginBottom:5,backgroundColor:'#AD40Af',borderRadius:25}}>
      
      
      <Image
            source={require('../../assests/Donia1.jpeg')}
            style={{width: 70 ,height:70,borderRadius:70,marginRight:10}} />
    
      <View style={{flex:1}}>
     
    
      <Text style={{fontSize:18,fontWeight:"bold"}}>Donia Hindi</Text>
      <Text style={{fontSize:18,opacity:.7}}>Teacher</Text> 
      
      </View>
      </View>

  </TouchableOpacity>
    );
   };
  
  

 

  return (
    <SafeAreaView  style={{ flex: 1,backgroundColor:"white"}}>
    
   <FlatList
   ListHeaderComponentStyle={{height:55,alignItems:'center',justfyContent:'center'}}
    //}}
    ListHeaderComponent={headerComponent}
    
      
      data={slide}
      
     //renderItem={({ item }) => <JalessaItem item={item} />}
     renderItem={(renderItem)}
      //return(
        //<TouchableOpacity
        //onPress ={()=>{
        //navigation.navigate('JalessaListDetails',{item})}}
        //style={{marginBottom:20,height:100}}>
        //<View style={{flexDirection:"row",padding:20,marginBottom:5,backgroundColor:'#AD40Af',borderRadius:25}}>
        //<Image source={item.image} style={{width: 70 ,height:70,borderRadius:70,marginRight:10}} />
        //<View style={{flex:1}}>
       
      
        //<Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
        //<Text style={{fontSize:18,opacity:.7}}>{item.jobTitle}</Text> 
       
    //</View>
    //</View>
    
    //</TouchableOpacity>
      //)
     //}
   // }
      keyExtractor={item => item.id}>

        
       
        
      
    
      //</FlatList>

    </SafeAreaView>
        
  );
};




const styles = StyleSheet.create({})

export default HomeScreen1;



<Tab.Screen name={ScreenNames.Reservations} component={Reservation} options={{
  tabBarIcon:({color,size})=>(
<Icon name="copy1" color={color} size={size}/>
  )
}}/>
<Tab.Screen name={ScreenNames.Massage} component={Massages} options={{
  tabBarIcon:({color,size})=>(
<Icon name="mail" color={color} size={size}/>
  ) 
}}/>