import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CallCreate from "./Calls/CallCreate";
import CallLog from "./Calls/CallLog";
import CallEdit from "./Calls/CallEdit";
import "./Bar.css";
import { AuthContext } from "./AuthContext";

class BarPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call: [],
      updatePressed: false,
      callToUpdate: {}
    };
  }

  componentDidMount() {
    this.fetchCalls();
  }
  fetchCalls = () => {
    fetch("http://localhost:3050/call/getallbyowner", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.auth.sessionToken
      })
    })
      .then(res => res.json())
      .then(CallData => {
        return this.setState({ call: CallData });
      })
      .catch(err => console.log(err));
  };

  callDelete = event => {
    fetch(`http://localhost:3050/call/delete/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ call: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.auth.sessionToken
      })
    }).then(res => this.fetchCalls());
  };

  callUpdate = (event, call) => {
    fetch(`http://localhost:3050/call/update/${call.id}`, {
      method: "PUT",
      body: JSON.stringify({ call: call }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.auth.sessionToken
      })
    }).then(res => {
      this.setState({ updatePressed: false });
      this.fetchCalls();
    });
  };

  setUpdatedCall = (event, call) => {
    this.setState({
      callToUpdate: call,
      updatePressed: true
    });
  };

  render() {
    const call =
      this.state.call.length >= 1 ? (
        <CallLog
          call={this.state.call}
          delete={this.callDelete}
          update={this.setUpdatedCall}
        />
      ) : (
        <h2>Havent made a call before? Better get on it!</h2>
      );
    return (
      <Container
        id="Part"
        style={{
          textAlign: "center"
        }}
      >
        <Row>
          <CallCreate
            token={this.props.token}
            updateCallArray={this.fetchCalls}
          />
        </Row>
        <Row>
          <Col size="md-auto">{call}</Col>
        </Row>
        <Col md="12">
          {this.state.updatePressed ? (
            <CallEdit
              t={this.state.updatePressed}
              update={this.callUpdate}
              call={this.state.callToUpdate}
            />
          ) : (
            <div />
          )}
        </Col>
      </Container>
    );
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <BarPost {...props} auth={auth} />}
  </AuthContext.Consumer>
);
