import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/Style.css";
import "./css/Banner.css";
import Header from "./app/components/Navigation/Header";
import Footer from "./app/components/Navigation/Footer";
import MainMenu from "./app/components/Navigation/MainMenu";
import Routes from "./app/Routes";
import { withRouter } from "react-router-dom";
import SimpleLineIcon from "react-simple-line-icons";
import { HideHeaderRegion } from "./app/helper";
import { Provider } from "react-redux";
import { getStore } from "./app/Redux/store";
import { userloginCheck } from "../src/app/Networks";
import Cookies from "universal-cookie";

const store = getStore();

class App extends Component {
  checkLoginStatus() {
    userloginCheck()
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  render() {
    const current_path = this.props.location.pathname;
    return (
      <Provider store={store}>
        <div className="App">
          {!(HideHeaderRegion.indexOf(current_path) > -1) ? (
            <Fragment>
              <Header />
              <MainMenu />
              <Routes />
              <Footer />
            </Fragment>
          ) : (
            <Routes />
          )}
          <SimpleLineIcon name={"bulb"} className={"hide"} />
        </div>
      </Provider>
    );
  }

  componentDidMount() {
    //console.log('From App');
    // userloginCheck().then((response) => {
    //   console.log(response);
    // });
    //this.checkLoginStatus();

    const cookies = new Cookies();
    cookies.addChangeListener(this._onChange);
  }

  _onChange = () => {
    console.log("cookies updated");
  };
}

export default withRouter(App);
