import React from 'react';
// importing entire React library
// all about how different component work all together
// jsx elements
import { Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = (props) => {

  console.log(props);
  return <View>
  <Image source = {props.imageSource}/>
  <Text style={sty.textStyle}>{props.title}</Text>
  </View>
};

const sty = StyleSheet.create({
  textStyle:{
    fontSize:45
  }
});


export default ImageDetail;
//
