import React, { Component } from "react";
import { flag } from "../../Networks";

export default class ProductMarketing extends Component {
  yourfavorites(e, nid) {
    e.preventDefault();
    flag(nid);
  }

  render() {
    return (
      <div className="sidebar-item void buttons">
        <a href="/" className="button big tertiary wcart">
          {/* <span className="icon-present"></span> */}
          <span>Ad Type: {this.props.product.advert_type}</span>
        </a>
        <a href="/" className="button big dark purchase">
          <span className="indian-currency">{this.props.product.price}</span>
          <span>Purchase Now!</span>
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
