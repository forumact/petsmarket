import React, { Component } from "react";
import NewIcon from "../../../assets/news_icon.png";
import Newsletter from "../../Forms/NewsletterForm";

class SubscribeBanner extends Component {
  render() {
    return (
      <div id="subscribe-banner-wrap">
        <div id="subscribe-banner">
          <div className="subscribe-content">
            <div className="subscribe-header">
              <figure>
                <img src={NewIcon} alt="subscribe-icon" />
              </figure>
              <p className="subscribe-title">Subscribe to our Newsletter</p>
              <p>And receive the latest news and offers</p>
            </div>
            <Newsletter></Newsletter>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscribeBanner;
