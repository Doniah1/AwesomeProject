import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Platform, Alert } from 'react-native';
import ScreenNames from '../../route/ScreenNames';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

import globalStyles from '../res/Styles/global';

import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list';
import { creatUser } from '../res/api';
import PhoneInput from 'react-native-phone-number-input';








const Review = ({ navigation }) => {

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  
  const [birthdayDate, setBirithdayDate] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [subcategory, setSubCategory] = useState('');

  const firstInput= useRef();
  const secondInput= useRef();
  const thirdInput= useRef();
  const fourthInput= useRef();
const [otp,setOtp]=useState({1:'',2:'',3:'',4:''});



  const toggleDatepiccker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onChangeDate = ({ type }, selected) => {
    if (type == "set") {
      const currentDate = selected;
      

      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatepiccker();
        setBirithdayDate(currentDate.toDateString());
      }
    } else {
      toggleDatepiccker();
    }
  }

  const categorys = [

    { key: '1', value: 'Hourly' },
    { key: '2', value: 'Daily' },
    { key: '3', value: 'Monthly' },
    { key: '4', value: 'Emergency' }

  ];

  const onSubmit = () => {
    console.log("cat: ", category);
    if (!name || !tel || !birthdayDate || !category) {
      Alert.alert("Massage", "The Field is empty")
    }

    else {
      const createUserBody = {
        "name": name,
        "tel": tel,
        "birthday": birthdayDate,
        "category": category,
      }

      creatUser(createUserBody).then(res => {
        navigation.navigate('tabs')
      })
    }
  }







  return (
    <SafeAreaView style={globalStyles.safe2}>

        <View style={{ paddingHorizontal: 25 }}>

       <Text style={globalStyles.Text1}>Login Mom OR DAD</Text>
       <View style={globalStyles.view2}>

        <TextInput placeholder='Name Mom OR DAD'
          value={name}
          onChangeText={setName}
          style={globalStyles.text12} keyboardType="Name" />
         </View>

      <  View style={globalStyles.view2}>
    

       <PhoneInput
   
       defaultValue={tel}
       defaultCode='IL'
       layout='first'
       withShadow
       autoFocus
       containerStyle={globalStyles.text0}
       textContainerStyle={{paddingVertical:0}}
       onChangeFormattedText={text=>{
        setTel(text);
       }} 
       />

       
        <TouchableOpacity onPress={()=> navigation.navigate('varfication',{tel})}>
          <Text style={globalStyles.text2}>Varyfication</Text>
        </TouchableOpacity>
        
       
        
        

   
       
        </View>

        <View style={globalStyles.view2} >


        
               
       
        <TouchableOpacity

          onPress={() => setShowDatePicker(true)}>
          <Icon name="calendar" style={globalStyles.tex5} />
      </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
           testID="datetimePicker"
            value={date}
            mode="date"
            display="spinner"
            onChange={onChangeDate}


         />
         
        )

        }







        {!showDatePicker && (
          <Pressable
          onPress={toggleDatepiccker} >

           <TextInput
             placeholder="Birithday Date for Child"

              value={birthdayDate}
              style={globalStyles.text12}
              onChangeText={setBirithdayDate}
              editable={false}
              placeholderText="bold"
              />
            
            </Pressable>
          
        )
        }


      </View>

      
     

     

       
        <View style={{ paddingHorizontal: 1, paddingTop: 1 }}>
        <SelectList
          setSelected={setCategory}
          save='value'
          data={categorys}
          placeholder={"kind Of Jalessa"}
         />



          </View>
         
      <View style={{ justifyContent: 'center' }} >
        <TouchableOpacity onPress={onSubmit}
          style={globalStyles.Touch11}>
          <Text style={globalStyles.context123}>Login </Text>
        </TouchableOpacity>
      </View>
       
       </View>
      </SafeAreaView>
    
  );
}





const styles = StyleSheet.create({
  content:{
    fontSize:20,
    fontFamily:'Roboto-MediumItalic',
    marginTop:10,
    marginBottom:20,
    marginHorizontal:20,
},
tel:{
    fontSize:18,
    fontFamily:'Roboto-MediumItalic',
    color:'gray',
},
otpContainer:{
    marginHorizontal:50,
    marginBottom:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
},
otpBox:{
    borderRadius:5,
    borderColor:'#AD40F',
    borderWidth:1,
},
otpText:{fontSize:25,
color:'black',
padding:0,
textAlign:'center',
paddingHorizontal:19,
 paddingVertical:10,
     },
     button:{
       
       //backgroundColor:'#AD40F',
       //borderRadius:8,
       //marginHorizontal:20,
       //justifyContent:'center',
       //alignItems:'center',
       //marginTop:20,


       borderRadius:50,
       backgroundColor: '#AD40AF',

         
        alignItems:"center",
        // marginTop:-90,
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
     buttonText:{
        fontWeight:'bold',
        fontSize:15,
        fontFamily:'Roboto-MediumItalic',
     }


})


export default Review;
