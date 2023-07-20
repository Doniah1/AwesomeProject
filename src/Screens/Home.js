import { View, Text ,StyleSheet, Button, FlatList, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import ScreenNames from '../../route/ScreenNames';
import globalStyles from '../res/Styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Review from './Review';
import LoginMom from './LoginMom';



const Home=({navigation})=>{

  
  return(
    <SafeAreaView style={globalStyles.container}>

      <View >
        
        <Text style={globalStyles.titleText}>Jalessa </Text>
        </View>
        
        <View style={globalStyles.styl}>
        <Image
            source={require('../../assests/Mom.jpeg')}
            style={{width: 300, height:400,padding:100,marginTop:-100}}
            />
           </View>
           
        <TouchableOpacity 
        onPress={()=>navigation.navigate( 'LoginMom')}
        style={globalStyles.Touch}>
          <Text style={globalStyles.Context1}>Lets Begin</Text>
          <Icon name="arrowright" style={globalStyles.Icon}/>
        </TouchableOpacity>
       
    </SafeAreaView>
    
  )}
    


export default  Home;