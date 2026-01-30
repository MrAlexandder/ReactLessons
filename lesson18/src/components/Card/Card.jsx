import React from "react";
import cardIcon from "../../assets/icons/book.svg";
import addCardIcon from "../../assets/icons/addCard.svg";
import Styled from "./Card.styled";

const {
  Container,
  Name,
  Price,
  AddIcon,
  Icon
} = Styled;

export class Card extends React.Component {
  render() {
    const {price = "123", cardName = "book", isAdded, buyCard} = this.props

    return (
      <Container isAdded={isAdded}>
        <AddIcon onClick={buyCard} src={addCardIcon}/>
        <Icon src={cardIcon}/>
        <Price>{price}</Price>
        <Name>{cardName}</Name>
      </Container>
    )
  }
}

export default Card;