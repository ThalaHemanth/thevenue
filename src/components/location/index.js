import React from 'react';

const location = () => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.300438809737!2d78.3780990725284!3d17.476447785728112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9229b98cd10f%3A0xe9e54aef7f83ca16!2sFortune+Fields%2C+Kukatpally+Housing+Board+Colony%2C+Kukatpally%2C+Hyderabad%2C+Telangana+500085!5e0!3m2!1sen!2sin!4v1537882900346"
      width="100%"
      height="500px"
      frameBorder="0"
      allowFullScreen
      title="location"
    />
    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default location;
