import React from "react";
import Card from "../../../../components/Card/Card";
import Styled from "./Shopping.styled";

const { Container } = Styled;

const Shopping = ({cards, buyCard}) => {
  return (
    <Container>
      {
        cards.map(({cardName, price, isAdded, id}) => (
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
}

export default Shopping;