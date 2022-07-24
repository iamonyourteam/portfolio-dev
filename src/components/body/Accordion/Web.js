import React, { Component } from 'react';
import './Work.css';
import WorkComponant from './WorkComponant/WorkComponant';
import IphoneDemo from '../../../Images/Iphone-Demo-Web.jpg';
import PopcornDemo from '../../../Images/TropicalShores-Demo-Web.jpg';
import TickerDemo from '../../../Images/Ticker-Demo-Web.jpg';

class Web extends Component {

  
  render() {

    let testparagraph="Lorem ipsum dolor sit amet. Et aliquid repudiandae eos dolores ullam ab sint dolore eum voluptas voluptates et vero alias. Qui veniam iure qui nemo inventore qui quas dolores! In nesciunt illo ea quisquam officiis est quasi ipsum "

    let card1 = {
      title:"Iphone Clock Clone",
      photo:(IphoneDemo),
      info:"To better understand JavaScript I undertook trying to recreate the Iphone clock app using only vanilla JavaScipt. Before taking on this project I had not worked with APIs and was challenged in grasping how JS manipulated the DOM. This project was a big undertaking for my first project, however got me to understand a lot of concepts well.",
      workbuttons:[["Read More","#IphoneClock"],["Preview","https://iamonyourteam.github.io/iphoneapp/"],["GitHub","https://github.com/iamonyourteam/iphoneapp"]],
    }
    let card2 = {
      title:"Sports Ticker App",
      info:"I wanted to create a Sports Ticker that could be displayed on a thin monitor that would display updated Sports information on the major US Sports. Although I knew this was going to be a small project I wanted to get to know React ...",
      photo:(TickerDemo),
      workbuttons:[["Read More","#SportsTicker"]],
     
    }
    let card3 = {
      title:"CMS Ecommerce",
      info:"This website was developed for a local business that did not have an online store to sell their products. I wanted something that was easy for them to manage as the products would change over the course of the year. We chose Squarespace because of how easy it was to set up an online store and to manage. It also provided great allytics on the traffic and how the customers navigated the website...",
      photo:(PopcornDemo),
      workbuttons:[["Read More","#CMSEcommerce"],["Visit Site","https://www.tropicalshorespopcorn.com/"]],
      
    }



    return (
      <div className="ProjectsContainer"> 
          
          <div className="WorkCard"><WorkComponant  workbuttons={card1.workbuttons} title={card1.title} photo={card1.photo} info={card1.info} /></div>
          <div className="WorkCard"><WorkComponant workbuttons={card2.workbuttons} title={card2.title} photo={card2.photo} info={card2.info}/></div>
          <div className="WorkCard"><WorkComponant  workbuttons={card3.workbuttons} title={card3.title} photo={card3.photo} info={card3.info}/></div >




      </div>
    );
  }
}

export default Web;