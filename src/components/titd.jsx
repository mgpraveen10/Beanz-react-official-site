import React, { Component } from 'react';
import './titd.css';
class Titd extends Component {
    state = {  } 
    render() { 
        const coffeelowdown=[this.props.value["multifield"]];
        var ob=[];
        Object.keys(coffeelowdown).map(function(item)
        {
            ob=coffeelowdown[item];

        }
        );


        return (

     <div>      
<div className="h">
<h1 className="i">{this.props.value.heading} </h1>
<img  width="50%" src={this.props.value.linkURL}/>


    <div className="candle" > 
            {Object.keys(ob).map((oneItem) => (
                 <div className="multi-des"> 
                     <h1>{ob[oneItem].title}</h1>
                     <p>{ob[oneItem].testdescription}</p>
                    </div>
            ))}
 

            </div>
            
      
          
</div>
<div className="cent2">
       <a href={this.props.value.subheadinglink} target="blank">
			<button class="linkbutton2"> {this.props.value.subheading} </button>
        </a>
            </div>

            </div> 



        );
    }
}
 
export default Titd;