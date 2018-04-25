import React, { Component } from 'react';
import './Article.css';
import featuredimage from './image-3-medium.jpg';

class Article extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  expanded: false,
  	}
  }

  handleButtonClick() {
  	const { expanded } = this.state.expanded;
  	this.setState({ expanded: !expanded });
  }

  render() {
  	const toggledClass = this.state.expanded ? 'expanded' : 'collapsed';
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
      	{this.state.expanded ? '' : (<div id="gradient"></div>)}
      	{this.state.expanded ? '' : (<button onClick={() => this.handleButtonClick()}>Read full article</button>)}
      </div>
    );
  }
}

export default Article;
