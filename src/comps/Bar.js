import React, { Component } from "react";
import Sidebar from "../site/Sidebar";
import Home from "../comps/barPost";
import { Container } from "reactstrap";
import Particles from "./Particles/Particles";
import "./Bar.css";

class Bar extends Component {
  componentDidMount() {
    console.log("component mounted");
  }
  state = {};
  render() {
    return (
      <div>
        <div className="particle-container">
          <Particles />
        </div>

        <Container>
          <Home />
        </Container>
      </div>
    );
  }
}

export default Bar;
