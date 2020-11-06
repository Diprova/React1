import React, { Component } from "react";
import Button from "./Button";
import './InfoFooter.css';

const btn = ["PRIVACY POLICY", "TERMS", "FEEDBACK", "ADVERTISE", "CONTACT"];
class InfoFooter extends Component {
  render() {
    return (
      <>
        <div className="info">
          <div className="infobtn">
            {btn.map((btns) => {
              return <Button title={btns} key={btns} />;
            })}
          </div>
          <h6>@MILO 2019</h6>
          <h6>ALL RIGHTS RESERVED</h6>
        </div>
      </>
    );
  }
}
export default InfoFooter;
