import React, { Component } from 'react';
import './cardcomponent.css';
class Card extends Component {
    state = {  } 
    render() { 
         const cards=[this.props.value["jcr:multifield"]];
         var element=[];
         Object.keys(cards).map(function(item){
            element=cards[item];
         });


         



        return (
            <div class="con" >
            {Object.keys(element).map((oneItem) => (
            <a href={element[oneItem].linkURL} target="blank">
            <div class="card">
            
            <img className='mx-auto' src={element[oneItem].logolink} width="150px" height="150px"/>
            <h4  style={{ color: "#a25e41" }}>{element[oneItem].title}</h4>
            <p style={{ color: "black" }}>{element[oneItem].subtitle}</p>
            </div>  </a>
            ))}
            </div>
            

        );
    }
}
 
export default Card;