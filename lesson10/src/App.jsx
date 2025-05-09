import './App.css';
import React from "react";
import Main from "./pages/Main/Main";

class App extends React.Component {
  state = {
    activeTab: "shopping", // "home" | "shopping" | "statistics"
    cash: 19542,
    currentDate: new Date(),
    count: 0,
    isVisible: true,
    cards: [
      {
        id: 1,
        price: "10.1",
        cardName: "book",
        isAdded: false
      }, {
        id: 2,
        price: "220.1",
        cardName: "telephone",
        isAdded: false
      },
      {
        id: 3,
        price: "4220.1",
        cardName: "laptop",
        isAdded: false
      }
    ],
    buyCards: []
  }

  setActiveTab = (activeTab) => {
    this.setState({ activeTab });
  }

  buyCard = (id) => {
    this.setState((prevState) => {
      const newCards = prevState.cards.map((card) => {
        if (id !== card.id) {
          return card;
        }
        return {
          ...card,
          isAdded: !card.isAdded,
        }
      })

      const newBuyCards = newCards.filter((card) => (card.isAdded));

      return {
        ...prevState,
        cards: newCards,
        buyCards: newBuyCards
      }
    })
  }

  render() {
    return (
      <div className="app-window-container">
        <div className="app-window">
          <Main state={this.state} setActiveTab={this.setActiveTab} buyCard={this.buyCard} />
        </div>
      </div>
    );
  }

}

export default App;
