import React, { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./AboutUs.css";
import { Link } from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <NavBar />

        {/* BANNER */}

        <div className="aboutUsBanner">
          <h1>Our Purpose</h1>
          <h2>We believe that design has the power to change the world!</h2>
        </div>

        {/* OUR VISION */}

        <div className="aboutUsVision">
          <h2>Our vision</h2>

          <p>
            We believe that together we can shape the future positively with our
            hands!
          </p>
          <div className="aboutUsVisionText">
            <p>
              Our passion lies with creativity, designing and making – but at
              the same time the fashion/interior design industry is exploiting
              people and nature in ways that must be changed. We believe that
              together we can make the difference that is needed for such a
              change. And this is why we created this platform that connects the
              designers and the makers.
            </p>
            <p>
              We believe in openess and positive curiosity. We are losing so
              many precious skills, languages, rituals – every day. And with
              them values, cultural identity and orientation that often could
              give us some answers within our hectic daily life. At DmC we want
              to learn about cultures and skills, differences and similarities.
              The intercultural exchange creates a direct knowledge transfer
              between artisans and designers – both ways. It is about bringing
              the best of heritage knowledge and wisdom to high design and
              sustainable solutions and creating a better mutual understanding.
              And we will be able to create business opportunities and save some
              of the ancient skills at the same time.
            </p>
            <p>
              Design has the power to change the world - like music and sports -
              design has an emotional component that doesn’t need a language -
              it is a common, international language, it unites and creates
              bonds.   Our vision is to share this spirit all over the world and
              to cooperate with as many cultures and designers as possible over
              all continents in coming years. We believe that we together can
              shape the future positively with our hands!
            </p>
          </div>
        </div>

        <Image
          className="homezigzagDivider"
          src="/images/DmC_homezigzagBorder.png"
          alt="zig zag border"
          fluid
        />

        {/* BENEFITS */}
        <div className="aboutUsBenefits">
          <h2>Discover your Benefits</h2>
          <p>400 Designers & more than 550 Crafters in 90 countries</p>
          <div>
            <Container className="aboutUsContainer" fluid>
              <Image src="./images/DmC_Benefits.png" alt="image" fluid />

              <Row>
                <Col>
                  <h3>GLOBAL NETWORK</h3>
                  <p>
                    Our simple and unique matching mechanism makes it easy for
                    you to find your perfect match fast. We connect you directly
                    with your match.
                  </p>
                </Col>
                <Col>
                  <h3>NEW EXPERIENCE</h3>
                  <p>
                    Everyone joining DmC sings the „Code of Conduct“ and can be
                    expelled if not followed. Save communication in a secured
                    online environment.
                  </p>
                </Col>
                <Col>
                  <h3>ADDED VALUE</h3>
                  <p>
                    Through the DmC knowledge center you have access to amazing
                    learning material from experts from all over the world.
                  </p>
                </Col>
                <Col>
                  <h3>SUPPORT</h3>
                  <p>
                    DmC is about personal encounters and emotional benefits. In
                    our system you can directly contact your match and exchange,
                    you create your story together.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* ARTISANS */}

        <div className="aboutUsArtisans">
          <Container>
            <Row>
              <Col />
              <Col className="aboutUsArtisansText">
                <h2>Artisans</h2>
                <p>
                  Our passion lies with creativity, designing and making – but
                  at the same time the fashion/interior design industry is
                  exploiting people and nature in ways that must be changed. We
                  believe that together we can make the difference that is
                  needed for such a change. And this is why we created this
                  platform that connects the designers and the makers.
                </p>
                <Link to="/artisans">
                  <button className="aboutUsArtisansButton">
                    FOR ARTISANS
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        {/* CHALLENGES */}
        <div className="aboutUsChallenges">
          <h2>Challenges we want to tackle</h2>
          <p>We want to preserve craft techniques</p>
          <div>
            <Container className="aboutUsContainer" fluid>
              <Image src="./images/DmC_Challenges.png" alt="image" fluid />
              <Row>
                <Col>
                  <h3>LOSS OF CULTURAL HERITAGE & CRAFT SKILLS</h3>
                  <p>
                    Our simple and unique matching mechanism makes it easy for
                    you to find your perfect match fast. We connect you directly
                    with your match.
                  </p>
                </Col>
                <Col>
                  <h3>
                    UNEMPLOYED / <br />
                    POVERTY
                  </h3>
                  <p>
                    Everyone joining DmC sings the „Code of Conduct“ and can be
                    expelled if not followed. Save communication in a secured
                    online environment.
                  </p>
                </Col>
                <Col>
                  <h3>POOR EDUCATION / ILLITERACY</h3>
                  <p>
                    Through the DmC knowledge center you have access to amazing
                    learning material from experts from all over the world.
                  </p>
                </Col>
                <Col>
                  <h3>
                    FEAR
                    <br />
                    OF FOREIGN CULTURES
                  </h3>
                  <p>
                    DmC is about personal encounters and emotional benefits. In
                    our system you can directly contact your match and exchange,
                    you create your story together.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AboutUs;
