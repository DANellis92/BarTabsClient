import React from "react";
import "./Auth.css";
import { Container, Button, ModalHeader } from "reactstrap";
import Login from "./Login";
import Signup from "./SignUp";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  loginToggle = event => {
    event.preventDefault();
    const login = this.state.login;
    this.setState({
      login: !login
    });
  };

  render() {
    let title = this.state.login ? "Login" : "Sign Up";
    let signupFields = this.state.login ? (
      <Login setToken={this.props.setToken} t />
    ) : (
      <Signup setToken={this.props.setToken} />
    );
    let buttontitle = this.state.login
      ? "Click here to Sign Up!"
      : "Have an account? Log in here!";

    return (
      <Container>
        <Button onClick={e => this.loginToggle(e)} className="logTog">
          {buttontitle}
        </Button>
        <ModalHeader>{title}</ModalHeader>
        {signupFields}
      </Container>
    );
  }
}

export default Auth;
