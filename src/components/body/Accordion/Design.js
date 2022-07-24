import React, { Component } from 'react';
import './Work.css';
import WorkComponant from './WorkComponant/WorkComponant';

import Packaging from "../../../Images/packaging-demo-web.jpg";
import Marketing from"../../../Images/RR-Markiting-Demo-Web.jpg";
import Awards from"../../../Images/Awards-Demo-Web.jpg";
class Design extends Component {



  render() {

    let testparagraph="Lorem ipsum dolor sit amet. Et aliquid repudiandae eos dolores ullam ab sint dolore eum voluptas voluptates et vero alias. Qui veniam iure qui nemo inventore qui quas dolores! In nesciunt illo ea quisquam officiis est quasi ipsum "


    let card1 = {
      title:"Awards Board Design",
      photo:(Awards),
      info:"Manager wanted to recognize his team for the sales and repair accomplishments of his branch. He wanted something he could add to the common meeting space of the team to recognize milestones and achievements...",
      workbuttons:[["Read More","#AwardsBoard"],["Preview","https://photos.app.goo.gl/6SoS5dZTNBHn9Mev8"]],

    }
    let card2 = {
      title:"Product Packaging",
      photo:(Packaging),
      info:"Created FDA compliant packaging for a popcorn business in Sarasota that made its way into Big Box stores. First I collected information about the needs of Owner and her customers to curate the design, materials and process for efficiently packaging and distributing the product...",
      workbuttons:[["Read More","#ProductPackaging"],["Preview","https://photos.app.goo.gl/1ZpZd8MRKYhHsc9cA"]],
    }
    let card3 = {
      title:"Marketing Material",
      photo:(Marketing),
      info:"Designed print marketing materials for hiring and recruiting efforts. Adobe InDesign, Adobe Photoshop and Adobe Illustrator were used to create the design work. ",
      workbuttons:[],
    }


    return (
      <div className="ProjectsContainer"> 
          
          <div className="WorkCard"><WorkComponant worklinks={card1.worklinks} workbuttons={card1.workbuttons} title={card1.title} photo={card1.photo} info={card1.info}/></div>
          <div className="WorkCard"><WorkComponant worklinks={card2.worklinks} workbuttons={card2.workbuttons} title={card2.title} photo={card2.photo} info={card2.info}/></div>
          <div className="WorkCard"><WorkComponant worklinks={card3.worklinks} workbuttons={card3.workbuttons} title={card3.title} photo={card3.photo} info={card3.info}/></div >




      </div>
    );
  }
}

export default Design;