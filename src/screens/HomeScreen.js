import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation})=> {


  //console.log(props.navigation.navigate)

  return (<View>
  <Text style={styles.text}>HomeScreen</Text>
  <Button
    onPress = {() => navigation.navigate("Components")}
    title="Go to the Components"
    />
  <Button
    onPress = {()=> navigation.navigate('List')}
    title = "List"
    />
  <Button
    onPress = {()=> navigation.navigate('Image')}
    title = "Image screen"
    />
</View>);
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

  export default HomeScreen;
