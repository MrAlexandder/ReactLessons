import React from "react";
import Card from "../../../../components/Card/Card";

const Shopping = ({cards}) => {
  return (
    <>
      {
        cards.map(({cardName, price}) => (<Card price={price} cardName={cardName}/>))
      }
    </>
  )
}

export default Shopping;