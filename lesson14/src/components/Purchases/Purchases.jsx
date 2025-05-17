import React from 'react';
import Buy from './Buy/Buy';
import BankCard from "../BankCard/BankCard";
import Styled from "./Purchases.styled";

const { Container } = Styled;

class Purchases extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Buy />
        </div>
        <BankCard />
      </Container>

    )
  }
}

export default Purchases;