import React, { Component } from 'react';
import './title.css';
class Title extends Component {
    state = {  } 
    render() { 
        return (
           <div className='cent2'>
            <h2>{this.props.value["title"]}</h2>
            
           </div>
            
             
        );
    }
}
 
export default Title;