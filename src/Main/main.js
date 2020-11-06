import React, { Component } from "react";
import data from "../data.json";
import Pictures from "./Pictures";
import "./main.css";
import Aside from "./Aside";
import Template from './Template';

class Main extends Component {
  render() {
    return (
      <>
      <main>
        <div className="pictures">
          {data.map((obj) => {
            return (
              <Pictures
                id={obj.id}
                publishDate={obj.publishDate}
                title={obj.title}
                img={obj.imageUrl}
                description={obj.description}
              />
            );
          })}
        </div>
        <Aside />
        </main>
        <Template/>
        </>
    );
  }
}
export default Main;
