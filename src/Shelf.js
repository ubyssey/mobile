import React, { Component } from 'react';
import './Shelf.css';

class ShelfItem extends Component {
  render() {
    const { item, ...props } = this.props;
    var image = require(`${item.featuredImage}`);
    console.log(props);
    return (
      <div className="o-mobile-shelfitem" onClick={props.onClick}>
        <div className="o-mobile-shelfitem__headline">
          {item.headline}
        </div>
        <div>
          <img src={image} class="o-mobile-shelfitem__image" />
        </div>
      </div>
    );
  }
}

class Shelf extends Component {
  render() {
    const isVisible = this.props.isVisible ? 'visible' : 'invisible';
    return (
      <div className="c-mobile-shelf">
        <div className={`c-mobile-shelf ${isVisible}`}>
          <div className="c-mobile-shelf__header">
            {this.props.category.toUpperCase()}
          </div>
          <div className="c-mobile-shelf__content">
            {this.props.articles.map((item) => {
              console.log('Entered');
              console.log(item);
              return (<ShelfItem item={item} onClick={() => this.props.onClick(item.articleId)} />)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
