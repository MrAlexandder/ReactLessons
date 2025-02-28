import React from "react";
import cardIcon from "../../assets/icons/book.svg";
import "./Card.css";

export class Card extends React.Component {
  cardName = 'Имя товара'
  price = '0.00'

  render() {
    return (
      <div className="card-container">
        <img className="card-icon" src={cardIcon}/>
        <div className="card-price">{this.price}</div>
        <div className="card-name">{this.cardName}</div>
      </div>
    )
  }
}

export default Card;