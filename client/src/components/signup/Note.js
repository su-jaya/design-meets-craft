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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
    );
  }
}

export default Note;
