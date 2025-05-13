import React from 'react';
import Buy from './Buy/Buy';
import BankCard from "../BankCard/BankCard";
import "./Purchases.css";

class Purchases extends React.Component {
  render() {
    return (
      <div className="purchases-container">
        <div>
          <Buy />
        </div>
        <BankCard />
      </div>

    )
  }
}

export default Purchases;