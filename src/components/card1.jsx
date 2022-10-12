import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import './cardcomponent.css';

class CardSlider extends Component {
  state = {};
  render() {
    const cards=[this.props.value["jcr:multifield"]];

    var element=[];

    Object.keys(cards).map(function(item){
        element=cards[item];
     });
     var obj3 = Object.values(cards[0]);

     let len = obj3.length;
     let itemsArray = [];
     let newArray = [];
     obj3.map((v, i) => {
       if (i === 0) {
         newArray.push(v);
       } else if (i % 8 !== 0 && i !== len - 1) {
         newArray.push(v);

       } else if (i % 8 !== 0 && i === len - 1) {
         newArray.push(v);
 
         itemsArray.push(newArray);
       }
       else if (i % 8 == 0 && i === len - 1) {

        itemsArray.push(newArray);
        newArray = [];
        newArray.push(v);

        itemsArray.push(newArray); 
       }
       else {
         itemsArray.push(newArray);
 
         newArray = [];
 
         newArray.push(v);
       }
     });
    
 

    return itemsArray.length != 0 ? (
      <Carousel  >
      {itemsArray.map((oneItem) => (
             
        <Carousel.Item className="con" style={{ height:"700px" }}>
          {oneItem.map((newItem) => {

            return (
              <div>
              <a href={newItem.linkURL} target="blank">
              <div className="card">
                <img
                  className="d-block w-75" style={{marginLeft:"auto", marginRight:"auto"}}
                  src={newItem.logolink}
                  alt="First slide"
                />
                <h2  style={{ color: "#a25e41" }}>{newItem.title}</h2>
                  <p style={{ color: "black" }}>{newItem.subtitle}</p>
              </div>
              </a>
              </div>
            );
          })}
        </Carousel.Item>
        )
)}
    </Carousel>
    ) : (
      "card not found"
    );
  }
}

export default CardSlider;
