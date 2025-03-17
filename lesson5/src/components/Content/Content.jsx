import React from "react";
import "./Content.css";
import Purchases from "../Purchases/Purchases";
import Card from "../Card/Card";

class Content extends React.Component {
  render() {
    return (
      <div className="content-container">
        <Purchases/>
        <Card/>
      </div>
    )
  }
}

export default Content;