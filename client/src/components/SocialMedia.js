import React, { Component } from "react";
import "./Footer.css";

class SocialMedia extends Component {
  render() {
    return (
      <div>
        <a
          href="https://www.facebook.com/ABURY.NET/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footerSocialMedia"
            src="/images/DmC_facebookicon.png"
            alt="facebook icon"
            width="34em"
            height="34em"
          />
        </a>
        <a
          href="https://twitter.com/ABURYCollection"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footerSocialMedia"
            src="/images/DmC_twittericon.png"
            alt="facebook icon"
            width="34em"
            height="34em"
          />
        </a>
        <a
          href="https://www.instagram.com/aburycollection/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footerSocialMedia"
            src="/images/DmC_instaicon.png"
            alt="facebook icon"
            width="34em"
            height="34em"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCFjA6mfRhc0qIaTe7knkeGw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footerSocialMedia"
            src="/images/DmC_youtubeicon.png"
            alt="facebook icon"
            width="34em"
            height="34em"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/5387599/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footerSocialMedia"
            src="/images/DmC_linkedinicon.png"
            alt="facebook icon"
            width="34em"
            height="34em"
          />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
