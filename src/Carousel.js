import React, { Component } from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';

class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
      	<CarouselItem />
      </div>
    );
  }
}

export default Carousel;