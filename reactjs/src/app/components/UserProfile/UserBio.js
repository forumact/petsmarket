import React, { Component } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

export default class AuthorBio extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userBio: {}
  //   };
  // }

  render() {
    return (
      <div className="sidebar-item author-bio">
        <a href="user-profile.html" className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src={this.props.userbasic.picture} alt="" />
          </figure>
        </a>
        <p className="text-header strtocaptalize">
          {this.props.userbasic.username}
        </p>
        <p className="text-oneline">
          {this.props.userbasic.about}
          <br />
          <span className="icon-location-pin"> </span>
          {this.props.userbasic.city}
        </p>
        <ul className="share-links">
          <li>
            <a href="/" className="fb">
              <FacebookShareButton
                url={"http://google.com"}
                quote={"arulraj"}
                className="fb"
              >
                &nbsp;
              </FacebookShareButton>
            </a>
          </li>
          <li>
            <a href="/" className="twt">
              <TwitterShareButton
                url={"http://google.com"}
                quote={"arulraj"}
                className="twt"
              >
                &nbsp;
              </TwitterShareButton>
            </a>
          </li>
          <li>
            <a href="/" className="gplus">
              <WhatsappShareButton
                url={"http://google.com"}
                quote={"arulraj"}
                className="gplus"
              >
                &nbsp;
              </WhatsappShareButton>
            </a>
          </li>
        </ul>
        {/* <a href="/" className="button mid dark spaced">
          Add to <span className="primary">Followers</span>
        </a>
        <a href="/" className="button mid dark-light">
          Send a Private Message
        </a> */}
      </div>
    );
  }

  // componentDidMount() {
  //   getSellerInfo(this.props).then(response => {
  //     this.setState({
  //       userBio: response.data
  //     });
  //   });
  // }
}
