import React, { Component } from 'react';
import './FooterNav.css';
import CarouselSlider from './CarouselSlider';

class FooterNav extends Component {
  render() {
    let selected = this.props.selected;
    return (
      <div className="c-mobile-footernav">
      	<div class="c-mobile-footernav__category">
      		{this.props.articles[selected].category.toUpperCase()}
      	</div>
      	<CarouselSlider selected={this.props.selected} articles={this.props.articles} onClick={(index) => this.props.onClick(index)} />
      </div>
    );
  }
}

export default FooterNav;