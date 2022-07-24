import React, { Component } from 'react';
import './Hero.css';
import FullLogoOnColor from '../../Images/Jason-Neff-onColor.svg'
import Animation from './Animation'

import TypeWriterEffect from 'react-typewriter-effect';






class Hero extends Component {
  

  render() {
  
  
  
  return (
<div ><Animation />
      <div className="Hero">
        
       
    
<div  >
<img className="Name" src={FullLogoOnColor} ></img>    
       
        
        </div>
        <div  className="Hello">
          
          
           <div>I am a</div>
        
           <div>
          <TypeWriterEffect
            textStyle={{
              position: 'relative',
              left: 15,              
              fontWeight:900,
              fontSize:'1em',
              
            }}
            startDelay={100}
            cursorColor="black"
            multiText={[
              'Programmer',
              'Designer',
              'Web Developer'
            ]}
            typeSpeed={80}
            multiTextLoop 
          />
</div>

        </div>
        
      </div>
      
      <div className="WaveContainer">
      <svg className="waves"  xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
</div>
        
      



    );
  }
}

export default Hero;