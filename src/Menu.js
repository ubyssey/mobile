import React, { Component } from 'react';
import './Menu.css';
import MenuListing from './MenuListing';
import MenuAds from './MenuAds';

class Menu extends Component {
  render() {
    const isVisible = this.props.visible ? 'visible' : 'invisible';
    return (
      <div className="c-mobile-menu">
        <div className={`c-mobile-menu ${isVisible}`}>
          <div class="c-mobile-menu__header"><b>Categories</b></div>
          <MenuListing categories={this.state.categories} onClick={() => this.props.onClick()} />
          <MenuAds />
        </div>
      </div>
    );
  }
}

export default Menu;
