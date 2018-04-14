import React, { Component } from 'react';
import './FooterNav.css';
import CarouselSlider from './CarouselSlider';

class FooterNav extends Component {
  render() {
    return (
      <div className="FooterNav">
      	<div class="category">
      		CATEGORY NAME HERE
      	</div>
      	<CarouselSlider />
      </div>
    );
  }
}

export default FooterNav;