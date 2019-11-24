import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserActivity extends Component {
  render() {
    return (
      <ul className="dropdown hover-effect">
        <li className="dropdown-item">
          <NavLink to={`/user/${this.props.uid}`}>Profile Page</NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink to={`/user/${this.props.uid}/ads`}>Author's Ads</NavLink>
        </li>
      </ul>
    );
  }
}

export default UserActivity;
