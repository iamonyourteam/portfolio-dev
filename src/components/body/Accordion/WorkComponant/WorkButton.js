import React, { Component } from 'react';
import './WorkComponant';



class WorkButton extends Component {
  render() {

    
    return (
      <div className="WorkLinkButton" > 
        <a href={this.props.title[1]}><button>{this.props.title[0]}</button></a>
      </div>
    );
  }
}

export default WorkButton;