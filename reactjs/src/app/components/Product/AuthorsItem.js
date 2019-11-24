import React, { Component } from "react";
import { IndianRupee, substring } from "../../helper";
import { fetchUserItems } from "../../Networks";
import { NavLink } from "react-router-dom";

export default class AuthorsItem extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div className="sidebar-item author-items">
        <h4>More Author's Items</h4>
        <div className="product-list grid column4-wrap">
          {(this.state.products || []).map(product => {
            return (
              <div className="product-item column" key={product.nid}>
                <span className="pin featured">Featured</span>
                <div className="product-preview-actions">
                  <figure className="product-preview-image">
                    <img id="product-src" src={product.img} alt="product" />
                  </figure>
                  <div className="preview-actions">
                    <div className="preview-action">
                      <NavLink to={`/products/${product.nid}`}>
                        <div className="circle tiny primary">
                          <span className="icon-tag"></span>
                        </div>
                      </NavLink>
                      <NavLink to={`/products/${product.nid}`}>
                        <p>Go to Ad</p>
                      </NavLink>
                    </div>
                    <div className="preview-action">
                      <a href="/">
                        <div className="circle tiny secondary">
                          <span className="icon-heart"></span>
                        </div>
                      </a>
                      <a href="/">
                        <p>Favourites +</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <NavLink to={`/products/${product.nid}`}>
                    <p className="text-header">{product.title}</p>
                  </NavLink>
                  <p className="product-description">
                    {substring(product.body, 35, ".....")}
                  </p>
                  <NavLink to={`/products/${product.nid}`}>
                    <p className="category primary">{product.category}</p>
                  </NavLink>
                  <p className="price">
                    <span>{IndianRupee}</span>
                    {product.price}
                  </p>
                </div>
                <hr className="line-separator" />
                <div className="user-rating">
                  <NavLink to={`/user/${product.uid}`}>
                    <figure className="user-avatar small">
                      <img src={product.avatar} alt="user-avatar" />
                    </figure>
                  </NavLink>
                  <NavLink to={`/user/${product.uid}`}>
                    <p className="text-header tiny strtocaptalize">
                      {product.username}
                    </p>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.uid !== prevProps.uid) {
      const data = {
        uid: this.props.uid
      };

      fetchUserItems(data).then(response => {
        this.setState({
          products: response.data.products
        });
      });
    }
  }
}
