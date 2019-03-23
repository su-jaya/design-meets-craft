import React, { Component } from "react";
import "./Profile.css";
import Header from "../Header";
import NavBar from "../NavBar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import ProfileCard from "./ProfileCard";
import Card from "../Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />

        {/* Banner */}
        <div className="profileBanner">
          <Image
            src="/images/banner_test.png"
            alt="profile banner"
            className="w-100 center-block"
            height="400em"
          />
        </div>

        {/* Profile Box */}
        <div className="profileBoxPosition">
          <ProfileCard />
        </div>

        {/* Profile NavBar */}

        <div className="profileNavBar">
          <Navbar expand="lg">
            <Nav>
              <Nav.Link>Your Showroom</Nav.Link>
              <Nav.Link>Watchlist</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
              <Nav.Link>Reviews</Nav.Link>
            </Nav>
          </Navbar>
        </div>

        {/* Profile Matches */}

        <div className="profileMatchesHeadline">
          <h1>Matches by your needs</h1>
          <button className="profileMatchesButton">SEE ALL</button>
        </div>

        <div>
          <p>tags tags tags tags tags tags tags tags tags</p>
        </div>

        <Container className="homeDesignersContainer" fluid={true}>
          <Row className="homeDesignersRow">
            <Col className="homeDesignersColumn mx-auto">
              <Card class="cardHeadlineArtisan" />
            </Col>
            <Col className="homeDesignersColumn mx-auto">
              <Card class="cardHeadlineArtisan" />
            </Col>
            <Col className="homeDesignersColumn mx-auto">
              <Card class="cardHeadlineArtisan" />
            </Col>
            <Col className="homeDesignersColumn mx-auto">
              <Card class="cardHeadlineArtisan" />
            </Col>
          </Row>
        </Container>
        <div className="homeDivider" />

        {/* Profile Edits */}
        <Container fluid={true} className="profileEditContainer">
          <Row>
            <Col xs={8}>
              <div>
                <div className="profileEditHeadline">
                  <h1>Your profession</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                <p>tags tags tags tags tags tags tags tags tags</p>
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Your needs</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                <p>tags tags tags tags tags tags tags tags tags</p>
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Destination</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                <p>tags tags tags tags tags tags tags tags tags</p>
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Production capacity</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                <p className="profileEditText">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Looking for</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                <p className="profileEditText">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Gallery</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                <p>images</p>
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
