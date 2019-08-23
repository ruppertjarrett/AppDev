import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Giphy from '../GiphyInAJiffy/components/gif.js';
import { AuthSession } from 'expo';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
      <Text>Coding</Text>
      <Giphy search="coding" style={styles.giphy}></Giphy>
      <Text>Fun</Text>
      <Giphy search="fun" style={styles.giphy}></Giphy>
      <Text>Puppy</Text>
      <Giphy search="puppy" style={styles.giphy}></Giphy>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95c5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroller:{
    marginTop: 50,
    width: 350,
    height: 500,
  },
  giphy:{
    width: 250,
    height: 250,
    paddingLeft: 50
  }
});
