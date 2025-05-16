import React from "react";
import Button from "../../../components/Button/Button";
import {NavLink} from "react-router";
import Styled from "./Header.styled";

const { Container } = Styled;

class Header extends React.Component {
  render() {
    return (
      <Container color="white" text={"hi"}>
        <NavLink to="/auth/0" end>
          <Button size={'normal'}>Sign in</Button>
        </NavLink>
        <NavLink to="/auth/1" end>
          <div>
            registration
          </div>
        </NavLink>
      </Container>
    )
  }
}

export default Header;