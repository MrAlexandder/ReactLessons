import React from "react";
import './Header.css';
import Button from "../../../components/Button/Button";
import {NavLink} from "react-router";

class Header extends React.Component {
  render() {
    return (
      <div className="overview-header-container">
        <NavLink to="/auth/0" end>
          <Button size={'normal'}>Sign in</Button>
        </NavLink>
        <NavLink to="/auth/1" end>
          <div>
            registration
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Header;