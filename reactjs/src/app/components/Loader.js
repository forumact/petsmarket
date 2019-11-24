import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="section-wrap align-center">
        <div className="section">
          {/* <span className={"icon-reload"}>Loading...</span> */}
          <div className="lds-hourglass align-center"></div>
        </div>
      </div>
    );
  }
}

export default Loader;
