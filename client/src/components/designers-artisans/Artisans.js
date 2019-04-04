import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../NavBar";
import Footer from "../Footer";
import "./Designers-Artisans.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardA from "../CardA";
import axios from "axios";
import Select from "react-select";

class Artisans extends Component {
  state = {
    // all artisan user objects
    allartisan: [],
    displayartisan: [],
    resortartisan: [],
    // all available tags for dropdown
    tagsCategory: [],
    tagsMaterial: [],
    tagsDestination: [],
    // selected tags to filter for
    selectedCategory: [],
    selectedMaterial: [],
    selectedDestination: []
  };

  componentDidMount() {
    let url;

    this.props.userInSession === null || this.props.userInSession === false
      ? (url = "/getNewest/designer")
      : (url = "/match/artisan/all");

    axios({
      method: "GET",
      url: (process.env.REACT_APP_API_URL || "http://localhost:5000") + url,
      withCredentials: true
    })
      .then(all =>
        this.setState({
          allartisan: all.data,
          displayartisan: all.data,
          tagsCategory: [
            ...new Set(
              all.data
                .map(e => {
                  return e.tagsCategory;
                })
                .flat(2)
            )
          ],
          tagsMaterial: [
            ...new Set(
              all.data
                .map(e => {
                  return e.tagsMaterial;
                })
                .flat(2)
            )
          ],
          tagsDestination: [
            ...new Set(
              all.data
                .map(e => {
                  return e.country;
                })
                .flat(2)
            )
          ]
        })
      )
      .catch(err => console.log(err));
  }

  handleChange = (event, add) => {
    let selectedTagsArr = event.map(e => e.label);
    let fieldInState = `selected${add}`;
    let secondSearch, thirdSearch;

    if (fieldInState === "selectedCategory") {
      secondSearch = "Material";
      thirdSearch = "Destination";
    } else if (fieldInState === "selectedMaterial") {
      secondSearch = "Category";
      thirdSearch = "Destination";
    } else if (fieldInState === "selectedDestination") {
      secondSearch = "Category";
      thirdSearch = "Material";
    }

    let filterArtisan = this.state.allartisan;

    if (selectedTagsArr.length > 0) {
      filterArtisan = filterArtisan.filter(artisan => {
        return selectedTagsArr.every(val =>
          artisan[`tags${add}`].includes(val)
        );
      });
    }

    if (this.state[`selected${secondSearch}`].length > 0) {
      filterArtisan = filterArtisan.filter(artisan => {
        return this.state[`selected${secondSearch}`].every(val =>
          artisan[`tags${secondSearch}`].includes(val)
        );
      });
    }

    if (this.state[`selected${thirdSearch}`].length > 0) {
      filterArtisan = filterArtisan.filter(artisan => {
        return this.state[`selected${thirdSearch}`].every(val =>
          artisan[`tags${thirdSearch}`].includes(val)
        );
      });
    }

    this.setState({
      [fieldInState]: selectedTagsArr,
      displayartisan: filterArtisan
    });
  };

  dropDownHandler = event => {
    let copy = this.state.displayartisan;

    if (event.target.value === "brand") {
      copy.sort((a, b) => {
        if (a.brand < b.brand) {
          return -1;
        }
        if (a.brand > b.brand) {
          return 1;
        }
        return 0;
      });
    } else if (event.target.value === "best-matches") {
      copy.sort((a, b) => {
        return b.matches - a.matches;
      });
    }

    this.setState({
      displayartisan: copy
    });
  };

  render() {
    if (this.state.allartisan.length === 0) {
      return "Loading...";
    }

    return (
      <div>
        <Header
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <Navbar />

        {/* Search Container */}

        <div className="artisansSearchContainer">
          <Container fluid>
            <Row>
              <Col className="artisansSearchColumn">
                <label>Category:</label>
                <Select
                  options={this.state.tagsCategory.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "Category")
                  }
                  isMulti
                />
              </Col>
              <Col className="artisansSearchColumn">
                <label>Material:</label>
                <Select
                  options={this.state.tagsMaterial.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "Material")
                  }
                  isMulti
                />
              </Col>
              <Col className="artisansSearchColumn">
                <label>Destination:</label>
                <Select
                  options={this.state.tagsDestination.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "Destination")
                  }
                  isMulti
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Filter Dropdown */}
        <div className="artisansFilterDropdown">
          <select onChange={event => this.dropDownHandler(event)}>
            {this.props.userInSession ? (
              <option value="best-matches">Best matches</option>
            ) : (
              ""
            )}

            {/* <option value="newest">Newest first</option> */}
            <option value="firstName">Sort by name</option>
          </select>
          {/* <button>
            <img
              src="/images/DmC_cancelicon.png"
              alt="cancel icon"
              width="20px"
            />
            Reset to default
          </button> */}
        </div>

        <Container className="homeDesignersContainer" fluid={true}>
          <Row className="homeDesignersRow">
            {this.state.displayartisan.map((e, idx) => {
              return (
                <Col key={idx} className="homeDesignersColumn mx-auto">
                  <CardA key={idx} theUser={e} class="cardHeadlineArtisan" />
                </Col>
              );
            })}
          </Row>
        </Container>
        {/* <button className="artisansMoreButton">LOAD MORE</button> */}

        <Footer />
      </div>
    );
  }
}

export default Artisans;
