import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewsContainer from '../MobileNews/components/newsContainer.js'

export default function App() {
  return (
    <View style={styles.container}>
      <NewsContainer></NewsContainer>
      {/* <Text>
       https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=9f3ae244eb5741eebcef70c0bc79e546
       Linking.openURL();
       </Text> */}

       <Text>
       Powered by NewsAPI.org
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:2000,
    width:400
  },
});
