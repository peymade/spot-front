import React from 'react';
import './css/About.css';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="AboutUs toFade">
          <h1>Welcome to our About Us!</h1>
          <h2>Our team:</h2>
        </div>
      </>
    )
  }
}

export default About;
