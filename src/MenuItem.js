import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <div className="c-mobile-menuitem" onClick={() => this.props.onClick()}>
      	<strong>{this.props.category}</strong>
      </div>
    );
  }
}

export default MenuItem;
