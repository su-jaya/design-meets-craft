import React, { Component } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

class Needs1 extends Component {
  state = {
    youinasentence: "",
    position: "",
    brand: "",
    website: "",
    adress: "",
    city: "",
    zip: "",
    country: "",
    telephone: "",
    language: "",
    // Tagging for Category
    tagsCategory: [],
    tagCategory: "",
    suggestedTagsCategory: [
      "men",
      "women",
      "stone",
      "lether",
      "denim",
      "plastic",
      "coffee"
    ],
    // Tagging for Material
    tagsMaterials: [],
    tagMaterial: "",
    suggestedTagsMaterial: [
      "men",
      "women",
      "stone",
      "lether",
      "denim",
      "plastic",
      "coffee"
    ],
    // Tagging for Destination
    tagsDestination: [],
    tagDestination: "",
    suggestedTagsDestination: [
      "men",
      "women",
      "stone",
      "lether",
      "denim",
      "plastic",
      "coffee"
    ]
  };

  // Remove Tags
  handleChange(tags) {
    this.setState({
      tagsCategory: tags
    });
  }

  // Add Own Tag
  onChangeInput(tag) {
    this.setState({
      tagCategory: tag
    });
  }

  // Add Suggested Tag
  addNewOne(event, change) {
    let tagsCategory = this.state.tagsCategory;

    if (tagsCategory.includes(change[0]) === false) {
      tagsCategory.push(change[0]);
      this.setState({
        tagsCategory: tagsCategory
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Specify your needs</h2>
        <form>
          <label htmlFor="category">What category are you working in?</label>
          <br />
          <textarea id="category" />
          <br />

          <label htmlFor="materials">
            The materials you like to work with?
          </label>
          <br />
          <TagsInput
            id="materials"
            value={this.state.tagsCategory}
            onChange={tags => this.handleChange(tags)}
            inputValue={this.state.tagCategory}
            onChangeInput={tag => this.onChangeInput(tag)}
          />
          <br />
          <TagsInput
            className="suggestedTags"
            value={this.state.suggestedTagsCategory}
            onChange={(event, change) => this.addNewOne(event, change)}
          />

          <label htmlFor="destination">Destination</label>
          <br />
          <textarea id="destination" />
          <br />

          <label htmlFor="capacity">Production capacity</label>
          <br />
          <textarea id="capacity" />
          <br />

          <label htmlFor="lookingfor">You are looking for</label>
          <br />
          <textarea id="lookingfor" />
          <br />

          <button type="button">Back</button>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default Needs1;
