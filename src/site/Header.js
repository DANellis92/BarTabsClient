import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Auth from "../comps/Auth";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Navbar className="header">
        <NavbarBrand>Bar Tabs</NavbarBrand>
        <Nav navbar>
          <NavItem className="userComp">
            <Button color="danger" onClick={this.toggle}>
              {"Owners, click here"}
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle} />
              <ModalBody>
                <Auth />
              </ModalBody>
            </Modal>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
