import React, { Component } from 'react';
import './MenuListing.css';
import MenuItem from './MenuItem';

class MenuListing extends Component {

  generateMenuItems() {
    return (
      <div>
        {this.renderMenuItem('News')}
        {this.renderMenuItem('Culture')}
        {this.renderMenuItem('Features')}
        {this.renderMenuItem('Opinion')}
        {this.renderMenuItem('Sports')}
        {this.renderMenuItem('Blog')}
        {this.renderMenuItem('Science')}
        {this.renderMenuItem('Events')}
      </div>
    );
  }

  renderMenuItem(category) {
    return (
      <MenuItem category={category} onClick={() => this.props.onClick(category)} />
    );
  }

  render() {
    return (
      <div className="MenuListing">
        {this.generateMenuItems()}
      </div>
    );
  }
}

export default MenuListing;
