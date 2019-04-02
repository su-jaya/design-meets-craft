import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../NavBar";
import Footer from "../Footer";
import "./Designers-Artisans.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "../CardD";
import axios from "axios";

class Designers extends Component {
  state = {
    cards: [],
    tagsCategory: "",
    tagsMaterial: "",
    tagsDestination: ""
  };

  componentDidMount() {
    axios({
      method: "GET",
      url:
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
        `/match/artisan/all`,
      withCredentials: true
    })
      .then(all =>
        this.setState({
          cards: all.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header loggedIn={this.props.userInSession} />
        <Navbar />

        {/* Search Container */}

        <div className="artisansSearchContainer">
          <Container fluid>
            <Row>
              <Col className="artisansSearchColumn">
                <div>
                  <select>
                    <option value="category-fashion-men">
                      Category: Fashion Men
                    </option>
                    <option value="bla">bla</option>
                  </select>
                </div>

                <button>
                  <img
                    src="/images/DmC_plusicon.png"
                    alt="plus icon"
                    width="20px"
                  />
                  Category
                </button>
              </Col>
              <Col className="artisansSearchColumn">
                <div>
                  <select>
                    <option value="material-all">Material: All</option>
                    <option value="bla">bla</option>
                  </select>
                </div>
                <button>
                  <img
                    src="/images/DmC_plusicon.png"
                    alt="plus icon"
                    width="20px"
                  />
                  Material
                </button>
              </Col>
              <Col className="artisansSearchColumn">
                <div>
                  <select>
                    <option value="destination-france">
                      Destination: France
                    </option>
                    <option value="bla">bla</option>
                  </select>
                </div>
                <button>
                  <img
                    src="/images/DmC_plusicon.png"
                    alt="plus icon"
                    width="20px"
                  />
                  Destination
                </button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Filter Dropdown */}
        <div className="artisansFilterDropdown">
          <select>
            <option value="best-matches">Best matches</option>
            <option value="newest">Newest first</option>
            <option value="by-name">Sort by name</option>
          </select>
          <button>
            <img
              src="/images/DmC_cancelicon.png"
              alt="cancel icon"
              width="20px"
            />
            Reset to default
          </button>
        </div>

        <Container className="homeDesignersContainer" fluid={true}>
          <Row className="homeDesignersRow">
            {/* {this.state.cards.map((e, idx) => {
              return (
                <Col
                  key={idx}
                  theUser={e}
                  className="homeDesignersColumn mx-auto"
                >
                  <Card key={idx} theUser={e} class="cardHeadlineArtisan" />
                </Col>
              );
            })} */}
          </Row>
        </Container>
        <button className="artisansMoreButton">LOAD MORE</button>

        <Footer />
      </div>
    );
  }
}

export default Designers;
