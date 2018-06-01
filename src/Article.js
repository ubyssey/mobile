import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.articleContent = React.createRef();
  }

  componentDidUpdate() {
    console.log(this._div);
    this.articleContent.current.scrollTop = 0;
  }

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
    const toggledClass = this.props.isExpanded ? 'expanded' : 'collapsed';
    const image = require(`${this.props.article.featuredImage}`);
    return (
      <div className="c-mobile-article">
      	<div ref={this.articleContent} className={`c-mobile-article__content ${toggledClass}`}>
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
      	{this.props.isExpanded ? '' : (<div id="gradient"></div>)}
      	{this.props.isExpanded ? '' : (<button onClick={() => this.props.onClick()}>Read full article</button>)}
      </div>
    );
  }
}

export default Article;
