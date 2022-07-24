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
      info:testparagraph,
      workbuttons:[["Read More","#IphoneClock"],["Preview","https://iamonyourteam.github.io/iphoneapp/"],["GitHub","https://github.com/iamonyourteam/iphoneapp"]],
    }
    let card2 = {
      title:"Sports Ticker App",
      info:testparagraph,
      photo:(TickerDemo),
      workbuttons:[["Read More","#SportsTicker"]],
     
    }
    let card3 = {
      title:"CMS Ecommerce",
      info:testparagraph,
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