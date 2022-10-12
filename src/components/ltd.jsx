import React, { Component } from 'react';
import "./ltd.css";
class Ltd  extends Component {
    state = {  } 
 
    render() { 

        const howitworkmultifield = [this.props.value["jcr:multifield"]];
              var obj =[];

                Object.keys(howitworkmultifield).map(function (item) {
                obj = howitworkmultifield[item];

    

    }); 
        return (
            
            <div>
                <div className="flexing">
                {Object.keys(obj).map((oneItem) => (
<div className="cccontent">
      <img  src={obj[oneItem].linkURL} width="150px" height="150px"  style={{marginBottom:"30px"}}/>
          <h3 >{obj[oneItem].title}</h3>
            <p className="carddesc" >{obj[oneItem]["jcr:description"]}</p>
</div>))}



</div>
       
      </div>

    );

  }

}



        
        
    

export default Ltd;