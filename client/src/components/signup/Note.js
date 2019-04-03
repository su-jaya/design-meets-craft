import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  render() {
    return (
      <div className="note">
        <div className="noteHeadline">
          <img
            src="/images/DmC_noteicon.png"
            alt="note icon"
            width="20%"
            height="20%"
          />
          <h3>Note</h3>
        </div>
        <p>
          The more information you provide throughout the sign up process the
          higher the chances to find a community that matches your needs. You
          also have the option to edit your information later.
        </p>
      </div>
    );
  }
}

export default Note;
