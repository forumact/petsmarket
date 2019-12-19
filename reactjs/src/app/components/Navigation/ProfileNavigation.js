import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userLogout } from "../../Networks";
import { withRouter } from "react-router-dom";
import { MyRoutes } from "../../Routes/routes";
import { fetuesrobject } from "../../helper";
import Cookies from "universal-cookie";

class ProfileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      userObject: {}
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  componentDidMount() {
    const loggedin = fetuesrobject("csrf_token");
    const username = fetuesrobject("name");
    const userpic = fetuesrobject("user_pic");
    const uid = fetuesrobject("uid");

    let user = {
      username: username,
      loggedin: loggedin,
      userpic: userpic,
      uid: uid
    };
    this.setState({
      userObject: user
    });
  }

  hoverOn() {
    this.setState({
      hover: true
    });
  }

  hoverOff() {
    this.setState({
      hover: false
    });
  }

  onSubmit = props => {
    const cookies = new Cookies();
    userLogout().then(response => {
      //localStorage.removeItem("userObject");
      cookies.remove("userObject", { path: "/" });
      this.props.history.push("/");
      console.log("login session removed");
    });
    this.setState({
      userObject: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { loggedin, userpic, username, uid } = this.state.userObject;
    return (
      <div className="user-board">
        {loggedin ? (
          <>
            <div
              className="user-quickview"
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}
            >
              <div className="outer-ring">
                <div className="inner-ring"></div>
                <figure className="user-avatar">
                  <img src={userpic} alt="avatar" />
                </figure>
              </div>
              <p className="user-name strtocaptalize">{username}</p>
              {/* <p className="user-money">$745.00</p> */}
              <ul
                className={
                  this.state.hover
                    ? "dropdown small hover-effect open"
                    : "dropdown small hover-effect closed"
                }
              >
                {MyRoutes.map((route, i) => {
                  if (route.profilenav === "yes") {
                    return (
                      <li className="dropdown-item" key={i}>
                        <div
                          className={i === 0 ? "dropdown-triangle" : ""}
                        ></div>
                        <Link to={route.path}>{route.title}</Link>
                      </li>
                    );
                  } else {
                    return "";
                  }
                })}
                <li className="dropdown-item">
                  <div className=""></div>
                  <Link to={`/user/${uid}`}>Profile Page</Link>
                </li>
                {/*<li className="dropdown-item">
                  <Link to={`/user-edit`}>Account Settings</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/upload-items`}>Upload Item</Link>
                </li>
                <li className="dropdown-item">
                  <Link to={`/manage-items`}>Manage Item</Link>
                </li> */}
              </ul>
            </div>
            <div className="account-information">
              <Link to={`/favourites/${uid}`}>
                <div className="account-wishlist-quickview">
                  <span className="icon-heart"></span>
                </div>
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="account-actions">
          {!loggedin ? (
            <Link to={"/login"} className="button secondary">
              Login
            </Link>
          ) : (
            <>
              {/* <Link to={"/user-edit"} className="button primary">
                Become a Seller
              </Link> */}
              <button
                type="submit"
                className="button secondary"
                onClick={() => {
                  this.onSubmit(this.props);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(ProfileNavigation);
