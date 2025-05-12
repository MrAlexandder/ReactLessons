import {Component} from "react";
import './Authorization.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Typography } from "antd";

class Authorization extends Component {
  render () {
    const { toggleForm, auth: { isSignIn } } = this.props

    const toggleTitle = isSignIn ? 'Sign Up' : 'Sign In';

    return (
      <div className="auth-window">
        <LoginForm/>
        <RegistrationForm/>
        <div
          onClick={toggleForm}
          className="toggle-box"
          style={{
            right: isSignIn ? '0' : '50%',
          }}
        >
          <Typography.Title
            style={{
              color: "white"
            }}
            level={2}
          >
            {toggleTitle}
          </Typography.Title>
        </div>
      </div>
    )
  }
}

export default Authorization;