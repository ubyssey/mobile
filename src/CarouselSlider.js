import React, { Component } from "react";
import Slider from 'react-slick';
import './CarouselSlider.css'

class CarouselItem extends Component {
  render() {
    const { item, ...props } = this.props;
    console.log(props);
    return (
      <div className="o-mobile-carouselitem" onClick={props.onClick} {...props}>
        <div>
          <img src={item.featuredImage} class="o-mobile-carouselitem__image" />
        </div>
        <div className="o-mobile-carouselitem__headline">
          {item.headline}
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
          {this.props.articles.map((item, index) => {
            console.log('Entered');
            return (<CarouselItem item={item} onClick={() => this.props.onClick(index)} />)
          })}
        </Slider>
      </div>
    );
  }
}