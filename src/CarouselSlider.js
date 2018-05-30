import React, { Component } from "react";
import Slider from 'react-slick';
import './CarouselSlider.css'

class CarouselItem extends Component {
  render() {
    const { item, ...props } = this.props;
    const status = this.props.isSelected ? 'selected' : 'notselected';
    var image = require(`${item.featuredImage}`);
    console.log(props);
    return (
      <div className="o-mobile-carouselitem" onClick={props.onClick} {...props}>
        <div className={`o-mobile-carouselitem__content ${status}`}>
          <div>
            <img src={image} class="o-mobile-carouselitem__image" />
          </div>
          <div className="o-mobile-carouselitem__headline">
            <span>{item.headline}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default class CarouselSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      focusOnSelect: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

    return (
      <div>
        <Slider {...settings}>
          {this.props.articles.map((item) => {
            if (item.articleId === this.props.selected) {
              return (<CarouselItem isSelected='selected' item={item} onClick={() => this.props.onClick(item.articleId)} />)              
            }
            console.log('Entered');
            return (<CarouselItem item={item} onClick={() => this.props.onClick(item.articleId)} />)
          })}
        </Slider>
      </div>
    );
  }
}