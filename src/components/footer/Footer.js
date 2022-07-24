import React, { Component } from 'react';
import './Footer.css';
import FullLogoOnWhite from '../../Images/Jason-Neff-onWhite.svg'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="Contact"> 
          <img className="FooterLogo" src={FullLogoOnWhite} ></img>    

          {/* <h2 className="Header">Contact Me</h2> */}
          <div  className="FooterContact">
          <a href="mailto:contact@jason-neff.com" target="_blank" className="FooterContactContainer">
          
          <button className="ContactLink" ><EmailIcon fontSize="large" /> <div className="ContactText">contact@jason-neff.com</div></button>
          </a> 
          <a href="https://github.com/iamonyourteam" target="_blank"><button className="ContactLink"><GitHubIcon fontSize="large"/><div className="ContactText">/iamonyourteam</div></button></a>
          <a href="https://www.linkedin.com/in/jason-neff-925604147/" target="_blank"><button className="ContactLink"><LinkedInIcon fontSize="large"/><div className="ContactText">/jason-neff-925604147</div></button></a>
          <a href="tel:9418933216" target="_blank"><button className="ContactLink"><PhoneAndroidIcon fontSize="large"/><div className="ContactText">941.893.3216</div></button></a>
        </div>
        

      </div>
    );
  }
}

export default Footer;