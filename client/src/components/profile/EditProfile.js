import React, { Component } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import "./EditProfile.css";
import TagsInput from "react-tagsinput";
import axios from "axios";
import { Redirect } from "react-router";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      redirect: false,
      error: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tagsCategory: nextProps.userInSession.tagsCategory,
      tagsDestination: nextProps.userInSession.tagsDestination,
      tagsMaterial: nextProps.userInSession.tagsMaterial,
      capacity: nextProps.userInSession.capacity,
      lookingfor: nextProps.userInSession.lookingfor
    });
  }

  componentDidMount() {
    if (this.props.userInSession != null) {
      this.setState({
        tagsCategory: this.props.userInSession.tagsCategory,
        tagsDestination: this.props.userInSession.tagsDestination,
        tagsMaterial: this.props.userInSession.tagsMaterial,
        capacity: this.props.userInSession.capacity,
        lookingfor: this.props.userInSession.lookingfor
      });
    }
  }

  // Add Own Tag
  onChangeInput(tag, toChange, tags) {
    let field = `tag${toChange}`;
    this.setState({
      [field]: tag
    });
  }

  // Remove Tags
  handleChange(tags, changed, changedIdx, toChange) {
    if (tags.length === 0) {
      this.setState({
        error: true
      });
      return;
    }

    let field = `tags${toChange}`;
    this.setState({
      [field]: tags,
      error: false
    });
  }

  // add new one
  addNewOne(event, change, toChange, field) {
    let copy;

    toChange.length === 0
      ? (copy = this.props.userInSession[field])
      : (copy = toChange);

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

  // SUBMIT
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
    if (!this.props.userInSession) {
      return "Loading...";
    }

    return (
      <div>
        {this.state.redirect ? <Redirect push to="/profile" /> : ""}

        <Header
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <NavBar />
        <h1>
          <strong>Edit your profile</strong>
        </h1>
        {this.state.error ? <p>at least one tag required</p> : ""}
        <form onSubmit={this.submitHandler}>
          {/* YOUR PROFESSION */}
          <div className="parentTag">
            <h2>Your Profession</h2>

            <div className="inputField">
              <TagsInput
                id="category"
                value={this.state.tagsCategory}
                onChange={(tags, changed, changedIdx) =>
                  this.handleChange(tags, changed, changedIdx, "Category")
                }
                inputValue={this.state.tagCategory}
                onChangeInput={(tag, toChange) =>
                  this.onChangeInput(tag, "Category", this.state.tagsCategory)
                }
              />
            </div>
            <div>
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
          </div>

          {/* YOUR NEEDS */}
          <div className="parentTag">
            <h2>Your Profession</h2>
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
            <div>
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
          </div>

          {/* DESTINATION */}
          <div className="parentTag">
            <h2>Your Destination</h2>

            <div className="inputField">
              <TagsInput
                id="destination"
                value={this.state.tagsDestination}
                onChange={(tags, changed, changedIdx) =>
                  this.handleChange(tags, changed, changedIdx, "Destination")
                }
                inputValue={this.state.tagDestination}
                onChangeInput={(tag, toChange) =>
                  this.onChangeInput(tag, "Destination")
                }
              />
            </div>
            <div>
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
          </div>

          <h2>Production capacity</h2>
          <textarea
            defaultValue={this.props.userInSession.capacity}
            id="capacity"
            onChange={event => this.changeHandler(event)}
          />
          <h2>Looking for</h2>
          <textarea
            defaultValue={this.props.userInSession.lookingfor}
            id="lookingfor"
            onChange={event => this.changeHandler(event)}
          />
          <br />
          <button type="submit">Save</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default EditProfile;
