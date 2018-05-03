import React, { Component } from 'react';
import './Article.css';
import featuredimage from './image-3-medium.jpg';

class Article extends Component {
  render() {
  	const toggledClass = this.props.expanded ? 'expanded' : 'collapsed';
    var image = require(`${this.props.article.featured_image}`);
    return (
      <div className="c-mobile-article">
      	<div className={`c-mobile-article__content ${toggledClass}`}>
          <h1>{this.props.article.headline}</h1>
          <div className="c-mobile-article__info">
            <div className="c-mobile-article__info--left">
              <div className="c-mobile-article__author"><b>Written by {this.props.article.author}</b></div>
            </div>
            <div className="c-mobile-article__info--right">
              <div className="c-mobile-article__date">
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }).format(this.props.article.date_published)}
              </div>
              <div className="c-mobile-article__readtime">{this.props.article.reading_time} min read</div>
            </div>
          </div>
          <img src={image} />
          <p>
            {this.props.article.content}
          </p>
        </div>
      	{this.props.expanded ? '' : (<div id="gradient"></div>)}
      	{this.props.expanded ? '' : (<button onClick={() => this.props.onClick()}>Read full article</button>)}
      </div>
    );
  }
}

export default Article;
