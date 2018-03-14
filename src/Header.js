import React, { Component } from 'react';
import logo from './ubyssey-logo-small.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<a class="left" href="#"><i class="fa fa-bars"></i></a>
      	<a class="logo" href="/"><img src={logo} type="text/css" /></a>
      </div>
    );
  }
}

export default Header;
