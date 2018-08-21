import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    const toggledClass = this.props.expanded ? 'expanded' : 'collapsed';
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
          <img src={this.props.article.featuredImage} />
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
