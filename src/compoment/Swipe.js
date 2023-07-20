import { StyleSheet, Text, View, FlatList, Veiw, Animated, TouchableOpacity ,useWindowDimensions} from 'react-native'
import React, { useState, useRef } from 'react'
import slides from '../Screens/slides';
import SwipeItem from './SwipeItem';


import Dot from './Dot';






const Swipe = ({navigation}) => {
  
  const {width}=useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  
  

  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const goNextSlide=()=>{
    
    const nextSlideIndex = currentIndex + 1;
    if(nextSlideIndex !=slides.length){
    const offset=nextSlideIndex * width;
    slideRef?.current?.scrollToOffset({offset});
    setCurrentIndex(nextSlideIndex);
    }

        
   };
  const ViewableItemsChanged = useRef(({ viewableItems }) => {
  setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
 

  return (

    
    <View style={{ flex: 3 ,backgroundColor:"white"}}>
      <FlatList
      
        horizontal
        data={slides}
        renderItem={({ item }) => <SwipeItem item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={ViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}

      />
      <Dot data={slides} scrollX={scrollX} />
      
      <View style={{marginTop:20}}>
        {
          currentIndex==slides.length-1 ?(
          <View style={{height:50}}>
          <TouchableOpacity
         style={[styles1.btn]}
         onPress={()=> navigation.navigate('home')}>
          <Text style={{fontWeight:'bold',fontSize:15}} >Get Started </Text>
        
         
         </TouchableOpacity>
         </View>
          ):(
             
       <View style={{fleDirection:'row'}}>
       <TouchableOpacity 
       onPress={() => navigation.navigate('tabs')}
       style={styles1.btn1}>
          <Text style={{fontWeight:'bold',fontSize:15,color:"black"}}>Skip</Text>
          </TouchableOpacity>
          <View style={{width:15}}></View>
          <TouchableOpacity style={[styles1.btn]} onPress={goNextSlide} >
          <Text style={{ fontWeight:'bold',fontSize:15}}>Next</Text>

          </TouchableOpacity>
      </View>
          )

        }
          

        
        
        </View>
       
       
        

    </View>
        
        
  

  );
};

     

    
  

  


const styles1 = StyleSheet.create({
    btn:{
       
         borderRadius:50,
        backgroundColor: '#AD40AF',

          
         alignItems:"center",
          marginTop:-90,
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
      btn1:{
       
        borderRadius:50,
      
         
        alignItems:"center",
         //margin:-50,
         marginTop:-70,
         marginBottom:-20,
         flex:-0.2,
         fontWeight: 'bold',
         fontSize: 18,
         color: '#FFF',
         fontFamily: 'Roboto-MediumItalic',
        // borderRadius: 50,
         padding: 20,
         justifyContent:'center',
         flexDirection:'row',
         // backgroundColor:'tranparent',
           borderWidth:1,
           borderColor:"white",
         
         
     }
  
})
     



export default Swipe;