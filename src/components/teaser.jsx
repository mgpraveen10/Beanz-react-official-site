import React, { Component } from 'react';
import './teaser.css';

class Teaser extends Component {
    state = {  } 
    render() { 
        return (
            <div className="linkcontainer">
            <img className="linkimg" src={`${(process.env.REACT_APP_HOST_URL+process.env.REACT_APP_PORT)}${this.props.value["file"]}`}/>
            <div className="textlink2">
                <h3>{this.props.value["jcr:title"]}</h3>
                <p className="linkpara" style={{fontSize:"16px", fontWeight:"290"}}>{this.props.value["jcr:description"]}</p>
                <a href={this.props.value.linkURL} target="blank">
                
                
                {this.props.value.linktext && (

            <button className="linkbutton">

            {this.props.value.linktext}

            </button>

)}
                  
                </a>
            </div>
        </div>






        );
    }
}
 
export default Teaser;