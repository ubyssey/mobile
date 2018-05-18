import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Shelf from './Shelf';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      shelfCategory: 'no category',
  	  menuVisible: false,
      shelfVisible: false,
  	};
  }

  handleHamburgerClick() {
  	this.setState({
  		menuVisible: !this.state.menuVisible,
  	});
  }

  handleMenuItemClick(category) {
    this.setState({
      menuVisible: false,
      shelfVisible: true,
      shelfCategory: category,
    });
  }

  handleShelfItemClick() {
    this.setState({
      shelfVisible: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Header onClick={() => this.handleHamburgerClick()} />
      	<Menu onClick={(category) => this.handleMenuItemClick(category)} visible={this.state.menuVisible} />
        <Shelf onClick={() => this.handleShelfItemClick()} visible={this.state.shelfVisible} category={this.state.shelfCategory} />
      </div>
    );
  }
}

export default App;
