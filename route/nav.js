import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenNames from './ScreenNames';
import Home from '../src/Screens/Home';
import Review from '../src/Screens/Review';
import LoginMom from '../src/Screens/LoginMom';
import Icon from 'react-native-vector-icons';
import { create } from 'react-test-renderer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import HomeScreen1 from '../src/Screens/HomeScreen1';
import Profile from '../src/Screens/Profile';
import Reservation from '../src/Screens/Reservation';
import Massages from '../src/Screens/Massages';
import TabNavigator from './ tabNav';
import Swipe from '../src/compoment/Swipe';
import JalessaListDetails from '../src/compoment/JalessaListDetails';
import JalessaItem from '../src/compoment/JalessaItem';
import Disscsion from '../src/compoment/Disscsion';








const MainNavigotar = () =>{

    
const Stack = createNativeStackNavigator();

   
    return (
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen name="swipe" component={Swipe}  options={{headerShown:false}}/>

                <Stack.Screen name="home" component={Home}  options={{headerShown:false}}/>
                <Stack.Screen name="LoginMom" component={LoginMom}  options={{headerShown:false}}/> 
                <Stack.Screen name="Review" component={Review}  options={{headerShown:false}}/>
                <Stack.Screen name="tabs" component={TabNavigator} options={{headerShown:false ,tabBarItemStyle:{display:"none"}}}/>
                <Stack.Screen name="JalessaListDetails" component={JalessaListDetails}  options={{headerShown:false}}/> 
                <Stack.Screen name="HomeScreen1" component={HomeScreen1}  options={{headerBackVisible:false}}/> 
                <Stack.Screen name="Massage" component={Massages} 
                 /> 
                 
                 <Stack.Screen name="Disscsion" component={Disscsion}  
                   options={({route})=>({
                    title:route.params.name,
                    headerBackTitleVisible:false
                 })}
                 /> 
             
               

            </Stack.Navigator> 
            

        </NavigationContainer >
    );
};
export default MainNavigotar;