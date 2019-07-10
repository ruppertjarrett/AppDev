import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Picker} from 'react-native';

export default class Personal extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <View>
            <TextInput>
                Name
            </TextInput>
            <TextInput>
                StreetAddress
            </TextInput>
            <TextInput>
                City
            </TextInput>
            <TextInput>
                State
            </TextInput>
            <TextInput>
                ZipCode
            </TextInput>
            <TextInput>
                Email
            </TextInput>
            <TextInput>
                PhoneNumber
            </TextInput>
            <Picker>
                Gender
            </Picker>
        </View>
        )
    }


}