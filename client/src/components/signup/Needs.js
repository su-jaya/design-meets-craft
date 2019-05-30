import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Header from "../Header";
import "./Registration.css";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./Note";
import axios from "axios";

class Needs extends Component {
  state = {
    // Tagging for Category
    tagsCategory: [],
    tagCategory: "",
    suggestedTagsCategory: [
      "men",
      "women",
      "accessories",
      "apparel",
      "shoes",
      "jewellery",
      "interior"
    ],
    // Tagging for Material
    tagsMaterial: [],
    tagMaterial: "",
    suggestedTagsMaterial: [
      "wool",
      "leather",
      "stone",
      "cotton",
      "denim",
      "satin",
      "wood"
    ],
    // Tagging for Destination
    tagsDestination: [],
    tagDestination: "",
    suggestedTagsDestination: [
      "Morocco",
      "Ecuador",
      "Chile",
      "Tanzania",
      "India",
      "Romania",
      "France"
    ],
    capacity: "",
    lookingfor: "",
    redirect: false
  };

  // Remove Tags
  handleChange(tags, changed, changedIdx, toChange) {
    let field = `tags${toChange}`;
    this.setState({
      [field]: tags
    });
  }

  // Add Own Tag
  onChangeInput(tag, toChange, tags) {
    let field = `tag${toChange}`;

    this.setState({
      [field]: tag
    });
  }

  // Add Suggested Tag
  addNewOne(event, change, toChange, field) {
    let copy = toChange;

    if (copy.includes(change[0]) === false) {
      copy.push(change[0]);
      this.setState({
        [field]: copy
      });
    }
  }

  // On Change remaining fields
  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    let object = {
      tagsCategory: [...new Set(this.state.tagsCategory)],
      tagsMaterial: [...new Set(this.state.tagsMaterial)],
      tagsDestination: [...new Set(this.state.tagsDestination)],
      capacity: this.state.capacity,
      lookingfor: this.state.lookingfor
    };

    axios
      .post(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          "/auth/signup/designer/needs",
        object,
        {
          withCredentials: true
        }
      )
      .then(user => {
        this.setState({ redirect: true });
        return this.props.setUser(user.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header button="none" />
        {/*Process Bar */}
        <div>
          <h1 className="registrationHeading">
            {this.props.userInSession &&
            this.props.userInSession.role === "designer"
              ? "3/4: Specify your Needs"
              : "3/4: Specify your Skills"}
          </h1>
          <div className="registrationBarContainer">
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarActive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive" />
          </div>
        </div>

        <Container className="registrationContainerAndNote">
          <Row>
            <Col xs lg="7" className="registrationContainer">
              <h2 className="registrationHeadline">
                {this.props.userInSession &&
                this.props.userInSession.role === "designer"
                  ? "Specify your needs"
                  : "Specify your skills"}
              </h2>
              <p className="registrationSubtitle">
                {this.props.userInSession &&
                this.props.userInSession.role === "designer"
                  ? "Tell us about your needs so we can match you with the right artisan communities. You can always change your information later in your profile."
                  : "Tell us about your skills so we can match you with the right designers. You can always change your information later in your profile."}
              </p>
              <form
                onSubmit={event => this.submitHandler(event)}
                className="registrationForm"
              >
                {/* CATEGORY */}
                <div className="parentTag">
                  <label htmlFor="category">
                    What product category are you working in?
                  </label>
                  <div className="inputField">
                    <TagsInput
                      id="category"
                      value={this.state.tagsCategory}
                      onChange={(tags, changed, changedIdx) =>
                        this.handleChange(tags, changed, changedIdx, "Category")
                      }
                      inputValue={this.state.tagCategory}
                      onChangeInput={(tag, toChange) =>
                        this.onChangeInput(
                          tag,
                          "Category",
                          this.state.tagsCategory
                        )
                      }
                    />
                  </div>
                  <TagsInput
                    className="suggestedTags"
                    value={this.state.suggestedTagsCategory}
                    onChange={(event, change, toChange) =>
                      this.addNewOne(
                        event,
                        change,
                        this.state.tagsCategory,
                        "tagsCategory"
                      )
                    }
                  />
                </div>

                {/* MATERIALS */}

                <div className="parentTag">
                  <label htmlFor="materials">
                    {this.props.userInSession &&
                    this.props.userInSession.role === "designer"
                      ? "What materials would you like to work with?"
                      : "What materials do you work with?"}
                  </label>
                  <div className="inputField">
                    <TagsInput
                      id="materials"
                      value={this.state.tagsMaterial}
                      onChange={(tags, changed, changedIdx) =>
                        this.handleChange(tags, changed, changedIdx, "Material")
                      }
                      inputValue={this.state.tagMaterial}
                      onChangeInput={(tag, toChange) =>
                        this.onChangeInput(tag, "Material")
                      }
                    />
                  </div>
                  <TagsInput
                    className="suggestedTags"
                    value={this.state.suggestedTagsMaterial}
                    onChange={(event, change, toChange) =>
                      this.addNewOne(
                        event,
                        change,
                        this.state.tagsMaterial,
                        "tagsMaterial"
                      )
                    }
                  />
                </div>

                {/* DESTINATION */}

                {this.props.userInSession &&
                this.props.userInSession.role === "designer" ? (
                  <div className="registrationForm">
                    <div className="parentTag">
                      <label htmlFor="destination">Destination</label>
                      <div className="inputField">
                        <TagsInput
                          id="destination"
                          value={this.state.tagsDestination}
                          onChange={(tags, changed, changedIdx) =>
                            this.handleChange(
                              tags,
                              changed,
                              changedIdx,
                              "Destination"
                            )
                          }
                          inputValue={this.state.tagDestination}
                          onChangeInput={(tag, toChange) =>
                            this.onChangeInput(tag, "Destination")
                          }
                        />
                      </div>
                      <TagsInput
                        className="suggestedTags"
                        value={this.state.suggestedTagsDestination}
                        onChange={(event, change, toChange) =>
                          this.addNewOne(
                            event,
                            change,
                            this.state.tagsDestination,
                            "tagsDestination"
                          )
                        }
                      />
                    </div>

                    <label htmlFor="capacity">Production need</label>
                    <textarea
                      id="capacity"
                      onChange={event => this.changeHandler(event)}
                    />

                    <label htmlFor="lookingfor">You are looking for</label>
                    <textarea
                      id="lookingfor"
                      onChange={event => this.changeHandler(event)}
                    />
                  </div>
                ) : (
                  <div className="registrationForm">
                    <label htmlFor="capacity">Production capacity</label>
                    <textarea
                      id="capacity"
                      onChange={event => this.changeHandler(event)}
                    />

                    <label htmlFor="lookingfor">You are looking for</label>
                    <textarea
                      id="lookingfor"
                      onChange={event => this.changeHandler(event)}
                    />
                  </div>
                )}

                {this.state.redirect ? <Redirect to="/upload" /> : ""}
                <div className="registrationNeedsButtons">
                  <Link to="/aboutyou">
                    <button className="registrationBackButton" type="button">
                      BACK
                    </button>
                  </Link>
                  <button className="registrationNextButton" type="submit">
                    NEXT
                  </button>
                </div>
              </form>
            </Col>
            <Col xs lg="3">
              <Note />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Needs;
