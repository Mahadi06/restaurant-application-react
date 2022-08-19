import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <div className="mb-3">
        <Navbar dark color="dark" expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.navToggle} />
            <NavbarBrand href="/">Restaurant App</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto">
                <NavItem className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                  <Link to="/menu" className="nav-link">
                    Menu
                  </Link>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                  <Link to="/contact" className="nav-link ">
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
