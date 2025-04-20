import React from "react";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Heder";
import Content from "../../components/Content/Content";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Menu/>
        <div className="main-content">
          <Header/>
          <Content/>
        </div>
      </div>
    )
  }
}

export default Main;