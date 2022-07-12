import React, { Component } from 'react'

export default class News extends Component {

  render() {
      let {title, description, imageUrl, newsUrl}= this.props;
    return (
        <>
            <div className="card col-md-4 mb-5">
                <img src={imageUrl} style={{height: '250px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p></p>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </>
    )
  }
}
