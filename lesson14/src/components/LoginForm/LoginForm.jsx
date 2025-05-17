import {Component} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {Form} from "antd";
import icon from "../../assets/icons/signInIcon.png";
import {NavLink} from "react-router";
import Styled from './LoginForm.styled';

const { FormContainer, Icon } = Styled;

class LoginForm extends Component {
  onFinishFailed = (e) => {
    console.log(e);
  }

  onFinish = (values) => {
    console.log(values);
  }

  render() {
    return (
      <FormContainer>
        <div>
          <Icon src={icon}/>
        </div>
        <Form
          name="signIn"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
          layout="vertical"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              type="password"
            />
          </Form.Item>
          <Form.Item label={null} style={{ margin: 'auto' }}>
            <NavLink to={'/main'}>
              <Button htmlType="submit">
                Sign In
              </Button>
            </NavLink>
          </Form.Item>
        </Form>
      </FormContainer>
    )
  }
}

export default LoginForm