import React, { Component } from "react";
import LogoSmall from "../../../assets/logo.png";
import { fetchFooterDetails } from "../../Networks";
import { Link } from "react-router-dom";

import { facebookLink, twitterLink } from "../../const";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products_count: "",
      members_count: "",
      sellers_count: ""
    };
  }

  getYear() {
    return new Date().getFullYear();
  }

  componentDidMount() {
    fetchFooterDetails().then(response => {
      this.setState({
        products_count: response.data.products_count,
        members_count: response.data.members_count,
        sellers_count: response.data.sellers_count
      });
    });
  }

  render() {
    return (
      <footer>
        <div id="footer-top-wrap">
          <div id="footer-top">
            <div className="company-info">
              <figure className="logo small">
                <img src={LogoSmall} alt="logo-small" />
              </figure>
              <p>
                Search thousands of birds ads on one of the TN's leading Pigeons
                classified sites.
              </p>
              <ul className="company-info-list">
                <li className="company-info-item">
                  <span className="icon-present"></span>
                  <p>
                    <span>{this.state.products_count}</span> Products
                  </p>
                </li>
                <li className="company-info-item">
                  <span className="icon-energy"></span>
                  <p>
                    <span>{this.state.members_count}</span> Members
                  </p>
                </li>
                <li className="company-info-item">
                  <span className="icon-user"></span>
                  <p>
                    <span>{this.state.sellers_count}</span> Sellers
                  </p>
                </li>
              </ul>
              <ul className="social-links">
                <li className="social-link fb">
                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;
                  </a>
                </li>
                <li className="social-link twt">
                  <a
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;
                  </a>
                </li>
                <li className="social-link db">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    &nbsp;
                  </a>
                </li>
                <li className="social-link rss">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    &nbsp;
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-info">
              <p className="footer-title">Our Community</p>
              <ul className="link-list">
                {/* <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    How to Join us
                  </a>
                </li> */}
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Buying and Selling
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Emerald Forum
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Emerald Blog
                  </a>
                </li>
                {/* <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Free Goods
                  </a>
                </li> */}
                {/* <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Job Oportunities
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <div className="link-info">
              <p className="footer-title">Member Links</p>
              <ul className="link-list">
                 <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Partner Program
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Starting a Shop
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Purchase Credits
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Withdrawals
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    World Meetings
                  </a>
                </li> 
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    How to Auction
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="link-info">
              <p className="footer-title">Help and FAQs</p>
              <ul className="link-list">
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    Help Center
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <a href="#">
                    FAQs
                  </a>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footer-bottom-wrap">
          <div id="footer-bottom">
            <p>
              <span>©</span>
              <a href="/">petsmarket.co.in</a> {this.getYear()}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
