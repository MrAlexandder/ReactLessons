import React from "react";
import "./Heder.css";
import avatarIcon from "../../assets/icons/avatar.svg"
import notificationIcon from "../../assets/icons/notification.svg"
import searchIcon from "../../assets/icons/search.svg"

class Header extends React.Component {
  render() {
    const { cash, currentDate } = this.props;

    return (
      <div className="header-container">
        <div className="header-avatar-conteiner">
          <img className="header-avatar-icon" src={avatarIcon} />
          <div className="header-cash-container">
            <div>Name</div>
            <div><b>{cash}</b></div>
          </div>
        </div>
        <div className="header-control-container">
          <div className="header-currentData">
            {currentDate.toDateString()}
          </div>
          <div className="header-search-container">
            <img className="header-search-icon" src={searchIcon} />
            <input className="header-search" />
          </div>
          <img className="header-notification-icon" src={notificationIcon} />
        </div>
      </div>
    )
  }
}

export default Header;