import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const ListScreen = () => {
  const friends = [
    { name: 'Friend1', age: '21'},
    { name: 'Friend2', age: '21'},
    { name: 'Friend3', age: '21'},
    { name: 'Friend4', age: '22'},
    { name: 'Friend5', age: '21'},
    { name: 'Friend6', age: '21'},
    { name: 'Friend7', age: '21'}
  ];

  return (<FlatList
    keyExtractor={(friend)=>friend.name}
    data={friends}
    renderItem = {({ item }) => {
      // element ==={item:{name: 'friend'}, index: 0}
      return <Text>{item.name} - {item.age}</Text>;
      }} />
    );
  };


  const styles = StyleSheet.create({});

  export default ListScreen;
