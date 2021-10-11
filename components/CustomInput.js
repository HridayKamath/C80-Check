import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const CustomInput = (props) => (
  <Input
    containerStyle={[styles.input, props.styles]}
    inputContainerStyle={{ borderWidth: 1, height: 55 }}
    placeholder={props.placeholder}
    placeholderTextColor={props.placeholderTextColor}
    onChangeText={props.onChangeText}
   
    {...props}
  />
);

export default CustomInput;
const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 100,
    alignItems: 'center',
    marginTop: 15,
  },
});
