import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  menu_visible: false,
  	};
  }

  handleHamburgerClick() {
  	const visible = this.state.menu_visible;
  	this.setState({
  		menu_visible: !visible,
  	});
  	console.log(this.state.menu_visible);
  }

  render() {
    return (
      <div className="App">
        <Header onClick={() => this.handleHamburgerClick()} />
      	<Menu visible={this.state.menu_visible} />
      </div>
    );
  }
}

export default App;
