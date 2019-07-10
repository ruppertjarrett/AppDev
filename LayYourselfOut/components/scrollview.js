import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Submit from './submission.js';
import Header from './header.js';
import Personal from './personalInfo.js';
import Skills from './skills.js';

export default class Scroller extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <ScrollView  style={{height:2000}}>
        
        <Header></Header>
          <Personal></Personal>
          <Skills></Skills>
          <Submit></Submit>
        </ScrollView>
        )
    }


}