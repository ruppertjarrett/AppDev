import React from 'react';
import { Button, View, Text, TextInput, Picker, ScrollView, Image, Linking} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';

const mtg = "https://api.magicthegathering.io/v1";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor called');
    this.state = {
      fontLoaded: false,
      card_1: '',
      card_2: '',
      card_3: '',
      card_4: '',
      card_5: '',
      card_6: '',
      card_7: '',
      card_8: '',
      card_9: '',
      card_10: '',
      card_11: '',
      card_12: '',
      card_13: '',
      card_14: '',
      card_15: '',
      card_16: '',
      card_17: '',
      card_18: '',
      card_19: '',
      card_20: '',
      card_21: '',
      card_22: '',
      card_23: '',
      card_24: '',
      card_25: '',
      card_26: '',
      card_27: '',
      card_28: '',
      card_29: '',
      card_30: '',
      card_31: '',
      card_32: '',
      card_33: '',
      card_34: '',
      card_35: '',
      card_36: '',
      card_37: '',
      card_38: '',
      card_39: '',
      card_40: '',
      card_41: '',
      card_42: '',
      card_43: '',
      card_44: '',
      card_45: '',
      card_46: '',
      card_47: '',
      card_48: '',
      card_49: '',
      card_50: '',
    };
  }
  getData() {
    let num = Math.floor((Math.random() * 400)+1);
      let url = mtg + "/cards?page=" + num;
      fetch(url, {
          method: 'GET'
      }).then(response => response.json()).then(json => {
          this.setState({
            card_1: json.cards[0].name,
            card_2: json.cards[1].name,
            card_3: json.cards[2].name,
            card_4: json.cards[3].name,
            card_5: json.cards[4].name,
            card_6: json.cards[5].name,
            card_7: json.cards[6].name,
            card_8: json.cards[7].name,
            card_9: json.cards[8].name,
            card_10: json.cards[9].name,
            card_11: json.cards[10].name,
            card_12: json.cards[11].name,
            card_13: json.cards[12].name,
            card_14: json.cards[13].name,
            card_15: json.cards[14].name,
            card_16: json.cards[15].name,
            card_17: json.cards[16].name,
            card_18: json.cards[17].name,
            card_19: json.cards[18].name,
            card_20: json.cards[19].name,
            card_21: json.cards[20].name,
            card_22: json.cards[21].name,
            card_23: json.cards[22].name,
            card_24: json.cards[23].name,
            card_25: json.cards[24].name,
            card_26: json.cards[25].name,
            card_27: json.cards[26].name,
            card_28: json.cards[27].name,
            card_29: json.cards[28].name,
            card_30: json.cards[29].name,
            card_31: json.cards[30].name,
            card_32: json.cards[31].name,
            card_33: json.cards[32].name,
            card_34: json.cards[33].name,
            card_35: json.cards[34].name,
            card_36: json.cards[35].name,
            card_37: json.cards[36].name,
            card_38: json.cards[37].name,
            card_39: json.cards[38].name,
            card_40: json.cards[39].name,
            card_41: json.cards[40].name,
            card_42: json.cards[41].name,
            card_43: json.cards[42].name,
            card_44: json.cards[43].name,
            card_45: json.cards[44].name,
            card_46: json.cards[45].name,
            card_47: json.cards[46].name,
            card_48: json.cards[47].name,
            card_49: json.cards[48].name,
            card_50: json.cards[49].name,
          });
      });
  }
  async componentWillMount() {
    await Font.loadAsync({
      'noto-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
      'noto-sans-bold-italic': require('./assets/fonts/NotoSans-BoldItalic.ttf'),
      'noto-sans-regular': require('./assets/fonts/NotoSans-Regular.ttf'),
      'noto-sans-regular-italic': require('./assets/fonts/NotoSans-RegularItalic.ttf'),
    });
    this.setState({fontLoaded:true});
  }
  componentDidMount(){
    this.getData();
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
        {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'noto-sans-bold-italic', fontSize: 32 }}>
        MTG Card Search
      </Text>
    ) : null
  }
        <Button
            title="Randomize"
            onPress={() => {
             this.getData();
            }}
            />
          <Button
            title={this.state.card_1}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_1
              });
            }}
            />
          <Button
            title={this.state.card_2}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_2
              });
            }}
            />
          <Button
            title={this.state.card_3}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_3
              });
            }}
            />
          <Button
            title={this.state.card_4}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_4
              });
            }}
          />
          <Button
            title={this.state.card_5}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_5
              });
            }}
            />
          <Button
            title={this.state.card_6}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_6
              });
            }}
            />
          <Button
            title={this.state.card_7}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_7
              });
            }}
          />
          <Button
            title={this.state.card_8}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_8
              });
            }}
            />
          <Button
            title={this.state.card_9}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_9
              });
            }}
            />
          <Button
            title={this.state.card_10}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_10
              });
            }}
            />
          <Button
            title={this.state.card_11}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_11
              });
            }}
            />
          <Button
            title={this.state.card_12}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_12
              });
            }}
            />
          <Button
            title={this.state.card_13}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_13
              });
            }}
            />
          <Button
            title={this.state.card_14}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_14
              });
            }}
            />
          <Button
            title={this.state.card_15}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_15
              });
            }}
            />
          <Button
            title={this.state.card_16}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_16
              });
            }}
            />
          <Button
            title={this.state.card_17}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_17
              });
            }}
            />
          <Button
            title={this.state.card_18}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_18
              });
            }}
            />
          <Button
            title={this.state.card_19}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_19
              });
            }}
            />
          <Button
            title={this.state.card_20}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_20
              });
            }}
            />
          <Button
            title={this.state.card_21}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_21
              });
            }}
            />
          <Button
            title={this.state.card_22}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_22
              });
            }}
            />
          <Button
            title={this.state.card_23}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_23
              });
            }}
            />
          <Button
            title={this.state.card_24}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_24
              });
            }}
            />
          <Button
            title={this.state.card_25}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_25
              });
            }}
            />
          <Button
            title={this.state.card_26}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_26
              });
            }}
            />
          <Button
            title={this.state.card_27}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_27
              });
            }}
            />
          <Button
            title={this.state.card_28}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_28
              });
            }}
            />
          <Button
            title={this.state.card_29}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_29
              });
            }}
            />
          <Button
            title={this.state.card_30}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_30
              });
            }}
            />
            <Button
            title={this.state.card_31}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_31
              });
            }}
            />
          <Button
            title={this.state.card_32}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_32
              });
            }}
            />
          <Button
            title={this.state.card_33}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_33
              });
            }}
            />
          <Button
            title={this.state.card_34}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_34
              });
            }}
            />
          <Button
            title={this.state.card_35}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_35
              });
            }}
            />
          <Button
            title={this.state.card_36}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_36
              });
            }}
            />
          <Button
            title={this.state.card_37}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_37
              });
            }}
            />
          <Button
            title={this.state.card_38}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_38
              });
            }}
            />
          <Button
            title={this.state.card_39}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_39
              });
            }}
            />
          <Button
            title={this.state.card_40}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_40
              });
            }}
            />
            <Button
            title={this.state.card_41}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_41
              });
            }}
            />
          <Button
            title={this.state.card_42}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_42
              });
            }}
            />
          <Button
            title={this.state.card_43}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_43
              });
            }}
            />
          <Button
            title={this.state.card_44}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_44
              });
            }}
            />
          <Button
            title={this.state.card_45}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_45
              });
            }}
            />
          <Button
            title={this.state.card_46}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_46
              });
            }}
            />
          <Button
            title={this.state.card_47}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_47
              });
            }}
            />
          <Button
            title={this.state.card_48}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_48
              });
            }}
            />
          <Button
            title={this.state.card_49}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_49
              });
            }}
            />
          <Button
            title={this.state.card_50}
            onPress={() => {
              this.props.navigation.navigate('CardDetail', {
                cardName: this.state.card_50
              });
            }}
            />
        </ScrollView>
      </View>
    );
  }
}

class CardDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor called');
    this.state = {
      card_name: '',
      card_setName: '',
      card_cmc: '',
      card_manaCost: '',
      card_colors: '',
      card_image: '',
      card_power: '',
      card_toughness: '',
      card_rarity: '',
      card_text: '',
    };
  }
  getData(){
    const { navigation } = this.props;
    const cardName = navigation.getParam('cardName', 'Abundance');
    let url = mtg + "/cards?name=" + cardName;
    console.log(url);
    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(cardDetails => {
        this.setState({
          card_name: cardDetails.cards[0].name,
          card_setName: cardDetails.cards[0].setName,
          card_cmc: cardDetails.cards[0].cmc,
          card_manaCost: cardDetails.cards[0].manaCost,
          card_colors: cardDetails.cards[0].colors,
          card_image: cardDetails.cards[0].imageUrl,
          card_power: cardDetails.cards[0].power,
          card_toughness: cardDetails.cards[0].toughness,
          card_rarity: cardDetails.cards[0].rarity,
          card_text: cardDetails.cards[0].text,
        });
    });
    console.log(this.state.card_name);
  }
  componentDidMount() {
    this.getData();
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    let link = "https://shop.tcgplayer.com/magic/" + this.state.card_setName + "/" + this.state.card_name;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.card_name}</Text>
        <Image source={{url:this.state.card_image}} style={{width: 250, height: 350}} />
        <Text>{this.state.card_manaCost}</Text>
        <Text>{this.state.card_cmc}</Text>
        <Text>{this.state.card_colors}</Text>
        <Text>{this.state.card_power}</Text>
        <Text>{this.state.card_toughness}</Text>
        <Text>{this.state.card_text}</Text>
        <Text>{this.state.card_setName}</Text>
        <Text>{this.state.card_rarity}</Text>
        <Button
          title="Find Online"
          onPress={() => Linking.openURL(link)}
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
    CardDetail: CardDetailScreen,
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