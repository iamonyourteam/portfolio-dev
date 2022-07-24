import React, { Component } from 'react';
import './Body.css';
import Headshot from '../../Images/Headshot-Round.png';

class About extends Component {
  render() {
    return (
      
      <div className="AboutBackground" id="About"> 
          
          <div className="Wrapper">
          <div className="About">

          <h1>About</h1>
          <div className="headshotContainerMobile">
<img className="Headshot" src={Headshot}  ></img>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#5CB6DD" d="M49,-57.2C61.3,-48.1,67.5,-30.6,69.5,-13.2C71.5,4.2,69.1,21.4,62.3,38.5C55.4,55.5,44,72.5,28.7,77.4C13.5,82.3,-5.6,75,-22.6,66.8C-39.6,58.6,-54.5,49.3,-62.7,35.8C-71,22.4,-72.5,4.7,-68.2,-10.7C-63.9,-26,-53.6,-38.8,-41.3,-47.9C-28.9,-57,-14.5,-62.3,1.9,-64.6C18.4,-66.9,36.7,-66.3,49,-57.2Z" transform="translate(100 100)" />
</svg>
</div>
          <h2>Hey, I am Jason Neff  <br />I am an aspiring Web Developer    </h2>
          <p></p>
          <p>I come from a career  not revolving around development however have always surrounded myself with my passion with design and problem solving with technology.</p>         
          <p>My goal is to have fun with the process of learning. You can follow my progress in my blog below.</p>
          <button ><a href="#Contact">Contact Me</a></button>
</div>

<div className="headshotContainerWeb">
<img className="Headshot" src={Headshot}  ></img>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#5CB6DD" d="M49,-57.2C61.3,-48.1,67.5,-30.6,69.5,-13.2C71.5,4.2,69.1,21.4,62.3,38.5C55.4,55.5,44,72.5,28.7,77.4C13.5,82.3,-5.6,75,-22.6,66.8C-39.6,58.6,-54.5,49.3,-62.7,35.8C-71,22.4,-72.5,4.7,-68.2,-10.7C-63.9,-26,-53.6,-38.8,-41.3,-47.9C-28.9,-57,-14.5,-62.3,1.9,-64.6C18.4,-66.9,36.7,-66.3,49,-57.2Z" transform="translate(100 100)" />
</svg>
</div>


            </div>
           
      </div>
       
    );
  }
}

export default About;