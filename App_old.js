
//import React, { useState } from 'react';
//import { View, Text, Button, TextInput, FlatList, Alert } from 'react-native';


//const Card = ({ name, age }) => (

 // <View style={styles.card}>
   // <Text>Name: {name}</Text>
    //<Text>Age: {age}</Text>
  //</View>
//);

//const App = () => {
  //const [name, setName] = useState('');
  //const [age, setAge] = useState('');
  //const [data, setData] = useState([]);

  //const handlePress = () => {
  //if(name&& age){
    //const newData = { name, age };
    //setData([...data, newData]);
    //setName('');
    //setAge('');
  //}else{
    //Alert.alert("please enter name or age");
  //}
  //};


  //const flatListRenderItem = ({ item, index }) => (
   // <Card key={index} name={item.name} age={item.age} />
  //);

  //return (
    //<View style={styles.container}>
      //<View style={styles.form}>
        //<TextInput
          //style={styles.input}
          //placeholder="Name"
          //value={name}
          //onChangeText={setName}
        ///>
        //<TextInput
          //style={styles.input}
          //placeholder="Age"
          //value={age}
          //onChangeText={setAge}

        //>
       // <Button title="Add Data" onPress={handlePress} />
      //</View>
      //<FlatList
        //data={data}
        //renderItem={flatListRenderItem}
        //keyExtractor={(item, index) => index.toString()}
      ///>
    //</View>
  //);

  //}



  //const styles = {
    //container: {
      //flex: 1,
      //padding: 20,
    //},
    //form: {
      //marginBottom: 20,
    //},
    //input: {
      //height: 40,
      //borderColor: 'gray',
      //borderWidth: 1,
      //marginBottom: 10,
      //paddingHorizontal: 10,
    //},
    //list: {
     // flex: 1,
    //},
    //card: {
      //backgroundColor: 'white',
      //padding: 10,
      //borderRadius: 5,
      //marginBottom: 10,
    //}
  //};

  //export default App;

  

  
  import React, {useState} from 'react';
  import { Text, StyleSheet, View} from 'react-native';
import { CheckBox } from 'react-native-elements';

  const App_old=()=>{
    const [checked,setchecked]=useState(false);

    return(
      <View style={styles.container}>
        <CheckBox
        title="Do you like code with Donia ?"
        checked={checked}
        onPress={()=>setchecked(!checked)}
        />
        <Text>{checked?"Yes":"NO"}</Text>
        <Text>Ilike code with Donia</Text>
      </View>
    )
  }

  const styles =StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
    }
  })
  export default App_old;

  



  