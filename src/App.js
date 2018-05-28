import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  isMenuVisible: false,
  	};
  }

  handleHamburgerClick() {
  	this.setState({
  		isMenuVisible: !this.state.isMenuVisible,
  	});
  }

  render() {
    return (
      <div className="App">
        <Header onClick={() => this.handleHamburgerClick()} />
      	<Menu isVisible={this.state.isMenuVisible} />
      </div>
    );
  }
}

export default App;
