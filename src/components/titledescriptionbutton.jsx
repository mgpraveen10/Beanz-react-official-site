import React, { Component } from "react";
import "./titledescriptionbutton.css";

class titledescriptionbutton extends Component {
  state = {};
  render() {
    return (
      <div class="overal_titledescriptionbutton">
        <div class="title_titledescriptionbutton">
          <h1>{this.props.value.title}</h1>
        </div>
        <div class="description_titledescriptionbutton">
          <p>{this.props.value.description}</p>
          
        </div>
        <div>
          <div class={this.props.value.buttonposition}>
            {this.props.value.badge === "true"? (
              <div>
                
                <a href={this.props.value.buttonlink} target="blank">
                  <button class="button_interior_class">
                    {this.props.value.buttonlinkname}
                  </button>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default titledescriptionbutton;
