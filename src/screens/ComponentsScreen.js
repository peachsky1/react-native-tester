import React from 'react';
// importing entire React library
// all about how different component work all together
// jsx elements
import { Text, StyleSheet, View} from 'react-native';



const ComponentsScreen = () => {
  const name = 'Jason'
  return <View>
  <Text style={sty.textStyle}>Getting started with React Native!</Text>
  <Text>My name is {name}</Text>
  </View>
};

const sty = StyleSheet.create({
  textStyle:{
    fontSize:45
  }
});


export default ComponentsScreen;
//
