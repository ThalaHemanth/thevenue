import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';

import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Buy Tickets Beforet 20 October</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur
                perspiciatis vero ducimus voluptas fugiat in nulla rerum, quod eligendi consequatur
                recusandae iste, mollitia dolor suscipit molestias. Distinctio, iure dolore.
              </p>
              <MyButton link="#" background="#ffa800" color="#ffffff" text="Purchase Tickets" />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
