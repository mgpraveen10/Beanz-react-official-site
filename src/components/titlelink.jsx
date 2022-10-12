import React, { Component } from 'react';
class Titlelink extends Component {
    state = {  } 
    render() { 
        return (

          <div class="cent2" > <a href={this.props.value.link} target="blank">
          <button class="linkbutton2"> {this.props.value.title} </button>
      </a>
       </div>

        );
    }
}
 
export default Titlelink;