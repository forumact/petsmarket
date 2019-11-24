import React, { Component } from "react";
import TopImage from "../../assets/top_items.png";
import { PigeonCategory } from "../helper/MainHelper";
import { documentTitle } from "../const";

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
            <form className="search-widget-form">
              <input
                type="text"
                name="category_name"
                placeholder="Looking for..."
              />
              <label htmlFor="categories" className="select-block">
                <select name="categories" id="categories">
                  {PigeonCategory.map(cat => {
                    return (
                      <option value={cat} key={cat}>
                        {cat}
                      </option>
                    );
                  })}
                </select>
              </label>
              <button className="button medium dark">Search Now!</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeBanner;
