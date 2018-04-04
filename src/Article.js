import React, { Component } from 'react';
import './Article.css';

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
