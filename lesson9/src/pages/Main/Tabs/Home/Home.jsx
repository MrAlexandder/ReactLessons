import React from "react";
import Purchases from "../../../../components/Purchases/Purchases";
import Card from "../../../../components/Card/Card";
import './Home.css';

const Home = (props) => (
  <div className="home-container">
    <Purchases/>
    <Card/>
  </div>
)

export default Home;