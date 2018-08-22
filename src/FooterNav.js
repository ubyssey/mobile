import React, { Component } from 'react';
import './FooterNav.css';
import CarouselSlider from './CarouselSlider';

class FooterNav extends Component {
  render() {
    return (
      <div className="c-mobile-footernav">
      	<div class="c-mobile-footernav__category">
      		{this.props.category.toUpperCase()}
      	</div>
      	<CarouselSlider
          selected={this.props.selected}
          articles={this.props.articles}
          onClick={(id) => this.props.onClick(id)} />
      </div>
    );
  }
}

export default FooterNav;