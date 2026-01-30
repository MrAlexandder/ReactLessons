import {Api} from "./services/api/api";

const api = new Api()

class Store {
  main = {
    activeTab: "home", // "home" | "shopping" | "statistics"
    cash: null,
    currentDate: new Date(),
    count: 0,
    isVisible: true,
    cards: [],
    buyCards: [],
  }

  auth = {
    isSignIn: true,
  }
  userInfo = {
    personInfo: {
      firstName: null,
      lastName: null,
      birthday: null,
      email: null,
      phone: null
    },
    addressInfo: {
      country: null,
      city: null,
      actualAddress: null,
      postalCode: null
    }
  }

  init = () => {
    this.updateCash()
    this.updateCard()
    this.updateBuyCard()
    this.updatePersonInfo()
    this.updateAddressInfo()
    this.rerenderTree()
  }

  updateCash = () => {
    const result = api.getUserCash()
    this.main.cash = result
  }

  updateCard = () => {
    const result = api.getCards()
    this.main.cards = result
  }

  updateBuyCard = () => {
    const result = api.getBuyCards()
    this.main.buyCards = result
  }

  updatePersonInfo = () => {
    const result = api.getPersonInfo()
    this.setPersonInfo(result);
  }

  updateAddressInfo = () => {
    const result = api.getAddressInfo()
    this.setAddressInfo(result);
  }

  setPersonInfo = (data) => {
    this.userInfo.personInfo = data
    this.rerenderTree()
  }

  setAddressInfo = (data) => {
    this.userInfo.addressInfo = data
    this.rerenderTree()
  }


  rerenderTree = () => {}

  toggleForm = () => {
    this.auth.isSignIn = !this.auth.isSignIn;
    this.rerenderTree()
  }

  setActiveTab = (activeTab) => {
    console.log(activeTab);
    this.main.activeTab = activeTab;
    this.rerenderTree()
  }

  buyCard = (id) => {
    const newCards = this.main.cards.map((card) => {
      if (id !== card.id) {
        return card;
      }
      return {
        ...card,
        isAdded: !card.isAdded,
      }
    })

    const newBuyCards = newCards.filter((card) => (card.isAdded));

    this.main.cards = newBuyCards;
    this.main.buyCards = newBuyCards
    this.rerenderTree()
  }
}

export default new Store();