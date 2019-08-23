import React, {Component} from 'react';
import { View, Text, Image} from 'react-native';
import Anchor from '../components/anchor.js'

export default class News extends Component {
    constructor(props) {    
        super(props);    
        this.state = {                 
          link: "",
          title: "",
          image: "",
          description: "",
          author: ""
          };  
      }  

      setNews = (link, title, image, description, author) => {
          this.state.link = link;
          this.state.title =title;
          this.state.image = image;
          this.state.description = description;
          this.state.author = author;
      }
        
    render() {
        return (
            <View>
                <View >
                    <Text h3>
                        <Anchor href={this.state.link}>
                            <Text>{this.state.title}</Text>
                        </Anchor>
                    </Text>
                <View>
                    <Anchor href={this.state.link}>
                        <Image source={{url:this.state.image}} style={{width: 250, height: 250}} />
                    </Anchor>
                </View>
                <View >
                <Text>{this.state.description}</Text>
                </View>
                < View>
                    <Text>{this.state.author}</Text>
                </View>
                </View>
            </View>    
            );  
        }
    }