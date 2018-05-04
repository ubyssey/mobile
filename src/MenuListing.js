import React, { Component } from 'react';
import './MenuListing.css';
import MenuItem from './MenuItem';

class MenuListing extends Component {
  render() {
    return (
      <div className="MenuListing">
        <MenuItem category='News' />
    	  <MenuItem category='Culture' />
    	  <MenuItem category='Features' />
    	  <MenuItem category='Opinion' />
        <MenuItem category='Sports' />
        <MenuItem category='Blog' />
        <MenuItem category='Science' />
        <MenuItem category='Events' />
      </div>
    );
  }
}

export default MenuListing;
