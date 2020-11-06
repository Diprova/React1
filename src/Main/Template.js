import React, { Component } from "react";
import './Template.css';

class Template extends Component {
  render() {
    return (
      <div className="templete">
        <h1>Subscribe to our newsletter</h1>
        <p style={{ color: "grey" }}>
          Join our monthly newsletter and never miss out on new stories and
          promotions.
        </p>
        <input className="input" placeholder="@Email" />

        <button className="inpt">Subscribe</button>
      </div>
    );
  }
}
export default Template;
