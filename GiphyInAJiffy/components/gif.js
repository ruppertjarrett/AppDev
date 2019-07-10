import React, {
    Component
} from 'react';
import {
    View,
    Button,
    Image
} from 'react-native';
export default class Giphy extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor called');
        this.state = {};
    }
    getData() {
        let url = "https://api.chucknorris.io/jokes/random";
        fetch(url, {
            method: 'GET'
        }).then(response => response.json()).then(json => {
            this.setState({
                gif: json.value
            });
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
            return ( 
            <View>
            <Image url={this.state.gif}>
            </Image>        
            <Button onPress={() => {this.getData()}} title="Hopefully good GIF!" /> 
            </View>
            );  
        }
    }