import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <div className="c-mobile-menuitem">
      	<strong>{this.props.category}</strong>
      </div>
    );
  }
}

export default MenuItem;
