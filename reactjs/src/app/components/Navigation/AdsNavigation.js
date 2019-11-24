import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
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

  render() {
    return (
      <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <div className="product-settings primary dropdown-handle">
          <span className="sl-icon icon-settings"></span>
        </div>
        <ul
          className={
            this.state.hover
              ? "dropdown small hover-effect open"
              : "dropdown small hover-effect closed"
          }
        >
          <li className="dropdown-item">
            <div className="dp-triangle"></div>
            <Link to={`update-ad/${this.props.nid}`}>Update Ad</Link>
          </li>
          <li className="dropdown-item">
            <Link to={`products/${this.props.nid}`}>View</Link>
          </li>
          {/* <li className="dropdown-item">
            <a href="/">Share</a>
          </li>
          <li className="dropdown-item">
            <a href="/">Delete</a>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default AddNavigation;
