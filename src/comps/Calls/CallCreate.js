import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Container
} from "reactstrap";
import { AuthContext } from "../AuthContext";

class CallCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grabber: "",
      definition: "",
      duration: "",
      owner: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:3050/call/`, {
      method: "POST",
      body: JSON.stringify({ call: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.auth.sessionToken
      })
    })
      .then(res => res.json())
      .then(callData => {
        this.props.updateCallArray();
        this.setState({
          grabber: "",
          definition: "",
          duration: "",
          owner: ""
        });
      });
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <Container
        style={{
          margin: "3em"
        }}
      >
        <Button color="dark" onClick={this.toggle}>
          {this.props.buttonLabel}
          {"Create a call here!"}
        </Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}>Make a call</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="grabber">YOU</Label>
                <Input
                  id="grabber"
                  type="text"
                  name="grabber"
                  value={this.state.grabber} //2
                  placeholder="Name of your establishment"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  name="description"
                  value={this.state.description}
                  placeholder="Let everybody know what you're offering"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="duration">Duration</Label>
                <Input
                  id="duration"
                  type="text"
                  name="duration"
                  value={this.state.duration}
                  placeholder="How long would you like it to be live?"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
              <Button type="submit" color="primary" onClick={this.toggle}>
                {" "}
                Submit{" "}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <CallCreate {...props} auth={auth} />}
  </AuthContext.Consumer>
);
