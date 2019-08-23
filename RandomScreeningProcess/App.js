import React from 'react';
import { Button, View, Text, TextInput, Picker } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Dice Roll"
          onPress={() => {
            this.props.navigation.navigate('DiceRoll', {
            });
          }}
        />
        <Button
          title="Magic 8-Ball"
          onPress={() => {
            this.props.navigation.navigate('Magic8Ball', {
              phrase: "Ask me anything!",
            });
          }}
        />
      </View>
    );
  }
}

class DiceRollScreen extends React.Component {
  constructor(props) {    
    super(props);
    const { navigation } = this.props;
    this.state = {
      numOfSides: navigation.getParam('numOfSides', '6'),
      numOfDice: navigation.getParam('numOfDice', '6'),
    }
  }
  render() {
    const { navigation } = this.props;
    let numOfDice = navigation.getParam('numOfDice', '6');
    let numOfSides = navigation.getParam('numOfSides', '6');
    const results = navigation.getParam('results',"1, 2, 3, 4, 5, 6")

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dice Roll</Text>
        <Text>Number of Dice: {JSON.stringify(numOfDice)}</Text>
        <Text>Number of Sides: {JSON.stringify(numOfSides)}</Text>
        <Text>Results: {JSON.stringify(results)}</Text>
        
        <Text>
        Number Of Dice For Next Roll:
        </Text>
        <TextInput style={{height: 50, width: 300, borderWidth: 1 }}
        onChangeText={text => this.setState({numOfDice: text})}
        value={this.state.numOfDice}></TextInput>
        <Text>
        Number Of Sides For Next Roll:
        </Text>
        <Picker
          selectedValue={this.state.numOfSides}
          style={{height: 50, width: 300, marginBottom: 50}}
          onValueChange={(val) => {
            this.setState({numOfSides: val});
          }}>
          <Picker.Item label="4" value="4" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="100" value="100" />
        </Picker>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button
          title="Roll again"
          onPress={() =>{
            let rollResults = "";
            for(var i = 0; i < parseInt(this.state.numOfDice); i++){
              rollResults += `${Math.floor(Math.random() * parseInt(this.state.numOfSides))+1}, `;
            }
            this.props.navigation.push('DiceRoll', {
              numOfDice: this.state.numOfDice,
              numOfSides: this.state.numOfSides,
              results: rollResults,
            })
          }
          }
        />
        <Button
          title="Return Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class Magic8BallScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const phrase = navigation.getParam('phrase', 'Ask me anything!');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Magic 8-Ball</Text>
        <Text>Answer: {JSON.stringify(phrase)}</Text>
        <Button
          title="Gain Knowledge"
          onPress={() => {
            let num = Math.floor(Math.random() * 20);
            let phraseArr = [
              "It is certain",
              "It is decidely so",
              "Without a doubt",
              "Yes - definitely",
              "As I see it, yes",
              "Most likely",
              "Outlook good",
              "Yes",
              "Signs point to yes",
              "Reply hazy, try again",
              "Ask Again Later",
              "Better not tell you now",
              "Cannot predict now",
              "The stars are not aligned for this prophecy",
              "Don't count on it",
              "My reply is no",
              "My sources say no",
              "Outloook not so good",
              "Highly doubtful",
              "Not a chance... like... ever!"
            ];
            this.props.navigation.navigate('Magic8Ball', {
              phrase: phraseArr[num],
            });
          }}
        />
        <Button
          title="Return Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    DiceRoll: DiceRollScreen,
    Magic8Ball: Magic8BallScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}