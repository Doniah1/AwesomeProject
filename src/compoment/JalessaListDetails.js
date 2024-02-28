import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput ,useWindowDimensions,Button} from 'react-native'
import React ,{useState}from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const JalessaListDetails=({navigation,route}) =>{

   const {item}=route.params;
  const { width,height } = useWindowDimensions();
  const topHeight=height*.3;
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [input, setInput] = useState([]);


  const incrementChildren = () => {
    setNumberOfChildren(prevCount => prevCount + 1);
    const newInput=[...input];
    newInput.push('');
    setInput(newInput);
  };
  
  const decrementChildren = () => {
    setNumberOfChildren(prevCount => Math.max(0, prevCount - 1));
  };

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

      
     
     
       
      
      <View style={{postion:'absolute',
      width,height,backgroundColor:"white",transform:[{translateY:height/8}],borderRadius:32      }}>
        
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'column'}}>
       
        <Image source={item.image1} style={{width: 100 ,height:100,borderRadius:70,marginTop:10,marginLeft:20,padding:50}} />
       <Text style={{fontSize:18,opacity:.7,padding:5,marginLeft:40}}>{item.age}</Text>
       </View>
       <View style={{flexDirection:'column'}}>
       
       <Image source={item.imag2} style={{width: 100 ,height:100,borderRadius:70,marginTop:10,marginRight:20,padding:50}} />
       <Text style={{fontSize:18,opacity:.7,padding:5,marginLeft:40}}>{item.age}</Text>
      
       </View>
       </View>
       
          <View style={{flexDirection:'row',padding:10}}>
          <Text>Number of Children: </Text>
         <Button title="+" onPress={incrementChildren} />
         <Text> {numberOfChildren}</Text>
          <Button title="-" onPress={decrementChildren} />
          <View style={{flexDirection:'column'}}>
         </View>
          
        
        </View>
        
          <View style={{flexDirection:'row',padding:10}}>
         <Text>Age :</Text>
         <TextInput
    
          placeholder={`Enter age for Child ${numberOfChildren + 1}`}
      
        value={childrenAges}
        onChangeText={text => {
        const newAges = [...childrenAges];
        newAges[childrenAges] = text;
        setChildrenAges(newAges);
      }}
       
    />
    
   </View>
   
   </View>

</View>






    

       
       );
       }
         
       
       
   
     
    
     
    
    
   
  
const styles = StyleSheet.create({})

export default JalessaListDetails;