import React from "react";
import masterCardIcon from "../../assets/icons/mastercard.svg"
import qrCodeIcon from "../../assets/icons/qrcode.svg"
import Styled from "./BankCard.styled";

const {
  Container,
  Icon,
  Month,
  MonthContainer,
  QrCodeIcon
} = Styled;

class BankCard extends React.Component {
  render() {
    return (
      <Container>
        <Icon src={masterCardIcon} />
        <h3 style={{lineHeight: "1em"}}>BBB</h3>
        <h3 style={{lineHeight: "1em"}}>**** 9618</h3>
        <MonthContainer>
          <Month>
            <span style={{width: "4em"}}>
              Expire date
            </span>
            <span><b>09/30</b></span>
          </Month>
          <QrCodeIcon src={qrCodeIcon} />
        </MonthContainer>
      </Container>
    )
  }
}

export default BankCard;