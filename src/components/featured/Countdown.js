import React, { Component } from 'react';
import { Slide } from 'react-reveal';

class Countdown extends Component {
  state = {
    delay: 'Oct,9,2018',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  };

  componentDidMount() {
    setInterval(() => this.getCountdown(this.state.delay), 1000);
  }

  getCountdown = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date Passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        seconds,
        minutes,
        hours,
        days,
      });
    }
  };

  render() {
    return (
      <Slide delay={1000} left>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts In</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">HS</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
