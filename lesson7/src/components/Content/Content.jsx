import React from "react";
import "./Content.css";
import Shopping from "../../pages/Main/Tabs/Shopping/Shopping";

class Content extends React.Component {
  state = {
    cards: [
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
  }

  addCard = () => {
    console.log("addCard");

    this.setState({
      cards : [...this.state.cards, {
        price: "220.1",
        cardName: "book2"
      }]
    })
  }

  render() {
    return (
      <div className="content-container">
        <button onClick={this.addCard}>test</button>
        <Shopping name={"test"} cards={this.state.cards}/>
      </div>
    )
  }
}

export default Content;