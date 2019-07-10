import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <View>
            <Image source={{url: 'https://drive.google.com/open?id=15WjOrTW17X-M7Gs3U3AB-wh4Up4jOE69'}} style={{width: 200, height: 200}}></Image>
            <Text>
                Form to know more about you!
            </Text>
        </View>
        )
    }


}