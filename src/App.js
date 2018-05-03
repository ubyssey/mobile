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
      article_expanded: false,
      articles: [
        {
          article_id: 0,
          headline: 'Article headline here (#0)',
          author: 'Firstname Lastname',
          date_published: new Date('04/04/2018'),
          reading_time: '5',
          featured_image: './image-3-medium.jpg',
          category: 'Insert Category Here',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          article_id: 1,
          headline: 'This is article #1',
          author: 'Author #1',
          date_published: new Date('10/31/2017'),
          reading_time: '4',
          featured_image: './Image1.jpg',
          category: 'Category #1',
          content: 'contents of article #1',
        },
        {
          article_id: 2,
          headline: 'This is article #2',
          author: 'Article Author #2',
          date_published: new Date('11/30/2017'),
          reading_time: '3',
          featured_image: './Image2.jpg',
          category: 'Category #2',
          content: 'contents of article #2',
        },
        {
          article_id: 3,
          headline: 'This is article #3',
          author: 'Article Author #3',
          date_published: new Date('12/31/2017'),
          reading_time: '2',
          featured_image: './Image3.jpg',
          category: 'Category #3',
          content: 'contents of article #3',
        },
        {
          article_id: 4,
          headline: 'This is article #4',
          author: 'Article Author #4',
          date_published: new Date('01/31/2018'),
          reading_time: '1',
          featured_image: './Image4.jpg',
          category: 'Category #4',
          content: 'contents of article #4',
        },
        {
          article_id: 5,
          headline: 'This is article #5',
          author: 'Article Author #5',
          date_published: new Date('02/28/2018'),
          reading_time: '0',
          featured_image: './Image5.jpg',
          category: 'Category #5',
          content: 'contents of article #5',
        },
      ],
    };
  }

  handleArticleClick(index) {
    let selected = index;
    this.setState({
      selected: selected,
      article_expanded: false,
    });
  }

  handleButtonClick() {
    const expanded = this.state.article_expanded;
    this.setState({
      article_expanded: !expanded
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Article expanded={this.state.article_expanded} article={this.state.articles[this.state.selected]} onClick={() => this.handleButtonClick()} />
        <Footer selected={this.state.selected} articles={this.state.articles} onClick={(i) => this.handleArticleClick(i)} />
      </div>
    );
  }
}

export default App;
