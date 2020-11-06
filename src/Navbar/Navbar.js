import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Heading from "./Heading";
import "./Navbar.css";
import Search from "./Search";
import About from "./About";

const navbararr = ["Home", "Post", "Component"];

const navarr2 = ["About", "Contact"];

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <ul>
            {navbararr.map((ele) => (
              <Dropdown title={ele} key={ele} />
            ))}
          </ul>
          <Heading />

          <ul>
            {navarr2.map((el) => (
              <About title={el} key={el} />
            ))}

            <Search />
          </ul>
        </nav>
      </>
    );
  }
}
export default Navbar;
