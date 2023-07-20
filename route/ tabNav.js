import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen1 from "../src/Screens/HomeScreen1";
import LoginMom from "../src/Screens/LoginMom";
import Massages from "../src/Screens/Massages";
import Profile from "../src/Screens/Profile";
import Reservation from "../src/Screens/Reservation";
import ScreenNames from "./ScreenNames";


import Icon from "react-native-vector-icons/AntDesign";


const Tab = createBottomTabNavigator();
const TabNavigator= () =>{


   


    return(
        <Tab.Navigator 
        tabBarOptions={{
                activeTintColor: 'black',
                  inactiveTintColor: 'black',
                  showLabel: false,
                  style: {
                     backgroung: '#ffc125',
                      height: 60,
                  }

              }}
              
        

        
            
           // screenOptions={({route}) => ({
             //    tabBarIcon: (iconProps )=> {
               //      var icon = tabNames(iconProps)[route.name]
                 //    console.log("icon: " , icon , "screenName: " , route.name);
                   //   return <Icon {...icon} />
                // }
             //})}

               // screenOptions={({ route }) => ({
                 //    tabBarIcon: ({ focused, size, color }) => {
                   //      let iconName;
                     //    if (route.name === 'HomeSreen1') {
                       //      iconName = focused ? 'ios-home' : 'ioshome-outline';
                            // size = focused ? size + 8 : size + 5;
                        // } else if (route.name === 'Reservation') {
                          //   iconName = focused ? 'ios-home' : 'ioshome-outline';
                            // size = focused ? size + 8 : size + 5;
                        // } if (route.name === 'Massages') {
                          //   iconName = focused ? 'ios-home' : 'ioshome-outline';
                            // size = focused ? size + 8 : size + 5;
                        // } if (route.name === 'Profile') {
                          //   iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                            // size = focused ? size + 8 : size + 5;
                        // }
                         //return <Icon name={iconName} size={size} color={color} />
                    // }
                // })
                // }
               //  tabBarOptions={{
               //      activeTintColor: 'black',
                 //    inactiveTintColor: 'black',
                   //  showLabel: false,
                    // style: {
                      //  backgroung: '#ffc125',
                        // height: 60,
                    // }

                 //}}
                
                >


                   <Tab.Screen name={ScreenNames.Home1} component={HomeScreen1} options={{
                    tabBarIcon:({color,size})=>(
                <Icon name="home" color={color} size={size}/>
                    )
                }}
            />

             
        
                     < Tab.Screen name={ScreenNames.Massage} component={Massages} options={{
                     tabBarIcon:({color,size})=>(
                     <Icon name="mail" color={color} size={size}/>
                       ) 
                          }}
                          />
         
                

                 
               
                    <Tab.Screen name={ScreenNames.Profile1} component={Profile} options={{
                    tabBarIcon:({color,size})=>(
                <Icon name="user" color={color} size={size}/>
                    ) 
              }}/>
                 
       
            <Tab.Screen name="Home1" component={HomeScreen1} options={{headerShown:false ,tabBarItemStyle:{display:"none"}}}/>


            </Tab.Navigator>

    )

}

export default TabNavigator ; 