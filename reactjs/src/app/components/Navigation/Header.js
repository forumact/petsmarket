import React, { Component, Fragment } from "react";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation";
import PullIcon from "../../../assets/pull-icon.png";
import mobileLogo from "../../../assets/logo_mobile.png";
import MobileNavigation from "./MobileNavigation";
import MobileProfileNavigation from "./MobileProfileNavigation";
import { toggleMenu } from "../../helper";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: "closed",
      showProfile: "closed"
    };
  }

  render() {
    return (
      <Fragment>
        <div className="header-wrap">
          <header>
            <NavLink exact to="/">
              <figure className="logo">
                <img src={Logo} alt="logo" />
              </figure>
            </NavLink>
            <div
              className="mobile-menu-handler left primary"
              onClick={() => toggleMenu("mobile-menu", "open")}
            >
              <img src={PullIcon} alt="pull-icon" />
            </div>
            <NavLink exact to="/">
              <figure className="logo-mobile">
                <img src={mobileLogo} alt="logo-mobile" />
              </figure>
            </NavLink>
            <div
              className="mobile-account-options-handler right secondary"
              onClick={() => toggleMenu("account-options-men", "open")}
            >
              <span className="icon-user"></span>
            </div>
            <ProfileNavigation></ProfileNavigation>
          </header>
        </div>
        <MobileNavigation></MobileNavigation>
        <MobileProfileNavigation></MobileProfileNavigation>
      </Fragment>
    );
  }
}

export default Header;
