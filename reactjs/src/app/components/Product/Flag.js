import React, { Component } from "react";
import { flag } from "../../Networks";

class Flag extends Component {
  yourfavorites(e, nid, flagstatus) {
    e.preventDefault();
    if (flagstatus === "Flagged") {
      console.log(nid, "item already flagged");
      return false;
    }
    flag(nid);
  }

  render() {
    const { nid, flag } = this.props;
    if (flag === "stop") {
      return null;
    }
    return (
      <div className="preview-action">
        <a href="/">
          <div className="circle tiny secondary">
            <span
              onClick={e => this.yourfavorites(e, nid, flag)}
              className="icon-heart"
            ></span>
          </div>
        </a>
        <a href="/">
          <p>Favourites1 +</p>
        </a>
      </div>
    );
  }
}

export default Flag;
