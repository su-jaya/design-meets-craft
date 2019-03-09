import React, { Component } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import "../../Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />

        <div className="homeSliderBackground">
          <h1>Using design to inspire change.</h1>
          <h2>
            "Design Meets Craft" matches designers and brands with traditional
            craft businesses.
          </h2>
          <div>
            <Link to="/signup"><button>DESIGNER</button></Link>
            <span> or </span>
            <button>ARTISAN</button>
          </div>
        </div>

        <div className="homeAboutBackground">
          <Container>
            <Row>
              <Col />
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
                <button>LEARN MORE ABOUT US</button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="tbd">
          <h1>Designer Stories</h1>
          tbd
        </div>

        <div className="tbd">
          <h1>Designers</h1>
          tbd
        </div>

        <div className="tbd">
          <h1>Artisans</h1>
          tbd
        </div>

        <div className="homeAdexBackground">
          <Container>
            <Row>
              <Col />
              <Col>
                <h2>Vote for your favourite Designer</h2>
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
                <button>VOTE NOW</button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="tbd">
          <h1>Design for Good Destinations</h1>
          tbd
        </div>

        <div className="homeReferencesBackground">
          <Image
            src="/../../../public/images/temp_references.png"
            alt="image"
            fluid
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
