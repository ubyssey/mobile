import React, { Component } from 'react';
import './Shelf.css';

class Shelf extends Component {
  render() {
    const isVisible = this.props.visible ? 'visible' : 'invisible';
    return (
      <div className="c-mobile-shelf">
        <div className={`c-mobile-shelf ${isVisible}`}>
          <div className="c-mobile-shelf__header">
            {this.props.category.toUpperCase()}
          </div>
          <div className="c-mobile-shelf__content">
            <div onClick={() => this.props.onClick()}>
              1
            </div>
            <div>
              2
            </div>
            <div>
              3
            </div>
            <div>
              4
            </div>
            <div>
              5
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
