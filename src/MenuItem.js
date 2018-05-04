import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <div className="c-mobile-menuitem">
      	<b>{this.props.category}</b>
      </div>
    );
  }
}

export default MenuItem;
