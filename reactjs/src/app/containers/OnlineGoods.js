import React, { Component } from "react";
import HeadLine from "../components/HeadLine";
import ProductCard from "../components/Product/ProductCard";
import { connect } from "react-redux";

class OnlineGoods extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: {}
  //   };
  // }

  render() {
    const title = "Online Goods";
    const { products, count } = this.props.products;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="content">
              <div className="headline tertiary">
                <h4>{count} Products Found</h4>
                <form id="shop_filter_form" name="shop_filter_form">
                  <label htmlFor="price_filter" className="select-block">
                    <select name="price_filter" id="price_filter">
                      <option value="0">Price (High to Low)</option>
                      <option value="1">Price (Low to High)</option>
                    </select>
                  </label>
                  <label htmlFor="itemspp_filter" className="select-block">
                    <select name="itemspp_filter" id="itemspp_filter">
                      <option value="0">12 Items Per Page</option>
                      <option value="1">6 Items Per Page</option>
                    </select>
                  </label>
                </form>
              </div>
              <div className="product-showcase">
                <div className="product-list grid column3-4-wrap">
                  {(products || []).map(product => {
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                      ></ProductCard>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default OnlineGoods;

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, null)(OnlineGoods);
