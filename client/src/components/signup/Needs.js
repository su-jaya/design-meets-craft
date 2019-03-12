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
    tagsMaterial: [],
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
  handleChange(tags, changed, changedIdx, toChange) {
    let field = `tags${toChange}`;
    this.setState({
      [field]: tags
    });
  }

  // Add Own Tag
  onChangeInput(tag, toChange) {
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

  render() {
    return (
      <div>
        <h2>Specify your needs</h2>
        <form>
          {/* CATEGORY */}
          <div className="parentTag">
            <label htmlFor="category">What category are you working in?</label>
            <div className="inputField">
              <TagsInput
                id="category"
                value={this.state.tagsCategory}
                onChange={(tags, changed, changedIdx) =>
                  this.handleChange(tags, changed, changedIdx, "Category")
                }
                inputValue={this.state.tagCategory}
                onChangeInput={(tag, toChange) =>
                  this.onChangeInput(tag, "Category")
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
              The materials you like to work with?
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

          <div className="parentTag">
            <label htmlFor="destination">Destination</label>
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
