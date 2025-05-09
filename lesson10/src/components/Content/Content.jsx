import React from "react";
import "./Content.css";
import Shopping from "../../pages/Main/Tabs/Shopping/Shopping";
import Home from "../../pages/Main/Tabs/Home/Home";
import Statistics from "../../pages/Main/Tabs/Statistics/Statistics.jsx";

class Content extends React.Component {
  render() {
    const { activeTab, cards, buyCard, buyCards } = this.props;

    return (
      <div className="content-container">
        {activeTab === "home" && <Home buyCards={buyCards} buyCard={buyCard}/>}
        {activeTab === "shopping" && <Shopping name={"test"} cards={cards} buyCard={buyCard}/>}
        {activeTab === "statistics" && <Statistics/>}
      </div>
    )
  }
}

export default Content;