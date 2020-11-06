import React, { Component } from "react";
import "./Aside.css";
import img from '../assets/2.jpg';

class Aside extends Component {
  render() {
    return (
      <>
        <aside class="add-bar">
          <div class="about_aside">
            <h1>About</h1>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
            </p>
          </div>
          <div class="sticky">
            <h1>Tags</h1>
            <button>Journey</button>
            <button>Work</button>
            <button>Lifestyle</button>
            <button>Photography</button>
            <button>Food & Drinks</button>
            <hr />
            <h2>Popular Stories</h2>
            <h4>Blind Man</h4>
            <img
              src={img}
              alt="img"
              style={{ width: "90%", height: "15%" }}
            />
            <p>1 year ago Lifestyle</p>
          </div>
        </aside>
      </>
    );
  }
}
export default Aside;
