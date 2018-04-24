import React, { Component } from 'react';
import './FooterNav.css';
import CarouselSlider from './CarouselSlider';

class FooterNav extends Component {
  render() {
    let selected = this.props.selected;
    return (
      <div className="FooterNav">
      	<div class="category">
      		{this.props.articles[selected].category.toUpperCase()}
      	</div>
      	<CarouselSlider selected={this.props.selected} articles={this.props.articles} onClick={(index) => this.props.onClick(index)} />
      </div>
    );
  }
}

export default FooterNav;