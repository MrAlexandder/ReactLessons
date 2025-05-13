import {Component} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {Form} from "antd";
import './Login.css';
import icon from "../../assets/icons/signInIcon.png";
import {NavLink} from "react-router";

class LoginForm extends Component {
  onFinishFailed = (e) => {
    console.log(e);
  }

  onFinish = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="login-form">
        <div>
          <img src={icon} className="login-form-icon"/>
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
      </div>
    )
  }
}

export default LoginForm