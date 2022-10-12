import React, { Component } from "react";
import './header.css';
class Header extends Component {
  state = {};
  render() {
    const Headers=[this.props.value.headernav_2["multifield"]];

    var head = [];
    Object.keys(Headers).map(function(item) {
      head = Headers[item];
      console.log(head);
    });
   
    return(
    <div className="navbar">
      <a href={this.props.value.headernav_2.linkforlogo} target="blank">
        <img src={this.props.value.headernav_2.logo}  style={{margintop:"5px"}} width="100px" height="35px" />
      </a>

      {Object.keys(head).map((oneItem) => (
        <div className="dropdown">
          <button class="dropbtn"><a href={head[oneItem].titlelink} target="blank">
            <h1>{head[oneItem].title}</h1>
            </a><i class="fa fa-caret-down"></i></button>


          <div className="dropdown-content">
          {Object.keys(head[oneItem]["jcr:multifield"]).map((seond) => (
            <a href={head[oneItem]["jcr:multifield"][seond].subtitlelink} target="blank">
              <h1>{head[oneItem]["jcr:multifield"][seond].subtitle}</h1>
            </a>
          ))}
          </div>
        </div>
      ))}
    </div>)
  }
}

export default Header;
