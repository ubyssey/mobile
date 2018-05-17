import React, { Component } from 'react';
import './Shelf.css';

class Shelf extends Component {
  render() {
    const isVisible = this.props.visible ? 'visible' : 'invisible';
    return (
      <div className="c-mobile-shelf">
        <div className={`c-mobile-shelf ${isVisible}`}>
          <div className="c-mobile-shelf__header">
            {this.props.category}
          </div>
          <div className="articles">
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
