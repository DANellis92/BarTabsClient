import React, { Component } from "react";
import BarFeed from "../comps/TestCard";

import {
  CardImg,
  CardBody,
  Row,
  Col,
  Card,
  CardText,
  Container
} from "reactstrap";
import { AuthContext } from "../comps/AuthContext";
import Beer from "../assets/croppedMug.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call: []
    };
  }
  componentDidMount() {
    this.fetchCalls();
  }
  fetchCalls = () => {
    let url = "http://localhost:3050/call";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ call: data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4" />
          <Col md="4">
            <BarFeed call={this.state.call} />
          </Col>
          <Col md="4" />
        </Row>
      </Container>
    );
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <Home {...props} auth={auth} />}
  </AuthContext.Consumer>
);
