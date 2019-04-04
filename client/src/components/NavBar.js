import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Item as="li">
              <Link to="/">Discover</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/designers">Designers</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/artisans">Artisans</Link>
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
              <Link to="/editprofile">Design for Good</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/editprofile">Shop</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/editprofile">Journal</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
