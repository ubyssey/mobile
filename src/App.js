import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  menuVisible: false,
  	};
  }

  handleHamburgerClick() {
  	this.setState({
  		menuVisible: !this.state.menuVisible,
  	});
  }

  render() {
    return (
      <div className="App">
        <Header onClick={() => this.handleHamburgerClick()} />
      	<Menu visible={this.state.menuVisible} />
      </div>
    );
  }
}

export default App;
