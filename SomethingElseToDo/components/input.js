import React, {Component} from 'react';
import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter Tasks Here' };
    this.submit = this.submit.bind(this);
  }

  submit() {
    _storeData = async () => {
      try {
        await AsyncStorage.setItem(this.state.text.valueOf().toString,this.state.text.valueOf().toString);
      } catch (error) {
        // Error saving data
      }
    };
    this.props.onPress;
    AsyncStorage.getItem(this.state.text.valueOf().toString);
  }

  render() {
    return (
      // <TouchableOpacity
      //   onPress={this.submit} >
      //     <Text>Add To List</Text>
      // </TouchableOpacity>
    <View>
        <TextInput
        style={{ height: 40, borderColor: '#fff', backgroundColor: "#303030", color:"#fff", borderWidth: 1 }}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        />
        <TouchableOpacity
        onPress={this.submit} style={{backgroundColor: '#303030', justifyContent: 'center' }}>
          <Text style={{height:50,width:200, fontSize:24,color: '#fff'}}>Add To List</Text>
      </TouchableOpacity>
    </View>
    );
  }

}