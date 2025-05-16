import styled from "styled-components";

export default {
  Container: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1em;
      border-right: 1px solid var(--gray);
  `,
  Items: styled.div`
      display: flex;
      flex-direction: column;
      gap: 1em;
  `,
  Item: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3em;
      height: 3em;
      border-radius: 1em;
      background-color: ${(props) => (props.isActive ? 'rgba(202, 176, 255, 0.53)' : 'inherit')};
      transition: background-color 0.25s ease;
  `,
  Icon: styled.img`
      width: 1.5em;
  `
}