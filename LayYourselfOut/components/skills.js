import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Slider} from 'react-native';

export default class Skills extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <View>
            <Slider>
                Coding
            </Slider>
            <Slider>
                Athletism
            </Slider>
            <Slider>
                Gaming
            </Slider>
            <Slider>
                Driving
            </Slider>
            <Slider>
                Cooking
            </Slider>
        </View>
        )
    }


}