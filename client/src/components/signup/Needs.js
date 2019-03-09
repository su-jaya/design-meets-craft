import React, { Component } from "react";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'


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
    tags: ["first", "second"]
  };


  handleChange(event, changed) {
    let copy = this.state.tags
    copy.splice(copy.indexOf(changed[0]),1 )



  }

  render() {

    return (
      <div>
        <h2>Specify your needs</h2>
        <form>
          <label htmlFor="category">What category are you working in?</label>
          <textarea id="category"></textarea>

          <label htmlFor="materials">The materials you like to work with?</label>
          <textarea id="materials"></textarea>

          <TagsInput value={this.state.tags} onChange={(event, changed) => this.handleChange(event, changed)}/>

          <label htmlFor="destination">Destination</label>
          <textarea id="destination"></textarea>

          <label htmlFor="capacity">Production capacity</label>
          <textarea id="capacity"></textarea>

          <label htmlFor="lookingfor">You are looking for</label>
          <textarea id="lookingfor"></textarea>

          <button type="button">Back</button>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }


}

export default Needs1

