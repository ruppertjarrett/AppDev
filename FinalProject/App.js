import React from 'react';
import { Button, View, Text, TextInput, Picker } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const mtg = require('mtgsdk');

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Magic The Gathering Card Search</Text>
        <Button
        title="Filter Search"
        onPress={() => this.props.navigation.navigate.FilteredSearchScreen()}
        />
      </View>
    );
  }
}

class FilteredSearchScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const set = navigation.getParam('set', 'All');
    const type = navigation.getParam('type', 'All');
    const colors = navigation.getParam('colors', 'All');
    const rarity = navigation.getParam('rarity', 'All');


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.goHome()}
        />
        <Text>Search For Cards</Text>
        
      </View>
    );
  }
}

class CardDetailScreen extends React.Component {
  constructor(props) {    
    super(props);
    const { navigation } = this.props;
    this.state = {
      CardName: navigation.getParam('cardName', ),
    }
  }
  render() {
    const { navigation } = this.props;
    // let numOfDice = navigation.getParam('numOfDice', '6');
    // let numOfSides = navigation.getParam('numOfSides', '6');
    // const results = navigation.getParam('results',"1, 2, 3, 4, 5, 6")

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>CardName</Text>
        <Text>CardType</Text>  
        <Text>CardManaCost</Text>  
        <Text>Picture of Card {JSON.stringify(numOfDice)}</Text>
        <Text>CardDescription</Text>
        <Button
          title="Find Online"
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
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    CardDetailScreen: CardDetailScreen,
    FilteredSearchScreen: FilteredSearchScreen,
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
