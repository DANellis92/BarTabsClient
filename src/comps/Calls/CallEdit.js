import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

class CallEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grabber: "",
      description: "",
      duration: "",
      id: ""
    };
  }

  componentDidMount() {
    this.setState({
      grabber: this.props.call.grabber,
      description: this.props.call.description,
      duration: this.props.call.duration,
      id: this.props.call.id
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.update(event, this.state);
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Update your call</ModalHeader>
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
                <Label for="duration">Type</Label>
                <Input
                  type="text"
                  name="duration"
                  id="duration"
                  value={this.state.duration}
                  onChange={this.handleChange}
                  placeholder="How long would you like it to be live?"
                />
              </FormGroup>
              <Button color="secondary" onClick={this.props.toggle}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {" "}
                Submit{" "}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CallEdit;
