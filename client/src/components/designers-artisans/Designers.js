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

    let filterDesigners = this.state.alldesigner.filter(designer => {
      let okay = 0;

      for (let i = 0; i < selectedTagsArr.length; i++) {
        if (designer.tagsCategory.includes(selectedTagsArr[i])) {
          okay += 1;
        }
      }
      return okay === selectedTagsArr.length;
    });

    this.setState({
      [fieldInState]: selectedTagsArr,
      displaydesigner: filterDesigners
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
                <Select
                  options={this.state.tagsCategory.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "Category")
                  }
                  isMulti
                />

                <button>
                  <img
                    src="/images/DmC_plusicon.png"
                    alt="plus icon"
                    width="20px"
                  />
                  Category
                </button>
              </Col>
              <Col>
                <Select
                  options={this.state.tagsMaterial.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "Material")
                  }
                  isMulti
                />

                <button>
                  <img
                    src="/images/DmC_plusicon.png"
                    alt="plus icon"
                    width="20px"
                  />
                  Material
                </button>
              </Col>
              <Col>
                <Select
                  options={this.state.tagsDestination.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "Destination")
                  }
                  isMulti
                />

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
        <button className="artisansMoreButton">LOAD MORE</button>

        <Footer />
      </div>
    );
  }
}

export default Designers;
