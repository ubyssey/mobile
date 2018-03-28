import React, { Component } from 'react';
import './FooterNav.css';
import Carousel from './Carousel';

class FooterNav extends Component {
  render() {
    return (
      <div className="FooterNav">
      	<div class="category">
      		CATEGORY NAME HERE
      	</div>
      	<Carousel />
      </div>
    );
  }
}

export default FooterNav;