import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { AuthContext } from "./AuthContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passwordhash: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    fetch("http://localhost:3050/user/login", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        this.props.auth.setToken(data.sessionToken);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="li_username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="passwordhash">Password</Label>
            <Input
              id="li_password"
              type="password"
              name="passwordhash"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
export default props => (
  <AuthContext.Consumer>
    {auth => <Login {...props} auth={auth} />}
  </AuthContext.Consumer>
);
