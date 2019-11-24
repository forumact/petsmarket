import React, { Component } from "react";
import ProductCard from "../Product/ProductCard";
import { connect } from "react-redux";
import { GET_PRODUCTS } from "../../Redux/actions";

class ProductShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }

  componentDidMount() {
    const payload = {
      numberofitem: 12,
      pagenumber: 0
    };
    this.props.getProducts(payload);    
  }

  render() {
    const { products, count } = this.props.products;

    if (!count) {
      return null;
    }
    return (
      <div id="product-sideshow-wrap">
        <div id="product-sideshow">
          <div className="product-showcase">
            <div className="headline primary">
              <h4>Latest Online Products</h4>
            </div>
            <div id="pl-1" className="product-list grid column4-wrap">
              {(products || []).map(product => {
                return (
                  <ProductCard
                    key={product.nid}
                    product={product}
                  ></ProductCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default ProductShowcase;

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: payload => {
      dispatch({ type: GET_PRODUCTS, payload: payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShowcase);
