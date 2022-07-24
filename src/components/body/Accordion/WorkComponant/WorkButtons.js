import React, { Component } from 'react';
import './WorkComponant';
import WorkButton from './WorkButton';


const WorkButtons = ({WorkButtons, worklinks}) => {



    return (
        
        <div className="WorkLinkButtonContainer">

         {console.log(worklinks)}  

{WorkButtons.map((title,index) =><WorkButton key={index} title={title}  />)}
        </div>

    )


}

export default WorkButtons