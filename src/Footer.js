import React, { Component } from 'react';
import './Footer.css';
import FooterAd from './FooterAd';
import FooterNav from './FooterNav';

class Footer extends Component {
  render() {
    return (
      <div className="c-mobile-footer">
      	<FooterAd />
      	<FooterNav onClick={(index) => this.props.onClick(index)} selected={this.props.selected} articles={this.props.articles} />
      </div>
    );
  }
}

export default Footer;