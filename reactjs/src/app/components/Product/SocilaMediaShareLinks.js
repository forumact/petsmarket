import React, { Component } from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

export default class SocilaMediaShareLinks extends Component {
  render() {
    return (
      <div>
        <div className="share-links-wrap">
          <p className="text-header small">Share this:</p>

          <ul className="share-links hoverable">
            <li>
              <a href="/" className="fb">
                <FacebookShareButton
                  url={this.props.url}
                  quote={this.props.quote}
                  className="fb"
                >
                  &nbsp;
                </FacebookShareButton>
              </a>
            </li>
            <li>
              <a href="/" className="twt">
                <TwitterShareButton
                  url={this.props.url}
                  quote={this.props.quote}
                  className="twt"
                >
                  &nbsp;
                </TwitterShareButton>
              </a>
            </li>
            <li>
              <a href="/" className="gplus">
                <WhatsappShareButton
                  url={this.props.url}
                  quote={this.props.quote}
                  className="gplus"
                >
                  &nbsp;
                </WhatsappShareButton>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
