import styled from "styled-components"
import {Form, Input, Row} from "antd";

export default {
  Container: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 1em;
  `,
  Block: styled.div`
      display: flex;
      justify-content: space-between;
      padding: 1.5rem;
      border: 1px solid var(--gray);
      border-radius: 0.5em;
  `,
  InfoContainer: styled.div`
      display: flex;
      align-items: center;
      gap: 1em;
  `,
  FullName: styled.div`
    font-size: 1.6em;
  `,
  Level: styled.div`
    font-size: 1.3em;
  `,
  Address: styled.div``,
  Row: styled(Row)`
      display: flex;
      width: 100%;
      gap: 1em;
  `,
  FormsContainer: styled.div`
      display: flex;
      flex-direction: column;
      gap: 1em;
      height: 100%;
      overflow-y: auto;
  `,
  Field: styled(Form.Item)`
      font-weight: bold !important;
      .ant-form-item-label > label {
          color: var(--dark-gray) !important;
          font-size: 1.1em;
      }
      
  `,
  Input: styled(Input)`
      color: var(--dark-gray) !important;
      ${(props) => (props.disabled && ('cursor: default !important;'))}
  `,
  ButtonsContainer: styled.div`
      display: flex;
      flex-direction: column;
      width: 6em;
      gap: 1em;
  `
}