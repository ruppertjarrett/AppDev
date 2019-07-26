import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import NewsPicker from '../components/picker.js'
import News from '../components/news.js'

export default class NewsContainer extends Component {
    constructor(props) {    
        super(props);    
        this.state = {                 
          news:'espn',
          }; 
        this.updateNewsSource = this.updateNewsSource;
        this.grabNews();
      }  

      updateNewsSource = (newNews) => {this.setState({newNews})}

      handleChange(evt) {
        this.setState({news: evt.target.value.toLowerCase().replace(' ','-')});
      }
      handleSubmit(evt) {
        this.setState({news: this.state.news.toLowerCase().replace(' ','-')});
        this.setState({query: this.state.news});
        console.log('getting news from ', this.state.news);
        this.grabNews();
        evt.preventDefault();
      }
    
      changeNews = id => {
        this.setState({news: id}, function stateUpdateComplete(){
            console.log(id);
            this.grabNews();
        }.bind(this));
      }

      grabNews() {
          console.log('loading news');
          const API = '9f3ae244eb5741eebcef70c0bc79e546';
          const BASE_URL = 'https://newsapi.org/v2/everything?sources=';
          const PARAMS = `&apiKey=${API}`;
          let FETCH_URL = `${BASE_URL}${this.state.news}${PARAMS}`;
          console.log(FETCH_URL);
          fetch(FETCH_URL, {
            method: 'GET'
          })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            
            for(let i=0; i<10; i++){
              this.setState({['title_' + i]: json.articles[i].title});
              this.setState({['author_' + i]: json.articles[i].author});
              this.setState({['description_' + i]: json.articles[i].description});
              this.setState({['image_' + i]: json.articles[i].urlToImage});
              this.setState({['link_' + i]: json.articles[i].url});
            }
          });
        }
        
    render() {
        var news = [];
    for(let i = 0; i<10; i++){
        news.push(<News setNews={this.setNewsSource} />);
        return (
            <View style={styles.container}>
                <NewsPicker changeNews={this.changeNews} style={styles.newscontainer}></NewsPicker>
                <ScrollView style={styles.scroller}>
                {news}
                </ScrollView>    
            </View>
            );  
        }
    }
}
const styles = StyleSheet.create({
    scroller:{
      marginTop: 150,
      width: 350,
      height: 500,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
      },
      newscontainer: {
        backgroundColor: '#fab',
        height:500,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
      },
  });