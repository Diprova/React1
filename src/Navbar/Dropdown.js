import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
      <li>
        <a className="down_arrow" href={" "}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
export default Dropdown;
