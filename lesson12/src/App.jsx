import './App.css';
import React from "react";
import Main from "./pages/Main/Main";
import Authorization from "./pages/Authorization/Authorization";
import {BrowserRouter} from "react-router";
import AppRouters from "./appRouters/AppRouters";

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
    buyCards: [],

    auth: {
      isSignIn: true,
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({
      ...prevState,
      auth: {
        ...prevState.auth,
        isSignIn: !prevState.auth.isSignIn,
      }
    }))
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
      <BrowserRouter>
        <div className="app-window-container">
            <AppRouters
              state={this.state}
              toggleForm={this.toggleForm}
              buyCard={this.buyCard}
              setActiveTab={this.setActiveTab}
            />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
