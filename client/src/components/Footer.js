import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "../Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerBackground">
        <Container>
          <Row>
            <Col>
              <Nav className="flex-column align-items-start">
                <Nav.Link className="footerHeadline">ABOUT</Nav.Link>
                <Nav.Link to="/aboutus">About us</Nav.Link>
                <Nav.Link>Contact us</Nav.Link>
                <Nav.Link>Knowledge Center</Nav.Link>
                <Nav.Link>Partners</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column align-items-start">
                <Nav.Link className="footerHeadline">NEWS</Nav.Link>
                <Nav.Link>Press</Nav.Link>
                <Nav.Link>Journal</Nav.Link>
                <Nav.Link>Events</Nav.Link>
                <Nav.Link>Career</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column align-items-start">
                <Nav.Link className="footerHeadline">INFORMATION</Nav.Link>
                <Nav.Link>Privacy Policy</Nav.Link>
                <Nav.Link>Terms & Conditions</Nav.Link>
                <Nav.Link>Cookie Policy</Nav.Link>
                <Nav.Link>Imprint</Nav.Link>
              </Nav>
            </Col>
            <Col className="footerHeadline">SUBSCRIBE TO OUR NEWSLETTER:</Col>
          </Row>
        </Container>
        {/* <div className="footerCopyright">Copyright Design Meets Craft 2019</div> */}
      </div>
    );
  }
}

export default Footer;
