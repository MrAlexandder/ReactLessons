import React from "react";
import Shopping from "../../pages/Main/Tabs/Shopping/Shopping";
import Home from "../../pages/Main/Tabs/Home/Home";
import Statistics from "../../pages/Main/Tabs/Statistics/Statistics.jsx";
import Styled from "./Content.styled";
import Settings from "../../pages/Settings/Settings";

const { Container } = Styled;

class Content extends React.Component {
  render() {
    const { activeTab, cards, buyCard, buyCards, userInfo, setPersonInfo, setAddressInfo } = this.props;

    return (
      <Container>
        {activeTab === "home" && <Home buyCards={buyCards} buyCard={buyCard}/>}
        {activeTab === "shopping" && <Shopping name={"test"} cards={cards} buyCard={buyCard}/>}
        {activeTab === "statistics" && <Statistics/>}
        {activeTab === "settings" && (
          <Settings
            userInfo={userInfo}
            setPersonInfo={setPersonInfo}
            setAddressInfo={setAddressInfo}
          />)}
      </Container>
    )
  }
}

export default Content;