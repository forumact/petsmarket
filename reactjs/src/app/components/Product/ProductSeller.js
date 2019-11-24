import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getSellerInfo } from "../../Networks";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

export default class ProductSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerInfo: {}
    };
  }

  render() {
    const { name, picture, uid, created, mobile } = this.state.sellerInfo;
    return (
      <div className="sidebar-item author-bio">
        <h4>Product Seller</h4>
        <hr className="line-separator" />
        <Link to={`/user/${uid}`} className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src={picture} alt="" />
          </figure>
        </Link>
        <p className="text-header strtocaptalize">{name}</p>
        <p className="text-oneline">Member Since: {created}</p>
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
        <span className="button mid dark spaced">
          <span className="icon-phone call-alignment"></span>
          {mobile}
        </span>
        <Link to={`/user/${uid}`} className="button mid dark spaced">
          Go to Profile Page
        </Link>
        {/* <Link to={`/user/${uid}`} className="button mid dark-light">
          Send a Private Message
        </Link> */}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.uid !== prevProps.uid) {
      const payload = {
        uid: this.props.uid
      };
      getSellerInfo(payload).then(response => {
        this.setState({
          sellerInfo: response.data
        });
      });
    }
  }
}
