import React, { Component } from "react";
import TopImage from "../../../assets/top_items.png";
import {documentTitle} from '../../const';

import Search from "./Search";

class HomeBanner extends Component {
  render() {
    return (
      <div className="banner-wrap">
        <section className="banner">
          <h5>Welcome to</h5>
          <h1>
            The Biggest <span>Marketplace</span>
          </h1>
          <p>
            Advertise your birds for sale on the {documentTitle} website to THOUSANDS
            of daily visitors. What's more, you can place a basic ad online for
            FREE!
          </p>
          <img src={TopImage} alt="banner-img" />
          <div className="search-widget">
            <Search></Search>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeBanner;
