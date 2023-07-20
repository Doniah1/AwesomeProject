import { StyleSheet, Text, View ,Animated,useWindowDimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import globalStyles from '../res/Styles/global'

export default  Dot=({data,scrollX})=> {
    const {width}=useWindowDimensions();
  return (
    <View style={{backgroundColor:"white"}}>
    <View style={styles.dotContainer}>
        {data.map((_,i)=>{
            const inputRange =[(i-1)*width, i*width,(i+1)*width];

            const dotWidth=scrollX.interpolate({
                inputRange,
                outputRange:[10,20,10],
                extrapolate:'clamp',
            });

            const opacity=scrollX.interpolate({
                inputRange,
                outputRange:[0.3,1,0.3],
                extrapolate:'clamp',
            })
           return <Animated.View
           style={[
            styles.dot,
            {
                width:dotWidth,
                opacity,
        }]} 
        key ={i.toString()}/> 

        })}
        
    </View>
    </View>
   );
   };
   

const styles = StyleSheet.create({
    dot:{
        height:5,
        borderRadius:5,
        backgroundColor:'#493d8a',
        marginHorizontal:10
    },
    dotContainer:{
        flexDirection :'row',
         height:64,
        marginBottom:100, 

        marginTop:-50,
        //borderWidth:1, 
        justifyContent:'center'
    },
    btn:{
       
      //  borderRadius:5,
        backgroundColor:"pink",
        //justifyContent:"center",
       alignItems:"center",
        marginTop:-100,
        flex:-0.2,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'Roboto-MediumItalic',
        borderRadius: 50,
        padding: 20,
        justifyContent:'center',
        flexDirection:'row',
        
        
    }

    
})