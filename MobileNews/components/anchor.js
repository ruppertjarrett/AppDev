import React from 'react';
import { Linking, Text } from 'react-native';

export default class Anchor extends React.Component {
  _handlePress = () => {
    if(!this.props.href == ''){
        Linking.openURL(this.props.href);
        this.props.onPress && this.props.onPress();
    }
  };

  render() {
    return (
      <Text {...this.props} onPress={this._handlePress}>
        {this.props.children}
      </Text>
    );
  }
}