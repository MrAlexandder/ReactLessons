import styled from "styled-components";

export default {
  Window: styled.div`
      width: 90%;
      height: 90%;
      background: white;
      border-radius: 1em;
      box-shadow: 2px 2px 10px #a3a3a3;
  `,
  Container: styled.div`
      display: flex;
      height: 100%;
  `,
  RightBlock: styled.div`
      display: flex;
      flex-direction: column;
      padding: 1em;
      width: 100%;
      gap: 1em;
  `
}