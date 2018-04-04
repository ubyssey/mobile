import React, { Component } from 'react';
import './Article.css';
import featuredimage from './image-3-medium.jpg';

class Article extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  content: this.getContent(),
  	  expanded: false,
  	}
  }

  getContent() {
  	return (
  	  <div>
	      <h1>Article headline here</h1>
        <div className="c-mobile-article__info">
          <div className="c-mobile-article__info--left">
            <div className="c-mobile-article__author"><b>Written by Firstname Lastname</b></div>
          </div>
          <div className="c-mobile-article__info--right">
            <div className="c-mobile-article__date">April 4, 2018</div>
            <div className="c-mobile-article__readtime">5 min read</div>
          </div>
        </div>
        <img src={featuredimage} />
	  	  <p>
	        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	      	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	      </p>
      </div>
    )
  }

  handleButtonClick() {
  	const { expanded } = this.state.expanded;
  	this.setState({ expanded: !expanded });
  }

  render() {
  	const toggledClass = this.state.expanded ? 'expanded' : 'collapsed';
    return (
      <div className="c-mobile-article">
      	<div className={`c-mobile-article__content ${toggledClass}`}>
      		{this.state.content}
      	</div>
      	{this.state.expanded ? '' : (<div id="gradient"></div>)}
      	{this.state.expanded ? '' : (<button onClick={() => this.handleButtonClick()}>Read full article</button>)}
      </div>
    );
  }
}

export default Article;
