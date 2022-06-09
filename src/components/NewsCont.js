import React, { Component } from 'react'
import News from "./News";
export default class NewsCont extends Component {
    articles = [
      {
          "source": {
              "id": "news24",
              "name": "News24"
          },
          "author": "Heinz Schenk",
          "title": "How MS Dhoni inspired Proteas allrounder during IPL: 'Anything is possible'",
          "description": "Dwaine Pretorius is too level-headed to suddenly turn into a freewheeling cavalier, but the Proteas all-rounder now believes \"anything is always possible\" on a cricket field.",
          "url": "https://www.news24.com/sport/Cricket/Proteas/how-ms-dhoni-inspired-proteas-allrounder-during-ipl-anything-is-possible-20220607",
          "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3461/645b3d906ef24d5788c63d9cbfccf323.jpg",
          "publishedAt": "2022-06-07T07:18:38+00:00",
          "content": "<ul><li>Proteas all-rounder Dwaine Pretorius now truly believes anything is possible on a cricket field, thanks to MS Dhoni.</li><li>The legendary Indian skipper had a profound effect on the 33-year-… [+3613 chars]"
      },
      {
          "source": {
              "id": "bbc-sport",
              "name": "BBC Sport"
          },
          "author": "BBC Sport",
          "title": "Shane Warne memorial - watch & follow updates",
          "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
          "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
          "publishedAt": "2022-03-30T08:22:26.498888Z",
          "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
      },
      {
          "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
          "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
  ]
  constructor(){
      super();
      console.log('Nihir chandila');
      this.state = {
          articles: this.articles
      }
}
  render() {
    return (
      <div className="news-components mt-5 mb-5">
        <div className="container">
          <div className="row">
            {this.state.articles.map((element)=>{
              return(
                <News title={(element.title.split(" ").length>12)?element.title.split(" ").splice(0,12).join(" ")+"...":element.title} description={(element.description.split(" ").length>18)?element.description.split(" ").splice(0,18).join(" ")+"...":element.description} imageUrl={element.urlToImage} url="todo"/>)
            })}
          </div>
        </div>
      </div>
    )
  }
}
