import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      articleExpanded: false,
      articles: [
        {
          articleId: 0,
          headline: 'Article headline here (#0)',
          author: 'Firstname Lastname',
          datePublished: new Date('04/04/2018'),
          readingTime: '5',
          featuredImage: './image-3-medium.jpg',
          category: 'Insert Category Here',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 1,
          headline: 'This is article #1',
          author: 'Author #1',
          datePublished: new Date('10/31/2017'),
          readingTime: '4',
          featuredImage: './Image1.jpg',
          category: 'Category #1',
          content: 'contents of article #1',
        },
        {
          articleId: 2,
          headline: 'This is article #2',
          author: 'Article Author #2',
          datePublished: new Date('11/30/2017'),
          readingTime: '3',
          featuredImage: './Image2.jpg',
          category: 'Category #2',
          content: 'contents of article #2',
        },
        {
          articleId: 3,
          headline: 'This is article #3',
          author: 'Article Author #3',
          datePublished: new Date('12/31/2017'),
          readingTime: '2',
          featuredImage: './Image3.jpg',
          category: 'Category #3',
          content: 'contents of article #3',
        },
        {
          articleId: 4,
          headline: 'This is article #4',
          author: 'Article Author #4',
          datePublished: new Date('01/31/2018'),
          readingTime: '1',
          featuredImage: './Image4.jpg',
          category: 'Category #4',
          content: 'contents of article #4',
        },
        {
          articleId: 5,
          headline: 'This is article #5',
          author: 'Article Author #5',
          datePublished: new Date('02/28/2018'),
          readingTime: '0',
          featuredImage: './Image5.jpg',
          category: 'Category #5',
          content: 'contents of article #5',
        },
      ],
    };
  }

  handleArticleClick(index) {
    this.setState({
      selected: index,
      articleExpanded: false,
    });
  }

  handleButtonClick() {
    this.setState({
      articleExpanded: !this.state.articleExpanded,
    });
  }

  getCurrentArticle() {
    return this.state.articles[this.state.selected];
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Article
          expanded={this.state.articleExpanded}
          article={this.getCurrentArticle()}
          onClick={() => this.handleButtonClick()} />
        <Footer
          selected={this.state.selected}
          articles={this.state.articles}
          onClick={(i) => this.handleArticleClick(i)} />
      </div>
    );
  }
}

export default App;
