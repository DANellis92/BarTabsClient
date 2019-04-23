import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Header extends React.Component {
  render(props) {
    return (
      <Navbar className="header">
        <NavbarBrand>Bar Tabs</NavbarBrand>
        <Nav navbar>
          <NavItem className="userComp">
            <Button color="danger" onClick={this.props.logoutfunc}>
              {"Logout"}
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
