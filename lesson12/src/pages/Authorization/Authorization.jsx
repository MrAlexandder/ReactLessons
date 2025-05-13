import './Authorization.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import {Typography} from "antd";
import {useParams} from "react-router";

function Authorization(props) {
  const params = useParams();
  console.log(params);
  const {toggleForm, auth: {isSignIn}} = props

  const isRegistration = params['isRegistration'] === '1' ? !isSignIn : isSignIn;

  const toggleTitle = isRegistration ? 'Sign Up' : 'Sign In';

  return (
    <div className="auth-window">
      <LoginForm/>
      <RegistrationForm/>
      <div
        onClick={toggleForm}
        className="toggle-box"
        style={{
          right: isRegistration ? '0' : '50%',
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

export default Authorization;