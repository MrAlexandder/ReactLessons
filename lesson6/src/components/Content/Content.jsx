import React from "react";
import "./Content.css";
import Shopping from "../../pages/Main/Tabs/Shopping/Shopping";

class Content extends React.Component {
  cards = [
    {
      price: "10.1",
      cardName: "book",
    }, {
      price: "220.1",
      cardName: "telephone",
    },
    {
      price: "4220.1",
      cardName: "laptop",
    }
  ]

  render() {
    return (
      <div className="content-container">
        <Shopping name={"test"} cards={this.cards}/>
      </div>
    )
  }
}

export default Content;