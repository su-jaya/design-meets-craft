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

class Home extends Component {
  render() {
    return (
      <div>
        <Header url={this.props.match.url} />
        <NavBar />

        {/* Home Slider Section */}

        <div className="homeSliderBackground">
          <h1>Using design to inspire change.</h1>
          <h2>
            "Design Meets Craft" matches designers and brands with traditional
            craft businesses.
          </h2>
          <div>
            <Link to="/signup">
              <button className="homeSliderButton">DESIGNER</button>
            </Link>

            <span className="homeSliderOr"> or </span>
            <button className="homeSliderButton">ARTISAN</button>
          </div>
        </div>

        {/* Home About Section */}

        <div className="homeAboutBackground">
          <Container>
            <Row>
              <Col className="homeAboutImage">
                <Image
                  src="./images/temp_match.png"
                  height="400em"
                  alt=""
                  fluid
                />
              </Col>
              <Col>
                <h2>It's in your Hands</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <Link to="/aboutus">
                  <button className="homeAboutButton">
                    LEARN MORE ABOUT US
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Home Designer Stories Section */}

        <div className="tbd">
          <h1>Designer Stories</h1>
          tbd
        </div>

        {/* Home Designers Section */}

        <div className="tbd">
          <h1>Designers</h1>
          tbd
        </div>

        {/* Home Artisans Section */}

        <div className="tbd">
          <h1>Artisans</h1>
          tbd
        </div>

        {/* Home ADEx Section */}

        <div className="homeAdexBackground">
          <Container>
            <Row>
              <Col />
              <Col>
                <h2>Vote for your Favourite Designer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua.
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

        <div className="tbd">
          <h1>Design for Good Destinations</h1>
          tbd
        </div>

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
