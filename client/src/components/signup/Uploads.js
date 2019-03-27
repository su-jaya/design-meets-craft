import React, { Component } from "react";
import service from "./upload-service";

class Uploads extends Component {
  state = {
    brandLogo: ""
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("brandLogo", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then(response => {
        this.setState({ brandLogo: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Let's get started!</h2>
        <br />
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="brandLogo">
            <h3>Profil / Brand Logo</h3>
          </label>
          <br />
          <input
            type="file"
            id="brandLogo"
            onChange={e => this.handleFileUpload(e)}
          />
          <br />
          <br />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default Uploads;
