import React, { Component } from 'react';
import './starbean.css';
import espresso from "../espresso-coffee.png";
 import mixie from "../filter-coffee.png";
class StarBean extends Component {
    state = {  } 
    render() { 
        return (
            <div className="starouter">
            <div className="starbeancon">
                

<h1 className="starbeantitle"> {this.props.value.title} </h1>

<div className="conbeancon">
<img src={this.props.value.file1} className="starbeanimageleft" alt=""/>
<div className="conbean">
<h4 className="starbeansubleft"> {this.props.value.subtitle} </h4>

<h1 className="starbeandescleft"> {this.props.value.description} </h1>
</div>
</div>
<div className="conbeancon">
 <img src= {this.props.value.file2}  className="starbeanimageright" alt=""/> 

<div className="conbean">
<h3 className="starbeansubright"> {this.props.value.subtitle1} </h3>

<h1 className="starbeandescright"> {this.props.value.description1} </h1>
</div>
</div>
</div>
<div className='cent2'>
       <a href={this.props.value.subheadinglink} target="blank">
			<button class="linkbutton1"> {this.props.value.subheading} </button>
        </a>
            </div>
</div>

        );
    }
}
 
export default StarBean;