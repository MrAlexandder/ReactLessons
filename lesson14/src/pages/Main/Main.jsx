import React from "react";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Heder";
import Content from "../../components/Content/Content";
import Styled from './Main.styled'

const { Container, RightBlock, Window } = Styled;

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
      <Window>
        <Container>
          <Menu activeTab={activeTab} setActiveTab={setActiveTab}/>
          <RightBlock>
            <Header cash={cash} currentDate={currentDate}/>
            <Content buyCards={buyCards} cards={cards} activeTab={activeTab} count={count} buyCard={buyCard}/>
          </RightBlock>
        </Container>
      </Window>

    )
  }
}

export default Main;