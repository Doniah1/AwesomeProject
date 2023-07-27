import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import slide from './slide'
import MessageList from '../compoment/MessageList'

const Massages=({navigation})=> {
  return (
    <View style={{flex:1,paddingLeft:20,paddingRight:20,alignItems:'center',backgroundColor:"#ffffff"}}>
    <FlatList
      data={slide}
     
      
      
     renderItem={({ item }) => <MessageList item={item} />}
     keyExtractor={item => item.id}>
    

    

      </FlatList>
      </View>
  )
}

const styles = StyleSheet.create({})

export default Massages;
