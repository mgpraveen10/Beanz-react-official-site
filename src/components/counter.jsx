import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter  extends Component {
    state = {
        count:0,
        tags : ["tag1",'tag2','tag3'] ,
        //  imageUrl :'https://picsum.photos/200'
    };
    constructor()
    {
        super();
     console.log("constructor",this);
    }
    handleIncrement()
    {
        console.log("Increment clicked", this)
    }
    
    render() { 
        
        return (
        <div>
        <h1>this is component</h1> 

        {/* <img src={this.state.imageUrl}></img> */}
        {/* <img src="logo192.png" alt="image is missing"></img> */}

        <span  className={this.getBatchMethod()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="bt  n btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </div>
        );
 
    }
    getBatchMethod() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
      const { count } = this.state;
        return count === 0 ? "zero" : count;
     }
}
 
export default Counter ;