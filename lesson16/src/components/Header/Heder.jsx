import React from "react";
import avatarIcon from "../../assets/icons/avatar.svg"
import notificationIcon from "../../assets/icons/notification.svg"
import searchIcon from "../../assets/icons/search.svg"
import Styled from "./Header.styled";

const {
  Container,
  AvatarContainer,
  ControlContainer,
  Icon,
  CurrentDate,
  CashContainer,
  SearchContainer,
  SearchIcon,
  Search
} = Styled;

class Header extends React.Component {
  render() {
    const { cash, currentDate } = this.props;

    return (
      <Container>
        <AvatarContainer>
          <Icon src={avatarIcon} />
          <CashContainer>
            <div>Name</div>
            <div><b>{cash}</b></div>
          </CashContainer>
        </AvatarContainer>
        <ControlContainer>
          <CurrentDate>
            {currentDate.toDateString()}
          </CurrentDate>
          <SearchContainer>
            <SearchIcon src={searchIcon} />
            <Search />
          </SearchContainer>
          <Icon src={notificationIcon} />
        </ControlContainer>
      </Container>
    )
  }
}

export default Header;