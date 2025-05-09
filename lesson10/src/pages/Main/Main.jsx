import React from "react";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Heder";
import Content from "../../components/Content/Content";
import "./Main.css";

class Main extends React.Component {
  render() {
    const {
      setActiveTab,
      buyCard,
      state: {
        activeTab,
        cash,
        currentDate,
        count,
        cards,
        buyCards
      }
    } = this.props;

    return (
      <div className="main-container">
        <Menu activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className="main-content">
          <Header cash={cash} currentDate={currentDate} />
          <Content buyCards={buyCards} cards={cards} activeTab={activeTab} count={count} buyCard={buyCard}/>
        </div>
      </div>
    )
  }
}

export default Main;