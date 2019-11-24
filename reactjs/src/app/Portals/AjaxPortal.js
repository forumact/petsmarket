import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import notifycloseicon from "../../assets/notif-close-icon.png";
import "./Modal/Modal.css";
import { getUserBasicInfo } from "../Networks";

// These two containers are siblings in the DOM
const ajaxRoot = document.getElementById("modal-root");

// Let's create a Modal component that is an abstraction around
// the portal API.

class AjaxPortal extends Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement("div");
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    ajaxRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    ajaxRoot.removeChild(this.el);
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el
    );
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class AjaxModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: props.showhide,
      userbasic: props.data
    };

    this.handleShow = this.handleShowHide.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShowHide(flag) {
    this.setState({ showAlert: flag });
  }

  handleHide(flag) {
    this.setState({ showAlert: flag });
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   const userpayload = {
  //     uid: this.props.data
  //   };
  //   getUserBasicInfo(userpayload).then(response => {
  //     this.setState({ userbasic: response.data });
  //   });
  // }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const alerttext = this.state.showAlert ? (
      <AjaxPortal>
        <div className="mfp-bg mfp-fade mfp-ready"></div>
        <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready">
          <div className="mfp-container mfp-s-ready mfp-inline-holder">
            <div className="mfp-content">
              <div id="promo-popup" className="form-popup promo">
                {/* <div className="close-btn">x</div> */}
                <div className="promo-bg"></div>
                <div className="form-popup-content">
                  <h4 className="popup-title">Ask Xxx a question..</h4>
                  <p className="info">Mobile: {this.state.userbasic.contact}</p>
                  <p className="info">Email: {this.state.userbasic.email}</p>
                  <div className="form-popup-content-links">
                    <a href="#" className="button mid dark">
                      Submit your <span className="primary">Entry!</span>
                    </a>
                    <div className="form-popup-content-links-social">
                      <a href="#" className="button mid wfb"></a>
                      <a href="#" className="button mid wtwt"></a>
                    </div>
                  </div>
                </div>
                <div
                  className="close-btn mfp-close"
                  onClick={() => this.handleShowHide(false)}
                >
                  x
                </div>
              </div>
            </div>
          </div>
        </div>
      </AjaxPortal>
    ) : null;

    return <Fragment>{alerttext}</Fragment>;
  }
}

export default AjaxModal;
