import React from "react";

export class Card extends React.Component {
  cardName = 'Книга 1'
  price = '0.00'

  render() {
    return (
      <div>
        <div>Товар: {this.cardName}</div>
        <div>Цена: {this.price}</div>
      </div>
    )
  }
}

export default Card;