import React from "react";
import Purchases from "../../../../components/Purchases/Purchases";
import Card from "../../../../components/Card/Card";
import './Home.css';

const Home = ({buyCards, buyCard}) => (
  <div className="home-container">
    <Purchases/>
    {
      buyCards.map(({cardName, price, isAdded, id}) => (
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

export default Home;