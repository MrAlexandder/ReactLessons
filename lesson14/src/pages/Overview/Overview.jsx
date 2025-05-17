import {Component} from "react";
import Header from "./Header/Header";
import Styled from "./Overview.styled";

class Overview extends Component {
  render() {
    return (
      <Styled.Container>
        <Header/>
      </Styled.Container>
    )
  }
}

export default Overview;