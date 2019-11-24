import React, { Component } from "react";
import { MyRoutes } from "../../Routes/routes";
import { NavLink } from "react-router-dom";
import HeaderSearch from "../Home/HeaderSearch";

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu-wrap">
        <div className="menu-bar">
          <nav>
            <ul className="main-menu">
              {MyRoutes.map(route => {
                if (route.menu === "yes") {
                  return (
                    <li key={route.path} className="menu-item">
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
          </nav>
          <HeaderSearch />
        </div>
      </div>
    );
  }
}

export default MainMenu;
