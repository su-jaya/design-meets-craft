import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navBar justify-content-center">
        <Nav>
          <Nav.Link className="navItem" href="/">
            Discover
          </Nav.Link>
          <Nav.Link className="navItem">Designer</Nav.Link>
          <Nav.Link className="navItem">Artisan</Nav.Link>
          <NavDropdown title="About us" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/aboutus">
              About Design Meets Craft
            </NavDropdown.Item>
            <NavDropdown.Item href="/aboutus">How it works</NavDropdown.Item>
            <NavDropdown.Item href="/aboutus">For Designers</NavDropdown.Item>
            <NavDropdown.Item href="/aboutus">For Artisans</NavDropdown.Item>
            <NavDropdown.Item href="/aboutus">Membership</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="navItem">Design for Good</Nav.Link>
          <Nav.Link className="navItem">Shop</Nav.Link>
          <Nav.Link className="navItem">Journal</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
