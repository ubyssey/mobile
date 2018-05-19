import React, { Component } from 'react';
import './Footer.css';
import FooterAd from './FooterAd';
import FooterNav from './FooterNav';

class Footer extends Component {
  render() {
    return (
      <div className="c-mobile-footer">
      	<FooterAd />
      	<FooterNav
      	  onClick={(id) => this.props.onClick(id)}
          category={this.props.category}
      	  selected={this.props.selected}
      	  articles={this.props.articles} />
      </div>
    );
  }
}

export default Footer;