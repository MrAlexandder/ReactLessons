import React from "react";
import Card from "../../../../components/Card/Card";
import './Shopping.css';

const Shopping = ({cards, buyCard}) => {
  return (
    <div className="shopping-container">
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
    </div>
  )
}

export default Shopping;