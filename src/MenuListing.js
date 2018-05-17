import React, { Component } from 'react';
import './MenuListing.css';
import MenuItem from './MenuItem';

class MenuListing extends Component {

  generateMenuItems() {
    return (
      <div>
        <MenuItem category='News' onClick={() => this.props.onClick()} />
        <MenuItem category='Culture' onClick={() => this.props.onClick()} />
        <MenuItem category='Features' onClick={() => this.props.onClick()} />
        <MenuItem category='Opinion' onClick={() => this.props.onClick()} />
        <MenuItem category='Sports' onClick={() => this.props.onClick()} />
        <MenuItem category='Blog' onClick={() => this.props.onClick()} />
        <MenuItem category='Science' onClick={() => this.props.onClick()} />
        <MenuItem category='Events' onClick={() => this.props.onClick()} />
      </div>
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
