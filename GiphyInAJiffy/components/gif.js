import React, {
    Component
} from 'react';
import {
    View,
    Button,
    Image,
    Text
} from 'react-native';
export default class Giphy extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor called');
        this.state = {};
    }
    getData() {
        let url = `http://api.giphy.com/v1/gifs/search?api_key=PMuL1yQY3C9GzsrwaHN1my1FZXToFFNH&q=${this.props.search}&limit=10`;
        let num = Math.floor(Math.random() * 10);
        fetch(url, {
            method: 'GET'
        }).then(response => response.json()).then(json => {
            this.setState({
                gif: json.data[num].images.downsized_medium.url,
            });
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
            return ( 
            <View>
            <Image source={{url:this.state.gif}} style={{width: 250, height: 250}}/>
            <Text>Powered By GIPHY</Text>
            <Button onPress={() => {this.getData()}} title="Hopefully good GIF!" style={{width:100, height: 50, backgroundColor:'#fff'}}/> 
            </View>
            );  
        }
    }