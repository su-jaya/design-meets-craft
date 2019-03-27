import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Navbar from "../NavBar";
import Footer from "../Footer";
import "./Designers-Artisans.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card";

class Artisans extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />

        {/* Search Container */}

        <div className="artisansSearchContainer">
          <Container fluid>
            <Row>
              <Col>
                <select>
                  <option value="category-fashion-men">
                    Category: Fashion Men
                  </option>
                  <option value="bla">bla</option>
                </select>
                <select>
                  <option value="category-fashion-men">
                    Category: Fashion Men
                  </option>
                  <option value="bla">bla</option>
                </select>
                <button>+ Category</button>
              </Col>
              <Col>
                <select>
                  <option value="material-all">Material: All</option>
                  <option value="bla">bla</option>
                </select>
                <button>+ Material</button>
              </Col>
              <Col>
                <select>
                  <option value="destination-france">
                    Destination: France
                  </option>
                  <option value="bla">bla</option>
                </select>
                <button>+ Destination</button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Filter Dropdown */}
        <div className="artisansFilterDropdown">
          <select>
            <option value="newest">Newest first</option>
            <option value="by-name">Sort by name</option>
            <option value="best-matches">Best matches</option>
          </select>
          <button>X Reset to default</button>
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
        <button>Load more</button>

        <Footer />
      </div>
    );
  }
}

export default Artisans;
