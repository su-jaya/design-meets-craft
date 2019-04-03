import React, { Component } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import CardD from "../CardD";
import CardA from "../CardA";
import axios from "axios";
import HomeLoggedInContainer from "./HomeLoggedInContainer";

class Home extends Component {
  state = {
    designers: [],
    artisans: []
  };

  componentDidMount() {
    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          "/get/designer"
      )
      .then(designers => this.setState({ designers: designers.data }))
      .catch(err => console.log(err));

    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          "/get/artisan"
      )
      .then(artisan => {
        return this.setState({ artisans: artisan.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let homeslidersection;
    if (this.props.userInSession) {
      if (this.props.userInSession.role === "designer") {
        homeslidersection = (
          <div className="homeSliderBackgroundLoggedIn">
            <HomeLoggedInContainer designer />
          </div>
        );
      } else if (this.props.userInSession.role === "artisan") {
        homeslidersection = (
          <div className="homeSliderBackgroundLoggedIn">
            <HomeLoggedInContainer artisan />
          </div>
        );
      }
    } else {
      homeslidersection = (
        <div className="homeSliderBackground">
          <h1>Using design to inspire change.</h1>
          <h2>
            "Design Meets Craft" matches designers and brands with traditional
            craft businesses.
          </h2>
          <div>
            <Link to="/signup?role=designer">
              <button className="homeSliderButton">DESIGNER</button>
            </Link>

            <span className="homeSliderOr"> or </span>
            <Link to="/signup?role=artisan">
              <button className="homeSliderButton">ARTISAN</button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <NavBar />

        {/* Home Slider Section */}

        {homeslidersection}

        {/* Home About Section */}

        <Container className="homeAboutBackground" fluid>
          <Row>
            <Col sm={6}>
              <Image src="./images/temp_match.png" alt="" fluid />
            </Col>
            <Col sm={6} className="homeAboutText">
              <h2>It's in your Hands</h2>
              <p>
                No matter if you are a big brand, independent designer or just
                passionate about crafts - this platform makes it easy for you to
                find your perfeect match! #itsinyourhands
              </p>
              <p>
                Design meets Craft matches brands and designers with traditional
                craft businesses using modern design to inspire positive change
                and preserve traditional crafts. Design meets Crafts is a
                matchmaking platform creating unique, emotional, intercultural
                experiences between individuals.
              </p>
              <Link to="/aboutus">
                <button className="homeAboutButton">LEARN MORE ABOUT US</button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Image
          className="homezigzagDivider"
          src="/images/DmC_homezigzagBorder.png"
          alt="zig zag border"
          fluid
        />

        {/* Home Designer Stories Section */}

        {/* <div className="tbd">
          <h1>Designer Stories</h1>
          tbd
        </div> */}

        {/* Home Designers Section */}
        <div>
          <div className="homeDesignerHeadline">
            <h1>Designers</h1>
            <Link to="/designers">
              <button className="homeDesignerButton">SEE ALL</button>
            </Link>
          </div>
          <Container className="homeDesignersContainer" fluid={true}>
            <Row className="homeDesignersRow">
              {this.state.designers.map((e, idx) => {
                return (
                  <Col key={idx} className="homeDesignersColumn mx-auto">
                    <CardD key={idx} theUser={e} class="cardHeadlineDesigner" />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        {/* Home Artisans Section */}
        <div className="homeDivider" />
        <div>
          <div className="homeDesignerHeadline">
            <h1>Artisans</h1>
            <Link to="/artisans">
              <button className="homeDesignerButton">SEE ALL</button>
            </Link>
          </div>
          <Container className="homeDesignersContainer" fluid={true}>
            <Row className="homeDesignersRow">
              {this.state.artisans.map((e, idx) => {
                return (
                  <Col key={idx} className="homeDesignersColumn mx-auto">
                    <CardA key={idx} theUser={e} class="cardHeadlineArtisan" />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        {/* Home ADEx Section */}

        <div className="homeAdexBackground">
          <Container>
            <Row>
              <Col />
              <Col>
                <h2>Vote for your Favourite Designer</h2>
                <p>
                  The ABURY Design Experience (ADEx) is the first international
                  contest in search of emerging designers to create an accessory
                  capsule collection using traditional crafts knowledge from
                  different cultures. The winner will be receiving a travel,
                  stay and production budget and will spend up to six weeks in
                  Chile working with the artisans from Fundación de Artesanías
                  de Chile.
                </p>

                <a
                  href="http://adex.abury.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="homeAdexButton">VOTE NOW</button>
                </a>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Home Destinations Section */}

        {/* <div className="tbd">
          <h1>Design for Good Destinations</h1>
          tbd
        </div> */}

        {/* Home Partners Section */}

        <div className="homeReferencesBackground">
          <Image src="./images/temp_references.png" alt="image" fluid />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
