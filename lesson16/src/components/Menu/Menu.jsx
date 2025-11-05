import React from "react";
import homeIcon from "../../assets/icons/home.svg"
import shoppingIcon from "../../assets/icons/shopping.svg"
import statisticsIcon from "../../assets/icons/statistics.svg"
import signoutIcon from "../../assets/icons/signout.svg"
import settingsIcon from "../../assets/icons/settings.svg"
import Styled from './Menu.styled';

const {
  Container,
  Icon,
  Item,
  Items,
  DownContainer
} = Styled;

class Menu extends React.Component {
  updateActiveTab = (tab) => () => {
    this.props.setActiveTab(tab);
  }

  getClassName = (tab) => {
    return this.props.activeTab === tab
  }

  render() {
    return (
      <Container>
        <Items>
          <Item isActive={this.getClassName("home")} onClick={this.updateActiveTab("home")}>
            <Icon src={homeIcon}/>
          </Item>
          <Item isActive={this.getClassName("shopping")} onClick={this.updateActiveTab("shopping")}>
            <Icon src={shoppingIcon}/>
          </Item>
          <Item isActive={this.getClassName("statistics")} onClick={this.updateActiveTab("statistics")}>
            <Icon src={statisticsIcon}/>
          </Item>
        </Items>
        <DownContainer>
          <Item isActive={this.getClassName("settings")} onClick={this.updateActiveTab("settings")}>
            <Icon src={settingsIcon}/>
          </Item>
          <Item isActive={false}>
            <Icon src={signoutIcon}/>
          </Item>
        </DownContainer>
      </Container>
    )
  }
}

export default Menu;