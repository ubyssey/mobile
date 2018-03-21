import React, { Component } from 'react';
import logo from './ubyssey-logo-small.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="c-mobile-header">
      	<a class="c-mobile-header-left" href="#"><i class="fa fa-bars"></i></a>
      	<a class="c-mobile-header-logo" href="/"><img src={logo} type="text/css" /></a>
      </div>
    );
  }
}

export default Header;
