import React, { Component } from "react";
import "./Profile.css";
import Header from "../Header";
import NavBar from "../NavBar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import ProfileCard from "./ProfileCard";
import Card from "../CardD";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import TagsInput from "react-tagsinput";
import { withRouter } from "react-router";

class Profile extends Component {
  state = {
    titleImage: "/images/default_title_imagine.jpg",
    gallery: []
  };

  render() {
    let theUser = this.props.userInSession;

    return (
      <div>
        <Header
          url={this.props.match.url}
          loggedIn={this.props.userInSession}
        />
        <NavBar />

        {/* Banner */}
        <div className="profileBanner">
          <Image
            src={
              theUser.titleImage === undefined
                ? this.state.titleImage
                : theUser.titleImage
            }
            alt="profile banner"
            className="w-100 center-block"
            height="400em"
          />
        </div>

        {/* Profile Box */}
        <div className="profileBoxPosition">
          <ProfileCard {...theUser} />
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
          <TagsInput
            className="suggestedTags viewTagsOnly"
            id="profession"
            value={theUser.tagsCategory}
          />
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
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="profession"
                  value={theUser.tagsCategory}
                />
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
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="needs"
                  value={theUser.tagsMaterial}
                />
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
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="destination"
                  value={theUser.tagsDestination}
                />
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
                <p className="profileEditText">{theUser.capacity}</p>
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
                <p className="profileEditText">{theUser.lookingfor}</p>
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
                {this.state.gallery.map((e, idx) => (
                  <img src={e} alt={idx} />
                ))}
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

export default withRouter(Profile);
