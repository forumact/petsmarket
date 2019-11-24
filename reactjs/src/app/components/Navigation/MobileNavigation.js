import React, { Component } from "react";
import Logo from "../../../assets/logo.png";
import { MyRoutes } from "../../Routes/routes";
import { NavLink } from "react-router-dom";

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: ""
    };

    this.handleShow = this.handleShowHide.bind(this);
  }
  handleShowHide(flag) {
    //this.setState({ showMenu: "closed" });
    this.props.handler('closed');
  }

  render() {
    return (
      // <div id="mobile-menu" className={`side-menu left ${this.props.showMenu}`}>
      <div
        id="mobile-menu"
        className={
          "side-menu left " +
          (this.state.showMenu ? `closed` : this.props.showMenu)
        }
      >
        <div className="svg-plus" onClick={() => this.handleShowHide("closed")}>
          x
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
                <li key={route.path} className="dropdown-item">
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
