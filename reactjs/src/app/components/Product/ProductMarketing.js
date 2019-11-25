import React, { Component } from "react";
import { flag } from "../../Networks";
// import Sale from "../../../assets/sale.png";
// import PullIcon from "../../../assets/pull-icon.png";

export default class ProductMarketing extends Component {
  yourfavorites(e, nid) {
    e.preventDefault();
    flag(nid);
  }

  render() {
    return (
      <div className="sidebar-item void buttons">
        {/* <a href="/" className="button big tertiary wcart">          
          <span>{this.props.product.advert_type}</span>
        </a> */}
        <a href="/" className="button big dark purchase wcart">
          <span className="icon-credit-card"></span>
          <span>{this.props.product.advert_type}</span>
        </a>
        <a href="/" className="button big tertiary wcart">
          <span className="icon-present"></span>
          {this.props.product.status}
        </a>
        <a
          href="/"
          className="button big secondary wfav"
          onClick={e => this.yourfavorites(e, this.props.nid)}
        >
          <span className="icon-heart"></span>
          <span className="fav-count">{this.props.product.flag_count}</span>
          Add to Favourites
        </a>
      </div>
    );
  }
}
