import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect, useCallback} from 'react'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons';


const  Disscsion=()=> {

 const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello ,Can i help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../../assests/Donia1.jpeg'),
        },
      },
      {
        _id: 2,
        text: 'Hello ',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: require('../../assests/Donia1.jpeg'),
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, []);

const renderSend =(props)=>{
  return(
    <Send
    {...props}>
    <View>
    <Icon 
    name="send-circle"
    style={{marginBottom:5,marginRight:5}}
    size={32}
    color='gray'
    />
    </View>
    </Send>
  );
};
  const renderBubble=(props)=>{
    return(
    <Bubble
    {...props}
    wrapperStyle={{
      right:{
        backgroundColor:'gray'
      }
    }}
    textStyle={{
      right:{
        color:'#fff'
      }
    }}
    />
    );
  }

const scrollToBottomComponent = ()  =>{
  return(
    <FontAwesome name='angle-double-down' size={22} color='#333'/>

  );
}
  
  return (
     <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
    renderBubble={renderBubble}
    alwaysShowSend
    renderSend={renderSend}
    scrollToBottom
    scrollToBottomComponent={scrollToBottomComponent}
  />
  );
}
  

export default Disscsion;
const styles = StyleSheet.create({})