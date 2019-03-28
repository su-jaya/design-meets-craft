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
import TagsInput from "react-tagsinput";

class Profile extends Component {
  state = {
    loggedInUser: null,
    tagsProfession: [],
    tagProfession: "",
    tagsNeeds: [],
    tagNeeds: "",
    tagsDestination: [],
    tagDestination: "",
    titleImage: "/images/default_title_imagine.jpg",
    gallery: []
  };

  // Remove Tags
  handleChange(tags, changed, changedIdx, toChange) {
    let field = `tags${toChange}`;
    this.setState({
      [field]: tags
    });
  }

  // Add Own Tag
  onChangeInput(tag, toChange, tags) {
    let field = `tag${toChange}`;
    this.setState({
      [field]: tag
    });
  }

  render() {
    let theUser = this.props.userInSession;
    if (!theUser) {
      return <h1>Loading...</h1>;
    }
    console.log(this.state);
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
            src={this.state.titleImage}
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
                <TagsInput
                  id="profession"
                  value={this.props.userInSession.tagsCategory}
                  onChange={(tags, changed, changedIdx) =>
                    this.handleChange(tags, changed, changedIdx, "Profession")
                  }
                  inputValue={this.props.userInSession.tagsCategory}
                  onChangeInput={(tag, toChange) =>
                    this.onChangeInput(
                      tag,
                      "Profession",
                      this.props.userInSession.tagsCategory
                    )
                  }
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
                  id="needs"
                  value={this.state.tagsNeeds}
                  onChange={(tags, changed, changedIdx) =>
                    this.handleChange(tags, changed, changedIdx, "Needs")
                  }
                  inputValue={this.state.tagNeeds}
                  onChangeInput={(tag, toChange) =>
                    this.onChangeInput(tag, "Needs", this.state.tagsNeeds)
                  }
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
                  id="destination"
                  value={this.state.tagsDestination}
                  onChange={(tags, changed, changedIdx) =>
                    this.handleChange(tags, changed, changedIdx, "Destination")
                  }
                  inputValue={this.state.tagDestination}
                  onChangeInput={(tag, toChange) =>
                    this.onChangeInput(
                      tag,
                      "Destination",
                      this.state.tagsDestination
                    )
                  }
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
                <p className="profileEditText">
                  {!this.state.loggedInUser ? (
                    <strong>Loading...</strong>
                  ) : (
                    this.state.loggedInUser.capacity
                  )}
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
                  {!this.state.loggedInUser ? (
                    <strong>Loading..</strong>
                  ) : (
                    this.state.loggedInUser.lookingfor
                  )}
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

export default Profile;
