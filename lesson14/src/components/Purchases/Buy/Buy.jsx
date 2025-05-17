import React from "react";
import moneyIcon from "../../../assets/icons/money.svg";
import Styled from "./Buy.styled";

const {
  Container,
  Icon,
  IconContainer,
  Money,
  ProductName
} = Styled

class Buy extends React.Component {
  render() {
    return (
      <Container>
        <IconContainer>
          <Icon src={moneyIcon}/>
        </IconContainer>

        <ProductName>
          <span>Name</span>
          <span>category</span>
        </ProductName>
        <Money>
          <b>-$123</b>
        </Money>
      </Container>
    )
  }
}

export default Buy;