import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="justify-content-center">
        <Nav>
          <Nav.Item as="li">
            <Link to="/">Discover</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="#">Designers</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="#">Artisans</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/aboutus">About us</Link>
          </Nav.Item>
          {/* <NavDropdown title="About us" id="collasible-nav-dropdown">
            <NavDropdown.Item as="li">
              <Link to="/aboutus">About Design Meets Craft</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="li">
              <Link to="/aboutus">How it works</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="li">
              <Link to="/aboutus">For Designers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="li">
              <Link to="/aboutus">For Artisans</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="li">
              <Link to="/aboutus">Membership</Link>
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Item as="li">
            <Link to="#">Design for Good</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="#">Shop</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="#">Journal</Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
