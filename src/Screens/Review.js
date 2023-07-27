import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Platform, Alert } from 'react-native';
import ScreenNames from '../../route/ScreenNames';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

import globalStyles from '../res/Styles/global';

import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list';
import { creatUser } from '../res/api';








const Review = ({ navigation }) => {

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [birthdayDate, setBirithdayDate] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [subcategory, setSubCategory] = useState('');





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
      Alert.alert("Massad", "The Field is empyy")
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

      <View style={globalStyles.view2}>

        <TextInput placeholder='Number Tel'
          value={tel}
          onChangeText={setTel}
          style={globalStyles.text12} keyboardType="numeric"

        />

        <TouchableOpacity onPress={() => { }}>
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
            testID="dateTimePicker"
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
    </SafeAreaView >

  );
}







export default Review;
