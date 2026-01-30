import styled from "styled-components"

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 4.5em;
    box-shadow: 2px 2px 10px #7b7b7b;
    align-items: end;
    justify-content: center;
    padding-right: 1em;
    padding-left: 1em;
      background: ${(props) => (props.color)};
      
      &:before {
          content: "${(props) => (props.text)}";
      }
 `
}