import React from "react";
import "./Content.css";
import Shopping from "../../pages/Main/Tabs/Shopping/Shopping";
import Home from "../../pages/Main/Tabs/Home/Home";
import Statistics from "../../pages/Main/Tabs/Statistics/Statistics.tsx";

class Content extends React.Component {
  state = {
    count: 0,
    isVisible: true,
    cards: [
      {
        price: "10.1",
        cardName: "book",
      }, {
        price: "220.1",
        cardName: "telephone",
      },
      {
        price: "4220.1",
        cardName: "laptop",
      }
    ]
  }

  addCard = () => {
    console.log(this.state.isVisible);

    this.setState((prevState) => ({ count: prevState.count + 1 }), () => {})
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))


    this.setState({
      cards : [...this.state.cards, {
        price: "220.1",
        cardName: "book2"
      }]
    })
  }

  render() {
    const { activeTab } = this.props;

    return (
      <div className="content-container">
        {activeTab === "home" && <Home/>}
        {activeTab === "shopping" && <Shopping name={"test"} cards={this.state.cards}/>}
        {activeTab === "statistics" && <Statistics/>}
      </div>
    )
  }
}

export default Content;