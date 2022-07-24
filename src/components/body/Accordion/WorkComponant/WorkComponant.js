import React, { Component } from 'react';
import './WorkComponant.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import WorkButtons from './WorkButtons';
class WorkComponant extends Component {
  
  state = {
    opened: false

}


 

render() {

  
  const {
    state: {
      opened
    }
  } = this

    return (
      <div className = "WorkComponant"
      > 
          <div {...{
          className: `${opened ? 'Preview--opened':'Preview'}`,
          
        }}
          ><img className="PreviewImg" src = {this.props.photo} ></img></div>
          
          <div {...{
          className: `${opened ? 'WorkTitleContainer--opened':'WorkTitleContainer'}`,
          onClick: () => { this.setState({ opened: !opened })}
        }}>
         
          <div {...{
          className: `${opened ? 'WorkArrow--opened': 'WorkArrow'}`,
          
          
          
        }}><ArrowDropUpIcon/></div> 
          <div className="WorkTitle">{this.props.title}
     
          </div>
          <div {...{
          className: `${opened ? 'MoreInfo--opened': 'MoreInfo'}`,
          }}>
<div className= "info">{this.props.info}</div>
<div className= "links">
  
  <WorkButtons worklinks={this.props.worklinks} WorkButtons={this.props.workbuttons}/>

</div>
          </div>
            
            
           </div>
     

      </div>
    );
  }
}

export default WorkComponant;