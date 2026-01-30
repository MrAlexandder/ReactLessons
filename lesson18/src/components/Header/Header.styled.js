import styled from "styled-components";

export default {
  Container: styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid var(--gray);
      padding-bottom: 1em;
  `,
  AvatarContainer: styled.div`
      display: flex;
  `,
  CashContainer: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1em;
  `,
  ControlContainer: styled.div`
      display: flex;
      gap: 1em;
  `,
  CurrentDate: styled.div`
      display: flex;
      align-items: center;
  `,
  SearchContainer: styled.div`
      display: flex;
      align-items: center;
      border: 1px solid var(--gray);
      border-radius: 1em;
  `,
  Icon: styled.img`
      width: 1.2em;
      border: 1px solid var(--gray);
      border-radius: 1em;
      padding: 0.8em;
  `,
  SearchIcon: styled.img`
      padding: 0.5em;
      width: 1.2em;
  `,
  Search: styled.input`
      outline: none;
      border: none;
      font-size: 1em;
      padding-left: 0.1em;
  `
}