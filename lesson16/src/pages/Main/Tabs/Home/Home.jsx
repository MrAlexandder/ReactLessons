import React from "react";
import Purchases from "../../../../components/Purchases/Purchases";
import Card from "../../../../components/Card/Card";
import Styled from './Home.styled';

const { Container } = Styled;

const Home = ({buyCards, buyCard}) => (
  <Container>
    <Purchases/>
    {
      buyCards.map(({cardName, price, isAdded, id}) => (
        <Card
          price={price}
          cardName={cardName}
          isAdded={isAdded}
          buyCard={() => buyCard(id)}
        />
      ))
    }
  </Container>
)

export default Home;