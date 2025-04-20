import React from "react";
import cardIcon from "../../assets/icons/book.svg";
import addCardIcon from "../../assets/icons/addCard.svg";
import "./Card.css";

export class Card extends React.Component {

  state = {
    isAdded: false
  }

  toggleIsAdded = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isAdded: !prevState.isAdded
      }
    })
  }

  render() {
    const {price = "123", cardName = "book"} = this.props

    const cardClass = this.state.isAdded
      ? "card-container card-violet-background"
      : "card-container card-orange-background";

    return (
      <div className={cardClass}>
        <img className="card-add-icon" onClick={this.toggleIsAdded} src={addCardIcon}/>
        <img className="card-icon" src={cardIcon}/>
        <div className="card-price">{price}</div>
        <div className="card-name">{cardName}</div>
      </div>
    )
  }
}

export default Card;