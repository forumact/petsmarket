import React, { Component, Fragment } from "react";
import { getProductFilter } from "../../Networks";
import { arrayRemove } from "../../helper";

let filter = [];
class ProductsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productFilter: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (filter.indexOf(e.target.value) !== -1) {
      filter = arrayRemove(filter, e.target.value);
    } else {
      filter.push(e.target.value);
    }
    console.log("final", filter);
    this.props.filterChange(filter);
  }

  render() {
    return (
      <div className="sidebar-item">
        <h4>Filter Products</h4>
        <hr className="line-separator" />
        <form id="shop_search_form" name="shop_search_form">
          {(this.state.productFilter || []).map((product, i) => {
            return (
              <Fragment key={i}>
                <input
                  type="checkbox"
                  id={`filter_${i}`}
                  name={`filter_${i}`}
                  value={product.field_category ? product.field_category : ""}
                  onChange={e => this.handleChange(e)}
                />
                <label htmlFor={`filter_${i}`}>
                  <span className="checkbox tertiary">
                    <span></span>
                  </span>
                  {product.field_category}
                  <span className="quantity">{product.nid_count}</span>
                </label>
              </Fragment>
            );
          })}
        </form>
      </div>
    );
  }

  componentDidMount() {
    getProductFilter().then(response => {
      this.setState({ productFilter: response.data });
    });
  }
}

export default ProductsFilter;
