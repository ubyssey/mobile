import React, { Component } from 'react';
import './Menu.css';
import MenuListing from './MenuListing';
import MenuAds from './MenuAds';

class Menu extends Component {
  render() {
    const isVisible = this.props.isVisible ? 'visible' : 'invisible';
    return (
      <div className="c-mobile-menu">
        <div className={`c-mobile-menu ${isVisible}`}>
          <div class="c-mobile-menu__header"><b>Categories</b></div>
          <MenuListing onClick={(category) => this.props.onClick(category)} />
          <MenuAds />
        </div>
      </div>
    );
  }
}

export default Menu;