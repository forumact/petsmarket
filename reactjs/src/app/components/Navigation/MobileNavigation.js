import React, { Component } from "react";
import Logo from "../../../assets/logo.png";
import { MyRoutes } from "../../Routes/routes";
import { NavLink } from "react-router-dom";
import { Plus } from "../../Icons";
import { toggleMenu } from "../../helper";

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: ""
    };
  }

  render() {
    return (
      // <div id="mobile-menu" className={`side-menu left ${this.props.showMenu}`}>
      <div id="mobile-menu" className="side-menu left closed">
        <div
          className="svg-plus1"
          onClick={() => toggleMenu("mobile-menu", "closed")}
        >
          <Plus />
        </div>
        <div className="side-menu-header">
          <figure className="logo small">
            <img src={Logo} alt="logo" />
          </figure>
        </div>
        <p className="side-menu-title">Main Links</p>
        <ul className="dropdown dark hover-effect interactive">
          {MyRoutes.map(route => {
            if (route.menu === "yes") {
              return (
                <li
                  key={route.path}
                  className="dropdown-item"
                  onClick={() => toggleMenu("mobile-menu", "closed")}
                >
                  <NavLink exact to={route.path}>
                    {route.title}
                  </NavLink>
                </li>
              );
            } else {
              return "";
            }
          })}
        </ul>
      </div>
    );
  }
}
