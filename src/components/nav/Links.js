import React, { Component } from 'react';
import FullLogoOnGray from '../../Images/Jason-Neff-onGray.svg';
import './Nav.css';


class Links extends Component {
  render() {
    return (
      <div className="Links">
<ul>
    <li className="MobileNavHeader">
    <img className="Name" src={FullLogoOnGray} ></img>  
    </li>
    <li className="Link"><a href="#Work">Work</a>   </li>
    <li className="Link"><a href="#About">About</a>   </li>
    <li className="Link"><a href="#Blog">Blog</a>    </li>
    <li className="Link"><a href="#Contact">Contact</a>    </li>
</ul>
      </div>
    );
  }
}

export default Links;