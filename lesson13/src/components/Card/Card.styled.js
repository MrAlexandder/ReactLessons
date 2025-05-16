import styled from "styled-components";

export default {
  Container: styled.div`
      width: 12em;
      height: 5em;
      box-shadow: 2px 2px 10px 1px #a3a3a3;
      padding: 1em;
      border-radius: 1em;
      color: white;
      position: relative;
      background: ${(props) => (props.isAdded ? "var(--violet-gradient)" : "var(--orange-gradient)")};
  `,
  Price: styled.div`
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      font-size: 1.3em;
      height: 80%;
  `,
  Name: styled.div`
      font-size: 1.3em;
      height: 20%;
  `,
  Icon: styled.img`
      width: 2em;
      filter: invert(1);
      position: absolute;
  `,
  AddIcon: styled.img`
      width: 1.3em;
      cursor: pointer;
      filter: invert(1);
      position: absolute;
      top: 0.5em;
      right: 1em;
  `
}