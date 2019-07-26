import React, {Component} from 'react';
import { View, Text, Picker } from 'react-native';

export default class NewsPicker extends Component {
    constructor(props) {    
          super(props);    
          this.state = {        
              news: "espn",       
              news_idx: 0    
            };  
          this.update(this.state.news);
        }  

        update = (val) => {
            this.props.changeNews(val);
        }
        
    render() {
        return (
            <View>
                <Text>What news source do you wish to browse?</Text>
                <Picker selectedValue={this.state.news} style={{height: 50, width: 400}} onValueChange={(val, idx, e) => {
                    this.setState({news: val});
                    this.setState({news_idx: idx}); 
                    this.update(val);
                }}>
                    <Picker.Item label="ESPN" value="espn" />
                    <Picker.Item label="BBC Sport" value="bbc-sport" />
                    <Picker.Item label="Fox Sports" value="fox-sports" /> 
                    <Picker.Item label="TalkSport" value="talksport" />
                    <Picker.Item label="The Sport Bible" value="the-sport-bible" />
                    <Picker.Item label="NFL News" value="nfl-news" />
                    <Picker.Item label="NHL News" value="nhl-news" />
                    <Picker.Item label="Bleacher Report" value="bleacher-report" />
                    <Picker.Item label="Football Italia" value="football-italia" />
                    <Picker.Item label="ESPN Cric Info" value="espn-cric-info" />
                </Picker>
            </View>    
            );  
        }
    }