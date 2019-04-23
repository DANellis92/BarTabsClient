import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./site/Header";
import BarHeader from "./site/BarHeader";
import { AuthContext } from "./comps/AuthContext";
import Home from "./site/Home";
import Bar from "./comps/Bar";
import { Container, Col, Row } from "reactstrap";
import Footer from "./site/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.setToken = token => {
      localStorage.setItem("token", token);
      this.setState({ sessionToken: token });
    };
    this.state = {
      sessionToken: "",
      setToken: this.setToken,
      call: []
    };
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    } else {
      return null;
    }
  }

  setSessionToken = token => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  logout = () => {
    this.setState({
      sessionToken: ""
    });
    localStorage.clear();
  };

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Container className="bar">
          <BarHeader logoutfunc={this.logout} />
          <Route path="/Bar" exact>
            <Bar />
          </Route>
          <Footer />
        </Container>
      );
    } else {
      return (
        <Container className="home">
          <Header />
          <Route path="/Home">
            <Home />
          </Route>
          <Footer />
        </Container>
      );
    }
  };
  render() {
    return (
      <Router>
        <AuthContext.Provider value={this.state}>
          {this.protectedViews()}
        </AuthContext.Provider>
      </Router>
    );
  }
}

export default App;
