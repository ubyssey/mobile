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
      // dataId: this.props.dataId,
      // dataList: this.props.dataList,
      // dataListName: this.props.dataListName,
      // dataHeadline: this.props.dataHeadline,
      // dataAuthor: this.props.dataAuthor,
      // dataSection: this.props.dataSection,
      // dataUrl: this.props.dataUrl,
      // suggestedArticles: this.props.suggestedArticles,
      currentCategoryArticles: [],
      currentCategory: 'No category',
      isMenuVisible: false,
      isShelfVisible: false,
      selected: 0,
      isArticleExpanded: false,
      articles: [
        {
          articleId: this.props.articleId,
          headline: this.props.articleHeadline,
          author: this.props.articleAuthor,
          datePublished: this.props.articlePublishedAt,
          readingTime: this.props.readingTime,
          featuredImage: this.props.articleImage,
          category: this.props.dataSection,
          content: this.props.articleContent,
        },
        {
          articleId: 100,
          headline: 'Article headline here (#0)',
          author: 'Firstname Lastname',
          datePublished: this.props.articlePublishedAt,
          readingTime: '5',
          featuredImage: './image-3-medium.jpg',
          category: 'News',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 101,
          headline: 'This is News Article #1 with a very very very very very very very very very very very very very very very long headline',
          author: 'News Author #1',
          datePublished: this.props.articlePublishedAt,
          readingTime: 1,
          featuredImage: './Image1.jpg',
          category: 'News',
          content: 'N1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 102,
          headline: 'This is News Article #2',
          author: 'News Author #2',
          datePublished: this.props.articlePublishedAt,
          readingTime: 2,
          featuredImage: './Image2.jpg',
          category: 'News',
          content: 'N2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 103,
          headline: 'This is News Article #3',
          author: 'News Author #3',
          datePublished: this.props.articlePublishedAt,
          readingTime: 3,
          featuredImage: './Image3.jpg',
          category: 'News',
          content: 'N3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 104,
          headline: 'This is News Article #4',
          author: 'News Author #4',
          datePublished: this.props.articlePublishedAt,
          readingTime: 4,
          featuredImage: './Image4.jpg',
          category: 'News',
          content: 'N4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 105,
          headline: 'This is News Article #5',
          author: 'News Author #5',
          datePublished: this.props.articlePublishedAt,
          readingTime: 5,
          featuredImage: './Image5.jpg',
          category: 'News',
          content: 'N5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 106,
          headline: 'This is News Article #6',
          author: 'News Author #6',
          datePublished: this.props.articlePublishedAt,
          readingTime: 6,
          featuredImage: './Image4.jpg',
          category: 'News',
          content: 'N6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 107,
          headline: 'This is News Article #7',
          author: 'News Author #7',
          datePublished: this.props.articlePublishedAt,
          readingTime: 7,
          featuredImage: './Image3.jpg',
          category: 'News',
          content: 'N7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 108,
          headline: 'This is News Article #8',
          author: 'News Author #8',
          datePublished: this.props.articlePublishedAt,
          readingTime: 8,
          featuredImage: './Image2.jpg',
          category: 'News',
          content: 'N8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 109,
          headline: 'This is News Article #9',
          author: 'News Author #9',
          datePublished: this.props.articlePublishedAt,
          readingTime: 9,
          featuredImage: './Image1.jpg',
          category: 'News',
          content: 'N9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 110,
          headline: 'This is Sports Article #1',
          author: 'Sports Author #1',
          datePublished: this.props.articlePublishedAt,
          readingTime: 5.5,
          featuredImage: './Image5.jpg',
          category: 'Sports',
          content: 'S1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 111,
          headline: 'This is Culture Article #1',
          author: 'Culture Author #1',
          datePublished: this.props.articlePublishedAt,
          readingTime: 1,
          featuredImage: './Image1.jpg',
          category: 'Culture',
          content: 'C1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 112,
          headline: 'This is Culture Article #2',
          author: 'Culture Author #2',
          datePublished: this.props.articlePublishedAt,
          readingTime: 2,
          featuredImage: './Image2.jpg',
          category: 'Culture',
          content: 'C2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 113,
          headline: 'This is Culture Article #3',
          author: 'Culture Author #3',
          datePublished: this.props.articlePublishedAt,
          readingTime: 3,
          featuredImage: './Image3.jpg',
          category: 'Culture',
          content: 'C3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 114,
          headline: 'This is Culture Article #4',
          author: 'Culture Author #4',
          datePublished: this.props.articlePublishedAt,
          readingTime: 4,
          featuredImage: './Image4.jpg',
          category: 'Culture',
          content: 'C4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          articleId: 115,
          headline: 'This is Culture Article #5',
          author: 'Culture Author #5',
          datePublished: this.props.articlePublishedAt,
          readingTime: 5,
          featuredImage: './Image5.jpg',
          category: 'Culture',
          content: 'C5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      if (String(article.category.toLowerCase()).valueOf() === String(category.toLowerCase()).valueOf()) {
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
    return this.state.articles[this.state.selected].category.toLowerCase();
  }

  componentWillMount() {
    this.setState({
      selected: this.selectFirstArticle(),
      currentCategory: this.getCategory(),
    });
  }

  componentDidMount() {
    this.setState({
      currentCategoryArticles: this.getCurrentCategoryArticles(this.state.currentCategory),
    });
  }

  render() {
    // console.log(this.props.suggestedArticles)
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
