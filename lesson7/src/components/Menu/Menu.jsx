import React from "react";
import "./Menu.css";
import homeIcon from "../../assets/icons/home.svg"
import shoppingIcon from "../../assets/icons/shopping.svg"
import statisticsIcon from "../../assets/icons/statistics.svg"
import signoutIcon from "../../assets/icons/signout.svg"

class Menu extends React.Component {
  test = "test"

  constructor() {
    super();

    this.onMenuItemClick2 = () => {
      console.log("test", this.test)
    }
  }

  onMenuItemClick() {
    debugger
    console.log("test", this.test)
  }

  onMenuItemClick3 = () => {
    console.log("test", this.test)
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-items">
          <div className="menu-item" onClick={this.onMenuItemClick.bind(this)}>
            <img className="menu-item-icon" src={homeIcon}/>
          </div>
          <div className="menu-item" onClick={this.onMenuItemClick2}>
            <img className="menu-item-icon" src={shoppingIcon}/>
          </div>
          <div className="menu-item" onClick={this.onMenuItemClick3}>
            <img className="menu-item-icon" src={statisticsIcon}/>
          </div>
        </div>
        <div className="menu-item">
          <img className="menu-item-icon" src={signoutIcon}/>
        </div>
      </div>
    )
  }
}

export default Menu;