import React, { Component } from "react";

export default class UserReputation extends Component {
  render() {
    return (
      <div className="sidebar-item author-reputation full">
        <h4>Author's Reputation</h4>
        <hr className="line-separator" />
        <div className="pie-chart pie-chart1 xmpiechart">
          <p className="text-header percent">
            86<span>%</span>
          </p>
          <p className="text-header percent-info">Recommended</p>
          <a href="/" className="button mid dark-light">
            Read all the Customer Reviews
          </a>
        </div>
      </div>
    );
  }
}
