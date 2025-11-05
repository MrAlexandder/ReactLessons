class Store {
  main = {
    activeTab: "home", // "home" | "shopping" | "statistics"
    cash: 19542,
    currentDate: new Date(),
    count: 0,
    isVisible: true,
    cards: [
      {
        id: 1,
        price: "10.1",
        cardName: "book",
        isAdded: false
      }, {
        id: 2,
        price: "220.1",
        cardName: "telephone",
        isAdded: false
      },
      {
        id: 3,
        price: "4220.1",
        cardName: "laptop",
        isAdded: false
      }
    ],
    buyCards: [],
  }

  auth = {
    isSignIn: true,
  }
  userInfo = {
    personInfo: {
      firstName: "Ivan",
      lastName: "Ivanov",
      birthday: new Date("1990-01-01T00:00:00.000Z"),
      email: 'qwerty@gmail.com',
      phone: '+1234567890'
    },
    addressInfo: {
      country: 'Britain',
      city: 'London',
      actualAddress: '221B Baker Street',
      postalCode: 'NW1 5RT'
    }
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