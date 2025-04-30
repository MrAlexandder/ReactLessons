import React from "react";
import Card from "../../../../components/Card/Card";
import './Shopping.css';

const Shopping = ({cards}) => {
  return (
    <div className="shopping-container">
      {
        cards.map(({cardName, price}) => (<Card price={price} cardName={cardName}/>))
      }
    </div>
  )
}

export default Shopping;