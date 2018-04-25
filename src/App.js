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
      articles: [
        {
          article_id: 1,
          headline: 'This is article #1',
          author: 'Article Author #1',
          date_published: '2017-10-31',
          featured_image: './Image1.jpg',
          category: 'Category #1',
          content: 'contents of article #1',
        },
        {
          article_id: 2,
          headline: 'This is article #2',
          author: 'Article Author #2',
          date_published: '2017-11-31',
          featured_image: './Image2.jpg',
          category: 'Category #2',
          content: 'contents of article #2',
        },
        {
          article_id: 3,
          headline: 'This is article #3',
          author: 'Article Author #3',
          date_published: '2017-12-31',
          featured_image: './Image3.jpg',
          category: 'Category #3',
          content: 'contents of article #3',
        },
        {
          article_id: 4,
          headline: 'This is article #4',
          author: 'Article Author #4',
          date_published: '2018-01-31',
          featured_image: './Image4.jpg',
          category: 'Category #4',
          content: 'contents of article #4',
        },
        {
          article_id: 5,
          headline: 'This is article #5',
          author: 'Article Author #5',
          date_published: '2018-02-31',
          featured_image: './Image5.jpg',
          category: 'Category #5',
          content: 'contents of article #5',
        },
      ],
    };
  }

  handleClick(index) {
    let selected = index;
    this.setState({
      selected: selected,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Article />
        <Footer selected={this.state.selected} articles={this.state.articles} onClick={(i) => this.handleClick(i)} />
      </div>
    );
  }
}

export default App;
