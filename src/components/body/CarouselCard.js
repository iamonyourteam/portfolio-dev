import React, { Component } from 'react';
import './Body.css';



class CarouselCard extends Component {
  render() {
    
    let isActive= null;
  

      if(this.props.listpos == this.props.carouselpos + 2){isActive="CarouselCardActive"}
      else{isActive ="CarouselCard"}
    


    return (
  
      <div className={isActive}>



<div className="CarouselPhoto"> 

<div ><img src={`https://picsum.photos/1100/900?random=${this.props.listpos}`}></img></div>
<div className="mainText">{this.props.text}
</div>


</div>
     
</div>
    
    
    
      );
  }
}

export default CarouselCard;