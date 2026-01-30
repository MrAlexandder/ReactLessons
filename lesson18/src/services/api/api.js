import {addressInfo, buyCards, cards, cash, personInfo} from "./testData";

export class Api {
  getUserCash = () => {
    return cash
  }

  getCards = () => {
    return cards
  }

  getBuyCards = () => {
    return buyCards
  }

  getPersonInfo = () => {
    return personInfo
  }

  getAddressInfo = () => {
    return addressInfo
  }
}