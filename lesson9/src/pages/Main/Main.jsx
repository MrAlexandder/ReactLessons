import React from "react";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Heder";
import Content from "../../components/Content/Content";
import "./Main.css";

class Main extends React.Component {
  state = {
    activeTab: "shopping", // "home" | "shopping" | "statistics"
  }

  setActiveTab = (activeTab) => {
    this.setState({ activeTab });
  }

  render() {
    return (
      <div className="main-container">
        <Menu activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}/>
        <div className="main-content">
          <Header/>
          <Content activeTab={this.state.activeTab}/>
        </div>
      </div>
    )
  }
}

export default Main;