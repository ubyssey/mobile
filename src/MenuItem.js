import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <div className="MenuItem">
      	{this.props.category}
      </div>
    );
  }
}

export default MenuItem;
