import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "./Footer.css";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container className="footerContainer" fluid>
          <Row>
            <Col>
              <Nav className="flex-column align-items-start">
                <Nav.Item as="li">
                  <div className="footerHeadline">ABOUT</div>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/aboutus" className="footerNavItem">
                    About us
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#" className="footerNavItem">
                    Contact us
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#" className="footerNavItem">
                    Knowledge Center
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#" className="footerNavItem">
                    Partners
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column align-items-start">
                <Nav.Item as="li" className="footerHeadline">
                  NEWS
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Press
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Journal
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Events
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Career
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column align-items-start">
                <Nav.Item className="footerHeadline">INFORMATION</Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Privacy Policy
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Terms & Conditions
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Cookie Policy
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="#" className="footerNavItem">
                    Imprint
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Nav className="footerHeadline">SUBSCRIBE TO OUR NEWSLETTER:</Nav>
              <br />
              <Nav className="flex-column align-items-start footerHeadline">
                CONNECT TO:
                <SocialMedia />
              </Nav>
            </Col>
          </Row>
        </Container>

        <Container className="footerContainer" fluid>
          <div className="footerCopyright">
            © Copyright Design Meets Craft 2019
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
