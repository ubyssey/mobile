import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Shelf from './Shelf';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      shelfCategory: 'CATEGORY',
  	  menuVisible: false,
      shelfVisible: false,
  	};
  }

  handleHamburgerClick() {
  	this.setState({
  		menuVisible: !this.state.menuVisible,
  	});
  }

  handleMenuItemClick() {
    this.setState({
      menuVisible: false,
      shelfVisible: true,
    });
  }

  render() {
    return (
      <div className="App">
        <Header onClick={() => this.handleHamburgerClick()} />
      	<Menu onClick={() => this.handleMenuItemClick()} visible={this.state.menuVisible} />
        <Shelf visible={this.state.shelfVisible} category={this.state.shelfCategory} />
      </div>
    );
  }
}

export default App;
