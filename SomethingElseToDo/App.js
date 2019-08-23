import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Entry from '../SomethingElseToDo/components/entry.js';
import Input from '../SomethingElseToDo/components/input.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>a</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      {/* <Input style={styles.input}></Input> */}
      <Entry style={styles.entry}></Entry>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 100,
    width: 300,
  },
  entry: {
    flex: 1,
    height: 500,
    width:1000,
  },
});
