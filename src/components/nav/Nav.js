import React, { Component } from 'react';
import Links from './Links'
import './Nav.css';


class Nav extends Component {
  render() {
    return (
      <>
       
      <div className="Nav">

       <div className="Logo">
       
       </div>
       <div className="LinksContainer">
         <Links/>

         </div>

      </div>
      
      </>
    );
  }
}

export default Nav;