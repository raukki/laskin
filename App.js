import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const buttonPressedMinus = () => {
    let result = number1 - number2; 
    return result;
    };


  const buttonPressedPlus = () => { 
    let result = number1 + number2; 
    return result;
  };

  const equation = () => {
    if (buttonPressedMinus === null){
      return buttonPressedPlus
    };
    if(buttonPressedPlus === null){
      return buttonPressedMinus
    }
  };

  return (
    <View style={styles.container}>
      <Text>Result: {equation}</Text>
      <TextInput style={styles.input} onChangeText={text => setNumber1(text)} value={number1}/>
      <TextInput style={styles.input} onChangeText={text => setNumber2(text)} value={number2}/>
      <Button onPress={buttonPressedMinus} title="-" />
      <Button onPress={buttonPressedPlus} title="+" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
