import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  getDatePublished() {
    return (
      new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(this.props.article.datePublished)
    );
  }

  render() {
    const toggledClass = this.props.expanded ? 'expanded' : 'collapsed';
    const image = require(`${this.props.article.featuredImage}`);
    return (
      <div className="c-mobile-article">
      	<div className={`c-mobile-article__content ${toggledClass}`}>
          <h1 className="c-mobile-article__headline">{this.props.article.headline}</h1>
          <div className="c-mobile-article__info">
            <div className="c-mobile-article__info--left">
              <div className="c-mobile-article__author"><strong>Written by {this.props.article.author}</strong></div>
            </div>
            <div className="c-mobile-article__info--right">
              <div className="c-mobile-article__date">
                {this.getDatePublished()}
              </div>
              <div className="c-mobile-article__readtime">{this.props.article.readingTime} min read</div>
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
