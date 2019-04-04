import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../NavBar";
import Footer from "../Footer";
import "./Designers-Artisans.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardD from "../CardD";
import axios from "axios";
import Select from "react-select";

class Designers extends Component {
  state = {
    // all designer user objects
    alldesigner: [],
    displaydesigner: [],
    resortdesigner: [],
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
    axios({
      method: "GET",
      url:
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
        `/match/artisan/all`,
      withCredentials: true
    })
      .then(all =>
        this.setState({
          alldesigner: all.data,
          displaydesigner: all.data,
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
                  return e.tagsDestination;
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

    let filterDesigners = this.state.alldesigner;

    if (selectedTagsArr.length > 0) {
      filterDesigners = filterDesigners.filter(designer => {
        return selectedTagsArr.every(val =>
          designer[`tags${add}`].includes(val)
        );
      });
    }

    if (this.state[`selected${secondSearch}`].length > 0) {
      filterDesigners = filterDesigners.filter(designer => {
        return this.state[`selected${secondSearch}`].every(val =>
          designer[`tags${secondSearch}`].includes(val)
        );
      });
    }

    if (this.state[`selected${thirdSearch}`].length > 0) {
      filterDesigners = filterDesigners.filter(designer => {
        return this.state[`selected${thirdSearch}`].every(val =>
          designer[`tags${thirdSearch}`].includes(val)
        );
      });
    }

    this.setState({
      [fieldInState]: selectedTagsArr,
      displaydesigner: filterDesigners
    });
  };

  dropDownHandler = event => {
    let copy = this.state.displaydesigner;

    if (event.target.value === "firstName") {
      copy.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
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
      displaydesigner: copy
    });
  };

  render() {
    if (this.state.alldesigner.length === 0) {
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
              <Col>
                <label>Category</label>
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
              <Col>
                <label>Material</label>
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
              <Col>
                <label>Destination</label>
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
            <option value="best-matches">Best matches</option>
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
            {this.state.displaydesigner.map((e, idx) => {
              return (
                <Col
                  key={idx}
                  theUser={e}
                  className="homeDesignersColumn mx-auto"
                >
                  <CardD key={idx} theUser={e} class="cardHeadlineArtisan" />
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

export default Designers;
