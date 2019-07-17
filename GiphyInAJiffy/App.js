import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Giphy from gif.js;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Coding</Text>
      <Giphy search="coding"></Giphy>
      <Text>Fun</Text>
      <Giphy search="fun"></Giphy>
      <Text>Puppy</Text>
      <Giphy search="puppy"></Giphy>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
