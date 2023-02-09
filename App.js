/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
/*import type {PropsWithChildren} from 'react';*/


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Vibration, View,Text,Image } from 'react-native';



const App = () =>{
  
return(
  < View style={styles.container}>
    <View style={styles.myStyle}>
      <Image
       style={styles.myStyleChild}

      source={{uri:'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png'}}
       />
     
     <View style={styles.myStyleChildd}> 

     
      
      <Text style={styles.text2}>Name:Donia Hindi 
      </Text>
      <Text style={styles.text2}>BD:29.12.1987</Text>
      
    </View>
      <View style={styles.myStyleChilddd}>
        <Text style={styles.text1}>My UI</Text>
        
      

     
   
   
  </View>
   </View>
   </View>
      
      
);
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    
    alignItems:'center',
    justifyContent:'center',
    margin:100,
    
    
  },
  myStyle:{
    width:300,
   
   height:50,
   
    borderRadius:20,
    
    backgroundColor :'black',
    padding:1,
    
    
    
    
    
    flex:0.3,
  },
  myStyleChild:{
    width:50,
    height:50,
    flex:0.5,
    
    margin:20,
  
    
  
  
    
    
  }, 
  myStyleChildd:{
    width:200,
    height:100,
    backgroundColor:'black',
    flex:0.5,
    flexDirection:'column',
    alignItems:'center',
   justifyContent:'center',
   marginRight:10,
   marginTop:-80,
   marginLeft:70,
   borderRadius:40,
   
    
    
    
  },
  myStyleChilddd:{
    width:300,
    height:500,
    backgroundColor:'black',
    flex:1,
    flexDirection:'column',
    alignItems:'center',
   justifyContent:'center',
   marginTop:-2,
   marginRight:40,
   marginLeft:-1,
   marginBottom:0,
   borderRadius:20,
   
   
 
  },
  text1:{
    fontWeight:'bold',
    fontSize:50,
    color:'white',
    marginTop:-20,
  },


text2:{
  color:'white',
}
});




export default App;
