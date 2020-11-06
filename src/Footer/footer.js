import React, { Component } from "react";
import data from "../data.json";
import ImgFooter from "./ImgFooter";
import './Footer.css';
import InfoFooter from "./InfoFooter";

class Footer extends Component {
  render() {
    return (
      <>
      <div className="img-footer">
          <div className="grid_img">
          {data.map((ele) => {
            return <ImgFooter img={ele.imageUrl} />;
          })}
          </div>
        
        <div className="insta">
        <strong>FOLLOW US @INSTAGRAM</strong>
      </div>
      </div>
        <InfoFooter />
        </>
    );
  }
}
export default Footer;
