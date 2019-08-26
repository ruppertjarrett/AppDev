import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button} from 'react-native';
import NewsPicker from '../components/picker.js'
import News from '../components/news.js'

export default class NewsContainer extends Component {
    constructor(props) {    
        super(props);    
        this.state = {                 
          news:'espn',
          title_1:'',
          author_1:'',
          description_1:'',
          image_1:'',
          link_1:'',
          title_2:'',
          author_2:'',
          description_2:'',
          image_2:'',
          link_2:'',
          title_3:'',
          author_3:'',
          description_3:'',
          image_3:'',
          link_3:'',
          title_4:'',
          author_4:'',
          description_4:'',
          image_4:'',
          link_4:'',
          title_5:'',
          author_5:'',
          description_5:'',
          image_5:'',
          link_5:'',
          title_6:'',
          author_6:'',
          description_6:'',
          image_6:'',
          link_6:'',
          title_7:'',
          author_7:'',
          description_7:'',
          image_7:'',
          link_7:'',
          title_8:'',
          author_8:'',
          description_8:'',
          image_8:'',
          link_8:'',
          title_9:'',
          author_9:'',
          description_9:'',
          image_9:'',
          link_9:'',
          title_10:'',
          author_10:'',
          description_10:'',
          image_10:'',
          link_10:'',
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
              this.setState({
                title_1: json.articles[0].title
              });
              this.setState({
                author_1: json.articles[0].author
              });
              this.setState({
                link_1: json.articles[0].url
              });
              this.setState({
                image_1: json.articles[0].urlToImage
              });
              this.setState({
                description_1: json.articles[0].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });

              this.setState({
                title_2: json.articles[1].title
              });
              this.setState({
                author_2: json.articles[1].author
              });
              this.setState({
                link_2: json.articles[1].url
              });
              this.setState({
                image_2: json.articles[1].urlToImage
              });
              this.setState({
                description_2: json.articles[1].description
              });
              
              console.log(this.state.title_1.toString());
          });
          
        }
        
    render() {
        return (
            <View style={styles.container}>
                <NewsPicker changeNews={this.changeNews} style={styles.newscontainer}></NewsPicker>
                <Button onPress={() => {this.grabNews()}} title="View News" style={{width:100, height: 50, backgroundColor:'#95c5f9'}}/> 
                <ScrollView style={styles.scroller}>
                <News link={this.state.link_1} author={this.state.author_1} description={this.state.description_1} image={this.state.image_1} title={this.state.title_1}></News>
                <News link={this.state.link_2} author={this.state.author_2} description={this.state.description_2} image={this.state.image_2} title={this.state.title_2}></News>
                </ScrollView>    
            </View>
            );  
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