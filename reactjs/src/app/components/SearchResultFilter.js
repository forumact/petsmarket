import React, { Component } from "react";
import { Arrow } from "../Icons";

export default class SearchResultFilter extends Component {
  render() {
    return (
      <form id="shop_filter_form" name="shop_filter_form">
        <label htmlFor="price_filter" className="select-block">
          <select name="price_filter" id="price_filter">
            <option value="0">Price (High to Low)</option>
            <option value="1">Price (Low to High)</option>
          </select>
          <Arrow />
        </label>
        {/* <label htmlFor="itemspp_filter" className="select-block">
          <select name="itemspp_filter" id="itemspp_filter">
            <option value="0">12 Items Per Page</option>
            <option value="1">6 Items Per Page</option>
          </select>
          <Arrow />
        </label> */}
      </form>
    );
  }
}
