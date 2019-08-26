import React, {Component} from 'react';
import { View, Text, Image} from 'react-native';
import Anchor from '../components/anchor.js'

export default class News extends Component {
    constructor(props) {    
        super(props);  
        console.log(this.props.title);  
        this.state = {                 
          link: this.props.link,
          title: this.props.title,
          image: this.props.image,
          description: this.props.description,
          author: this.props.author
          };  
      }  

      setNews = (link, title, image, description, author) => {
      }
      componentDidMount() {
        this.setNews("Link","title", "image", "description", "author");
    }  
    render() {
        return (
            <View>
                <View >
                    <Text h3>
                        <Anchor href={this.props.link}>
                            <Text>{this.props.title}</Text>
                        </Anchor>
                    </Text>
                <View>
                    <Anchor href={this.props.link}>
                        <Image source={{uri:this.props.image}} style={{width: 250, height: 250}} />
                    </Anchor>
                </View>
                <View >
                <Text>{this.props.description}</Text>
                </View>
                < View>
                    <Text>{this.state.author}</Text>
                </View>
                </View>
            </View>    
            );  
        }
    }