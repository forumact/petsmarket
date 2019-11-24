import React, { Component } from "react";

export default class ProductSideBar extends Component {
  render() {
    return (
      <div>
        <ul className="dropdown hover-effect tertiary">
          <li className="dropdown-item">
            <a href="/">Digital Graphics</a>
          </li>
          <li className="dropdown-item active">
            <a href="/">Illustration</a>
          </li>
          <li className="dropdown-item">
            <a href="/">Web Design</a>
          </li>
          <li className="dropdown-item">
            <a href="/">Stock Photography</a>
          </li>
          <li className="dropdown-item">
            <a href="/">Code and Plugins</a>
          </li>
        </ul>
      </div>
    );
  }
}
