import React, { Component } from "react";
import service from "./upload-service";
import { Link } from "react-router-dom";

class Uploads extends Component {
  state = {
    brandLogo: "",
    titleImage: "",
    gallery: "",
    errorMessage: ""
  };

  handleFileUpload = (e, typeOfPicture) => {
    console.log("The file to be uploaded is: ", e.target.files);
    const uploadData = new FormData();

    for (var i = 0; i < e.target.files.length; i++) {
      uploadData.append(typeOfPicture, e.target.files[i]);
    }
    service
      .handleUpload(uploadData, typeOfPicture)
      .then(response => {
        this.setState({ [typeOfPicture]: response.secure_url });
      })
      .catch(err => {
        this.setState({
          errorMessage: "Error while uploading the file. Please try again"
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Let's get started!</h2>
        <p>
          You can create your personal showroom now. This will be your window
          and gallery towards the artisans and designers you might be working
          with in the future.
        </p>
        <br />
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* BRANDLOGO */}
          <label htmlFor="brandLogo">
            <h3>Profil / Brand Logo</h3>
          </label>
          <br />
          <input
            type="file"
            id="brandLogo"
            onChange={e => this.handleFileUpload(e, "brandLogo")}
          />
          {this.state.brandLogo === "" ? (
            <img src="/images/no_brand.png" alt="brandLogo" />
          ) : (
            <img src={this.state.brandLogo} alt="brandLogo" />
          )}
          <br />
          {/* TITLE IMAGE */}
          <label htmlFor="titleImage">
            <h3>Title Image</h3>
          </label>
          <br />
          <input
            type="file"
            id="titleImage"
            onChange={e => this.handleFileUpload(e, "titleImage")}
          />
          {this.state.titleImage === "" ? (
            <img src="/images/no_brand.png" alt="titleImage" />
          ) : (
            <img src={this.state.titleImage} alt="titleImage" />
          )}
          <br />
          <br />
          {/* GALLERY */}
          <label htmlFor="gallery">
            <h3>Gallery</h3>
          </label>
          <br />
          <input
            type="file"
            multiple
            id="gallery"
            onChange={e => this.handleFileUpload(e, "gallery")}
          />
          {this.state.gallery === "" ? (
            <img src="/images/no_brand.png" alt="gallery" />
          ) : (
            this.state.gallery.map((e, idx) => (
              <img src={e} alt={`gallery${idx}`} />
            ))
          )}
        </form>
        <Link to="/needs">
          {" "}
          <button>Back</button>
        </Link>
        <Link to="/profile">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default Uploads;
