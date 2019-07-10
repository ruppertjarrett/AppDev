import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Scroller from './components/scrollview.js';

export default function App() {
    return (
      <View style={styles.container}>
      <Text>
        HEY
      </Text>
        <Scroller style={{height:2000, width: 200}}>
        </Scroller>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fab',
    alignItems: 'center',
    justifyContent: 'center',
    height:200,
  },
  personalInfo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skills: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submission: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
