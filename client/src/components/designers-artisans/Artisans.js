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
    // resortartisan: [],
    // all available tags for dropdown
    allTagsCategory: [],
    allTagsMaterial: [],
    allTagsDestination: [],
    // user list per filter
    tagsCategory: [],
    tagsMaterial: [],
    country: [],
    // artisans per category
    a_tagsCategory: [],
    a_tagsMaterial: [],
    a_country: []
  };

  componentDidMount() {
    let url;

    this.props.userInSession === null || this.props.userInSession === false
      ? (url = "/getNewest/artisan")
      : (url = "/match/designer/all");

    axios({
      method: "GET",
      url: (process.env.REACT_APP_API_URL || "http://localhost:5000") + url,
      withCredentials: true
    })
      .then(all =>
        this.setState({
          allartisan: all.data,
          displayartisan: all.data,
          a_tagsCategory: all.data,
          a_tagsMaterial: all.data,
          a_country: all.data,
          allTagsCategory: [
            ...new Set(
              all.data
                .map(e => {
                  return e.tagsCategory;
                })
                .flat(2)
            )
          ],
          allTagsMaterial: [
            ...new Set(
              all.data
                .map(e => {
                  return e.tagsMaterial;
                })
                .flat(2)
            )
          ],
          allTagsDestination: [
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

  handleChange = (event, fieldInState) => {
    // all artisans
    let filterArtisan = this.state.allartisan;

    // selected tags
    let selectedTagsArr = event.map(e => e.label);

    // filter artisans in target category
    if (selectedTagsArr.length > 0) {
      filterArtisan = filterArtisan.filter(artisan => {
        return selectedTagsArr.every(val =>
          artisan[fieldInState].includes(val)
        );
      });
    }

    // all user objects per category
    let array = [
      filterArtisan,
      this.state.a_country,
      this.state.a_tagsCategory,
      this.state.a_tagsMaterial
    ];

    // sort ascending & filter criteria
    let byEmail = array.sort((a, b) => a.length - b.length);

    //.map(e => e.map(e => e.email));

    // filter unique emails
    byEmail = byEmail[0].filter(e => {
      return (
        byEmail[1].includes(e) &&
        byEmail[2].includes(e) &&
        byEmail[3].includes(e)
      );
    });

    // filter array
    let display = [...filterArtisan];
    display.filter(e => byEmail.includes(e.email));

    this.setState({
      [`a_${fieldInState}`]: filterArtisan,
      displayartisan: display
    });

    // to be displayed Artisans
    // let secondSearch, thirdSearch;

    // if (fieldInState === "tagsCategory") {
    //   secondSearch = "tagsMaterial";
    //   thirdSearch = "country";
    // } else if (fieldInState === "tagsMaterial") {
    //   secondSearch = "tagsCategory";
    //   thirdSearch = "country";
    // } else if (fieldInState === "country") {
    //   secondSearch = "tagsCategory";
    //   thirdSearch = "tagsMaterial";
    // }
  };

  // dropDownHandler = event => {
  //   let copy = this.state.displayartisan;

  //   if (event.target.value === "brand") {
  //     copy.sort((a, b) => {
  //       if (a.brand < b.brand) {
  //         return -1;
  //       }
  //       if (a.brand > b.brand) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   } else if (event.target.value === "best-matches") {
  //     copy.sort((a, b) => {
  //       return b.matches - a.matches;
  //     });
  //   }

  //   this.setState({
  //     displayartisan: copy
  //   });
  // };

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
                  options={this.state.allTagsCategory.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "tagsCategory")
                  }
                  isMulti
                />
              </Col>
              <Col className="artisansSearchColumn">
                <label>Material:</label>
                <Select
                  options={this.state.allTagsMaterial.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) =>
                    this.handleChange(event, "tagsMaterial")
                  }
                  isMulti
                />
              </Col>
              <Col className="artisansSearchColumn">
                <label>Destination:</label>
                <Select
                  options={this.state.allTagsDestination.map(el => {
                    return { value: el, label: el };
                  })}
                  onChange={(event, cat) => this.handleChange(event, "country")}
                  isMulti
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Filter Dropdown */}
        <div className="artisansFilterDropdown">
          {this.props.userInSession &&
          this.props.userInSession.role === "designer" ? (
            <select onChange={event => this.dropDownHandler(event)}>
              <option value="best-matches">Best matches</option>

              {/* <option value="newest">Newest first</option> */}
              <option value="brand">Sort by brand name</option>
            </select>
          ) : (
            ""
          )}
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
