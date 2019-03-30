import React, { Component } from "react";
import service from "./upload-service";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./Registration.css";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./Note";

class Uploads extends Component {
  state = {
    brandLogo: "",
    titleImage: "",
    gallery: "",
    errorMessage: "",
    spinner: false
  };

  handleFileUpload = (e, typeOfPicture) => {
    console.log("The file to be uploaded is: ", e.target.files);
    const uploadData = new FormData();

    for (var i = 0; i < e.target.files.length; i++) {
      uploadData.append(typeOfPicture, e.target.files[i]);
    }

    this.setState({
      spinner: typeOfPicture
    });

    service
      .handleUpload(uploadData, typeOfPicture)
      .then(response => {
        this.setState({ [typeOfPicture]: response.secure_url, spinner: false });
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
        <Header url={this.props.match.url} />

        {/*Process Bar */}
        <div>
          <h1 className="registrationHeading">4/4: Uploads</h1>
          <div className="registrationBarContainer">
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarActive" />
          </div>
        </div>

        <Container className="registrationContainerAndNote">
          <Row>
            <Col xs lg="7" className="registrationContainer">
              <h2 className="registrationHeadline">Let's get started!</h2>
              <p className="registrationSubtitle">
                You can create your personal showroom now. This will be your
                window and gallery towards the artisans and designers you might
                be working with in the future.
              </p>

              <form onSubmit={e => this.handleSubmit(e)}>
                {/* BRANDLOGO */}
                <div className="uploadContainer">
                  {this.state.spinner === "brandLogo" ? (
                    <img src="/images/spinner.gif" id="spinner" alt="spinner" />
                  ) : (
                    ""
                  )}
                  {this.state.brandLogo === "" ? (
                    <img src="/images/no_brand.png" alt="brandLogo" />
                  ) : (
                    <img src={this.state.brandLogo} alt="brandLogo" />
                  )}
                  <div className="uploadContainerText">
                    <label htmlFor="brandLogo">
                      <h3>Profil / Brand Logo</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </label>
                    <input
                      type="file"
                      id="brandLogo"
                      onChange={e => this.handleFileUpload(e, "brandLogo")}
                    />
                  </div>
                </div>

                {/* TITLE IMAGE */}

                <div className="uploadContainer">
                  {this.state.spinner === "titleImage" ? (
                    <img src="/images/spinner.gif" id="spinner" alt="spinner" />
                  ) : (
                    ""
                  )}
                  {this.state.titleImage === "" ? (
                    <img src="/images/no_brand.png" alt="titleImage" />
                  ) : (
                    <img src={this.state.titleImage} alt="titleImage" />
                  )}
                  <div className="uploadContainerText">
                    <label htmlFor="titleImage">
                      <h3>Title Image</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </label>
                    <input
                      type="file"
                      id="titleImage"
                      onChange={e => this.handleFileUpload(e, "titleImage")}
                    />
                  </div>
                </div>

                {/* GALLERY */}
                <div className="uploadContainer">
                  {this.state.spinner === "gallery" ? (
                    <img src="/images/spinner.gif" alt="spinner" id="spinner" />
                  ) : (
                    ""
                  )}
                  {this.state.gallery === "" ? (
                    <div>
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                      <img src="/images/no_brand.png" alt="gallery" />
                    </div>
                  ) : (
                    this.state.gallery.map((e, idx) => (
                      <img src={e} alt={`gallery${idx}`} />
                    ))
                  )}
                  <div className="uploadContainerText">
                    <label htmlFor="gallery">
                      <h3>Gallery</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </label>
                    <input
                      type="file"
                      multiple
                      id="gallery"
                      onChange={e => this.handleFileUpload(e, "gallery")}
                    />
                  </div>
                </div>
              </form>
              <div className="registrationNeedsButtons">
                <Link to="/needs">
                  <button className="registrationBackButton">BACK</button>
                </Link>
                <Link to="/profile">
                  <button className="registrationNextButton">FINISH</button>
                </Link>
              </div>
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

export default Uploads;
