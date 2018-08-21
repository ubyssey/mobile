import React, { Component, Fragment } from 'react';
import './Article.css';

class Article extends Component {
  convertToHTML(content) {
    return content;
  }

  render() {
    console.log(this.props.article.content)
    const toggledClass = this.props.expanded ? 'expanded' : 'collapsed';
    const image = require(`../../ubyssey.ca/${this.props.article.featuredImage}`);
    return (
      <div className="c-mobile-article">
      	<div className={`c-mobile-article__content ${toggledClass}`}>
          <h1 className="c-mobile-article__headline">{this.props.article.headline}</h1>
          <div className="c-mobile-article__info">
            <div className="c-mobile-article__info--left">
              <div className="c-mobile-article__author"><strong>{this.props.article.author}</strong></div>
            </div>
            <div className="c-mobile-article__info--right">
              <div className="c-mobile-article__date">
                {this.props.article.datePublished}
              </div>
              <div className="c-mobile-article__readtime">{this.props.article.readingTime} min read</div>
            </div>
          </div>
          <img src={image} />
          <div>
            {this.convertToHTML(this.props.article.content)}
          </div>
        </div>
      	{this.props.expanded ? '' : (<div id="gradient"></div>)}
      	{this.props.expanded ? '' : (<button onClick={() => this.props.onClick()}>Read full article</button>)}
      </div>
    );
  }
}

export default Article;
