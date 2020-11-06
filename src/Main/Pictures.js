import React, { Component } from "react";
import "./pictures.css";


class Pictures extends Component {
  render() {
    return (
      
        <div className="pic">
          <p>{this.props.id}</p>
          <h2>{this.props.title}</h2>
          <img
            src={this.props.img}
            alt="img"
            style={{ width: "100%", height: "60%" }}
          />
          <p>{this.props.description}</p>
       
       
      </div>
    );
  }
}
export default Pictures;
