import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';
import Menu from './Menu';
import Shelf from './Shelf';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategoryArticles: [],
      currentCategory: 'No category',
      isMenuVisible: false,
      isShelfVisible: false,
      selected: 0,
      isArticleExpanded: false,
      articles: [
        {
          articleId: 0,
          headline: 'Article headline here (#0)',
          author: 'Firstname Lastname',
          datePublished: new Date('04/04/2018'),
          readingTime: '5',
          featuredImage: './image-3-medium.jpg',
          category: 'News',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 1,
          headline: 'This is article #1',
          author: 'Author #1',
          datePublished: new Date('10/31/2017'),
          readingTime: '4',
          featuredImage: './Image1.jpg',
          category: 'Features',
          content: 'contents of article #1',
        },
        {
          articleId: 2,
          headline: 'This is article #2',
          author: 'Article Author #2',
          datePublished: new Date('11/30/2017'),
          readingTime: '3',
          featuredImage: './Image2.jpg',
          category: 'Culture',
          content: 'contents of article #2',
        },
        {
          articleId: 3,
          headline: 'This is article #3',
          author: 'Article Author #3',
          datePublished: new Date('12/31/2017'),
          readingTime: '2',
          featuredImage: './Image3.jpg',
          category: 'News',
          content: 'contents of article #3',
        },
        {
          articleId: 4,
          headline: 'This is article #4',
          author: 'Article Author #4',
          datePublished: new Date('01/31/2018'),
          readingTime: '1',
          featuredImage: './Image4.jpg',
          category: 'Culture',
          content: 'contents of article #4',
        },
        {
          articleId: 5,
          headline: 'This is article #5',
          author: 'Article Author #5',
          datePublished: new Date('02/28/2018'),
          readingTime: '0',
          featuredImage: './Image5.jpg',
          category: 'News',
          content: 'contents of article #5',
        },
      ],
    };
  }

  handleArticleClick(id) {
    this.setState({
      selected: id,
      isArticleExpanded: false,
    });
  }

  handleButtonClick() {
    this.setState({
      isArticleExpanded: !this.state.isArticleExpanded,
    });
  }

  getCurrentArticle() {
    return this.state.articles[this.state.selected];
  }

  handleHamburgerClick() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  handleMenuItemClick(category) {
    this.setState({
      isMenuVisible: false,
      isShelfVisible: true,
      currentCategory: category,
      currentCategoryArticles: this.getCurrentCategoryArticles(category),
    });
  }

  handleShelfItemClick(id) {
    this.setState({
      isShelfVisible: false,
      selected: id,
      isArticleExpanded: false,
    });
  }

  getCurrentCategoryArticles(category) {
    let currentCategoryArticles = [];

    this.state.articles.forEach( function (article) {
      if (String(article.category).valueOf() === String(category).valueOf()) {
        currentCategoryArticles.push(article);
      }
    });

    return currentCategoryArticles;
  }

  selectFirstArticle() {
    // TODO: make this return the article that reader was linked to from Facebook, etc
    return 0;
  }

  getCategory() {
    return this.state.articles[this.state.selected].category;
  }

  componentWillMount() {
    this.setState({
      selected: this.selectFirstArticle(),
    });
  }

  componentDidMount() {
    this.setState({
      currentCategory: this.getCategory(),
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          onClick={() => this.handleHamburgerClick()} />
        <Menu
          isVisible={this.state.isMenuVisible}
          onClick={(category) => this.handleMenuItemClick(category)} />
        <Shelf
          isVisible={this.state.isShelfVisible}
          category={this.state.currentCategory}
          articles={this.state.currentCategoryArticles}
          onClick={(id) => this.handleShelfItemClick(id)} />
        <Article
          isExpanded={this.state.isArticleExpanded}
          article={this.getCurrentArticle()}
          onClick={() => this.handleButtonClick()} />
        <Footer
          selected={this.state.selected}
          category={this.state.currentCategory}
          articles={this.state.currentCategoryArticles}
          onClick={(i) => this.handleArticleClick(i)} />
      </div>
    );
  }
}

export default App;
