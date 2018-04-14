import React, { Component } from "react";
import Slider from 'react-slick';

class CustomSlide extends Component {
  render() {
    const { item, ...props } = this.props;
    return (
      <div {...props}>
        <h3>{item}</h3>
      </div>
    );
  }
}

export default class SwipeToSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [1,2,3,4,5,6,7,8,9],
    };
  }

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
          {this.state.carouselItems.map((item) => {
            console.log('Entered');
            return (<CustomSlide item={item} />)
          })}
        </Slider>
      </div>
    );
  }
}