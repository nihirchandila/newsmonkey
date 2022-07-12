import React, { Component } from 'react'
import News from "./News";
export default class NewsCont extends Component {
  articles = [];
  constructor(){
      super();
      this.state = {
          articles: this.articles
      }
      console.log('constructor');
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c4d8498632d44fb4a298f390b240961c";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }
  render() {
    console.log('render');
    return (
      <div className="news-components mt-5 mb-5">
        <div className="container">
          <div className="row">
            {this.state.articles.map((element)=>{
              return <News key={element.url} newsUrl={element.url} title={(element.title.split(" ").length>12)?element.title.split(" ").splice(0,12).join(" ")+"...":element.title} description={(element.description.split(" ").length>18)?element.description.split(" ").splice(0,18).join(" ")+"...":element.description} imageUrl={element.urlToImage} url="todo"/>
                
            })}
          </div>
        </div>
      </div>
    )
  }
}
