import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  LoginFormValidation,
  googleClientID,
  facebookClientID
} from "../const";
import { login, loginCheckandCreate } from "../../app/Networks";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

import FormValidator from "../FormValidator";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(LoginFormValidation);

    this.state = {
      username: "",
      password: "",
      validation: this.validator.valid()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);

    this.submitted = false;
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  }

  handleSubmit(event) {
    event.preventDefault();
    const cookies = new Cookies();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      try {
        const payload = {
          name: this.state.username,
          pass: this.state.password
        };
        login(payload).then(response => {
          if (response.data.invalid) {
            document.getElementById("error").innerHTML = response.data.invalid;
            return false;
          }
          const userdetails = {
            csrf: response.data.csrf_token,
            uid: response.data.uid,
            avatar: response.data.avatar
          };
          this.setState({ user: userdetails });
          //localStorage.setItem("userObject", JSON.stringify(response.data));

          cookies.set("userObject", JSON.stringify(response.data), {
            path: "/"
          });
          // console.log("iam here", cookies.get("userObject")); // Pacman

          this.props.history.push("/");
        });
      } catch (e) {
        console.log(`Axios request failed: ${e}`);
      }
    }
  }

  responseGoogle(response) {
    const cookies = new Cookies();
    let profileObj = {
      email: response.profileObj.email,
      givenName: response.profileObj.givenName,
      name: response.profileObj.name,
      familyName: response.profileObj.familyName,
      imageUrl: response.profileObj.imageUrl
    };
    loginCheckandCreate(profileObj).then(response => {
      console.log(response.data);
      if (response.data.status === 1) {
        console.log("user logged in");
        const userdetails = {
          csrf: response.data.csrf_token,
          uid: response.data.uid,
          avatar: response.data.avatar
        };
        this.setState({ user: userdetails });
        //localStorage.setItem("userObject", JSON.stringify(response.data));
        cookies.set("userObject", JSON.stringify(response.data), { path: "/" });
        this.props.history.push("/");
      }
    });
  }

  responseFacebook(response) {
    const cookies = new Cookies();
    let profileObj = {
      email: response.email,
      givenName: response.name,
      name: response.name,
      familyName: response.name,
      imageUrl: response.picture.data.url
    };
    loginCheckandCreate(profileObj).then(response => {
      console.log(response.data);
      if (response.data.status === 1) {
        console.log("user logged in");
        const userdetails = {
          csrf: response.data.csrf_token,
          uid: response.data.uid,
          avatar: response.data.avatar
        };
        this.setState({ user: userdetails });
        //localStorage.setItem("userObject", JSON.stringify(response.data));
        cookies.set("userObject", JSON.stringify(response.data), { path: "/" });
        this.props.history.push("/");
      }
    });
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div className="form-popup">
        <div className="form-popup-headline secondary">
          <h2>Login to your Account</h2>
          <p>Enter now to your account and start buying and selling!</p>
        </div>
        <div className="form-popup-content">
          <form onSubmit={this.handleSubmit} id="login-form" autoComplete="off">
            <div className="input-container">
              <label htmlFor="username" className="rl-label">
                Username
              </label>
              <input
                name="username"
                type="text"
                placeholder="Enter your username here..."
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <span className="form-error">{validation.username.message}</span>
            </div>
            <div className="input-container">
              <label htmlFor="password" className="rl-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password here..."
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <span className="form-error">{validation.password.message}</span>
            </div>
            <input name="remember" id="remember" type="checkbox" />
            <label htmlFor="remember" className="label-check">
              <span className="checkbox primary primary">
                <span></span>
              </span>
              Remember username and password
            </label>
            <p>
              {" "}
              Back to home?{" "}
              <Link to={`/`} className={"primary"}>
                Home
              </Link>
            </p>
            &nbsp;
            <p>
              {" "}
              New to Pigeons World?{" "}
              <Link to={`/user-register`} className={"primary"}>
                Sign up now
              </Link>
            </p>
            <button type="submit" className="button mid dark">
              Login <span className="primary">Now!</span>
            </button>
            <span id="error" className="form-error"></span>
          </form>
          <hr className="line-separator double" />

          <FacebookLogin
            appId={facebookClientID}
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            cssClass="button mid fb half mt-0"
          />

          <GoogleLogin
            clientId={googleClientID}
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="button mid tertiary half gchanges mt-0"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
