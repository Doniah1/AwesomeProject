import React from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import globalStyles from '../res/Styles/global';


const LoginMom = ({ navigation }) => {

  return (

    <SafeAreaView style={globalStyles.container}>
       <Image
          source={require('../../assests/School.png')}
          style={{ width: 400, height: 450}}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Review')}
          style={globalStyles.Touch11}>
          <Text style={globalStyles.Context1}>Parent Login</Text>
        </TouchableOpacity>



        <TouchableOpacity
          onPress={() => navigation.navigate('Review')}
          style={globalStyles.Touch11}>
          <Text style={globalStyles.Context1}>Login Jalessa</Text>
        </TouchableOpacity>


    </SafeAreaView>
  );
}
export default LoginMom;