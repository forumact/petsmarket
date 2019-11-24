import React, { Component } from "react";
import { colorclass } from "../helper";

class HeadLine extends Component {
  render() {
    return (
      <div className={`section-headline-wrap ${colorclass}`}>
        <div className="section-headline">
          <h2 className="strtocaptalize">{this.props.title}</h2>
          <p>
            Home<span className="separator">/</span>
            <span className="current-section">{this.props.title}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default HeadLine;
