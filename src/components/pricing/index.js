import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    position: ['Balcony', 'Medium', 'Star'],
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio sapiente veritatis',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio sapiente veritatis',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio sapiente veritatis',
    ],
    linkTo: ['#', '#', '#'],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.description[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                background="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
