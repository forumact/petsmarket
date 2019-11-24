import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import notifycloseicon from "../../assets/notif-close-icon.png";
import alertlogo from "../../assets/alert-logo.png";

// These two containers are siblings in the DOM
const alertRoot = document.getElementById("alert-root");

// Let's create a Modal component that is an abstraction around
// the portal API.

class AlertPortal extends Component {
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
    alertRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    alertRoot.removeChild(this.el);
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
class Notify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: props.showhide,
      message: props.message
    };

    this.handleShow = this.handleShowHide.bind(this);
    //this.handleHide = this.handleHide.bind(this);
  }

  handleShowHide(flag) {
    this.setState({ showAlert: flag });
  }

  // handleHide(flag) {
  //   this.setState({ showAlert: flag });
  // }

  render() {
    const alerttext = this.state.showAlert ? (
      <AlertPortal>
        <div className="item xmalert alert-box alertstyle">
          <figure className="user-avatar">
            <img src={alertlogo} alt="" />
          </figure>
          <p className="info">Status</p>
          <p className="timestamp">{this.state.message}</p>
          <span className="sl-icon icon-heart"></span>
          <img
            className="close-btn"
            src={notifycloseicon}
            alt="close-icon"
            onClick={() => this.handleShowHide(false)}
          />
        </div>
      </AlertPortal>
    ) : null;

    return <Fragment>{alerttext}</Fragment>;
  }
}

export default Notify;
