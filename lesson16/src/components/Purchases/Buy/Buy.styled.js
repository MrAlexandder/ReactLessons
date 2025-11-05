import styled from "styled-components";

export default {
  Container: styled.div`
      display: flex;
      justify-content: space-between;
      box-shadow: 1px 2px 5px 1px #a3a3a3;
      padding: 0.5em;
      border-radius: 1em;
  `,
  ProductName: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 0.5em;
      padding-right: 0.5em;
      justify-content: center;
  `,
  IconContainer: styled.div`
      background: var(--yellow-gradient);
      padding: 0.8em;
      border-radius: 1em;
      display: flex;
      align-items: center;
  `,
  Icon: styled.img`
      width: 1.2em;
      filter: invert(1);
  `,
  Money: styled.div`
      display: flex;
      align-items: center;
  `
}