import React from "react";
import cardIcon from "../../assets/icons/book.svg";
import "./Card.css";

export class Card extends React.Component {
  render() {
    const {price = "123", cardName = "book"} = this.props

    return (
      <div className="card-container">
        <img className="card-icon" src={cardIcon}/>
        <div className="card-price">{price}</div>
        <div className="card-name">{cardName}</div>
      </div>
    )
  }
}

export default Card;