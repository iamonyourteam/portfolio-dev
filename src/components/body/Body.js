import React, { Component, useState } from 'react';
import './Body.css';
import Accordion from './Accordion/Accordion';
import About from './About';
import Blog from './Blog/Blog';

import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import CarouselCard from './CarouselCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


console.log(window.innerWidth)
function viewport(){
  if(window.innerWidth < 900){
    return(1)
    if(window.innerWidth > 900){
      return(3)
  }
}}

const noOfItems = 5;
let noOfCards = 3;
const autoPlayDelay = 9000;
const chevronWidth = 70;




const SlideItem = styled.div`
  height: 200px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>
    {index+1}
  </SlideItem>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
    
  };


  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });






  render() {
    return (
      <div  className ="BodyWrapper">
        
        {/* UNSURE IF I WANT TO USE THIS ON THE WEBSITE */}
        {/* <div className="ItemsCarouselWrapper"> 
         <ItemsCarousel className="ItemsCarousel"
          gutter={20}
          numberOfCards={viewport()}
          activeItemIndex={this.state.activeItemIndex}
      
          requestToChangeActive={this.onChange}
          rightChevron={<button style={{border:'none', backgroundColor:'transparent' , color:"rgb(83, 81, 81)"}}><ArrowForwardIosIcon/></button>}
          leftChevron={<button style={{ border:'none', backgroundColor:'transparent', color:"rgb(83, 81, 81)"} }><ArrowBackIosIcon/></button>}
          chevronWidth={chevronWidth}
          outsideChevron ={true} 
          children={carouselItems}
        >        
        
        <div ><CarouselCard text="This will Display Blog Post #1" listpos='1' carouselpos = {this.state.activeItemIndex}/></div>
        <div ><CarouselCard text="This will Display Blog Post #2" listpos='2' carouselpos = {this.state.activeItemIndex}/></div>
        <div ><CarouselCard text="This will Display Blog Post #3" listpos='3' carouselpos = {this.state.activeItemIndex}/></div>
        <div ><CarouselCard text="This will Display Blog Post #4" listpos='4' carouselpos = {this.state.activeItemIndex}/></div>
        <div ><CarouselCard text="This will Display Blog Post #5" listpos='5' carouselpos = {this.state.activeItemIndex}/></div>
      </ItemsCarousel>
      </div> */}
      
      <div className="Wrapper">
        
        <h1 id="Work">Work</h1>
      

      <Accordion/>

 

      </div>
      <About />
      <div className="Wrapper">
        <div className="Blog" id="Blog"> 
          <h1>Blog</h1>
          <Blog />
          </div>
      </div>

      </div>
      );
  }}