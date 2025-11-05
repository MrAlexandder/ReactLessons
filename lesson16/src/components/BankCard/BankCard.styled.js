import styled from "styled-components";

export default {
  Container: styled.div`
      background: var(--purpure-gradient);
      box-shadow: 2px 2px 10px 1px #a3a3a3;
      border-radius: 1em;
      color: white;
      padding: 1em;
      position: relative;
  `,
  MonthContainer: styled.div`
      display: flex;
      justify-content: space-between;
  `,
  Month: styled.div`
      display: flex;
      align-items: center;
  `,
  Icon: styled.img`
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      width: 4em;
  `,
  QrCodeIcon: styled.img`
      width: 4em;
      filter: invert(1);
  `
}