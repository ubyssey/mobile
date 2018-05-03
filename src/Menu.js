import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      	<b>Categories</b>
      	<div>
	      <MenuItem category='Culture' />
	      <MenuItem category='Feature' />
	      <MenuItem category='Opinion' />
	      <MenuItem category='Science' />
	      <MenuItem category='Sports' />
      	</div>
      	<div>
      	  Ads
      	</div>
      </div>
    );
  }
}

export default Menu;
