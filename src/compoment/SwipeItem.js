import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import globalStyles from '../res/Styles/global'



export default SwipeItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[globalStyles.container1, { width }]}>
      <Image source={item.image} style={[globalStyles.image, { width, resizeMode: 'contain' }]} />
      <View style={{ flex: 0.3 }}>
        <Text style={globalStyles.title}>{item.title}</Text>
        <Text style={globalStyles.description}>{item.description}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})