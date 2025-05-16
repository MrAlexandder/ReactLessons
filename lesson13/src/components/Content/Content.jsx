import React from "react";
import Shopping from "../../pages/Main/Tabs/Shopping/Shopping";
import Home from "../../pages/Main/Tabs/Home/Home";
import Statistics from "../../pages/Main/Tabs/Statistics/Statistics.jsx";
import Styled from "./Content.styled";

const { Container } = Styled;

class Content extends React.Component {
  render() {
    const { activeTab, cards, buyCard, buyCards } = this.props;

    return (
      <Container>
        {activeTab === "home" && <Home buyCards={buyCards} buyCard={buyCard}/>}
        {activeTab === "shopping" && <Shopping name={"test"} cards={cards} buyCard={buyCard}/>}
        {activeTab === "statistics" && <Statistics/>}
      </Container>
    )
  }
}

export default Content;