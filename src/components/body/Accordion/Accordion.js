import React, { Component } from 'react';
import './Accordion.css';
import Design from './Design';
import Web from './Web';


const data = [
  {
    title: 'Web',
    paragraph: <Web/>
  },{
    title: 'Design',
    paragraph: <Design/>
  }

]

class Accordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: true
  }
  
  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      
      
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}
          `,
          
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{
            
            className: 'accordion-item__title',
            onClick: () => { this.setState({ opened: !opened }) }
        
        }}>
            {title}
          </h3>
          <span {...{ 
            className: 'accordion-item__icon',
            onClick: () => { this.setState({ opened: !opened }) }
        }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
      </div>
    )
  }
}



export default Accordion;