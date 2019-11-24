import React, { Component } from "react";
import { GET_USER_PRODUCTS } from "../Redux/actions";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
//import ProductAddButton from "../components/Product/ProductAddButton";
import ManageProductCard from "../components/Product/ManageProductCard";
import { numberofitem } from "../const";
import { fetuesrobject } from "../helper";

class ManageAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      activePage: 1,
      itemsCountPerPage: numberofitem,
      totalItemsCount: 1
    };

    //Bind this event on click method
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    const payload = {
      numberofitem: numberofitem,
      uid: fetuesrobject("uid"),
      pagenumber: pageNumber - 1
    };
    console.log(`active page is ${pageNumber}`);
    this.props.getUserProducts(payload);
    this.setState({
      activePage: pageNumber
    });
  }

  componentDidMount() {
    const payload = {
      numberofitem: numberofitem,
      pagenumber: 0,
      uid: fetuesrobject("uid")
    };
    this.props.getUserProducts(payload);
  }

  render() {
    const { products, count } = this.props.userProducts;
    return (
      <div className="dashboard-content">
        <div className="headline buttons primary">
          <h4>{count} Manage Ads</h4>
        </div>
        <div className="product-list grid column4-wrap">
          {/* <ProductAddButton></ProductAddButton> */}
          {(products || []).map(product => {
            return (
              <ManageProductCard
                key={product.nid}
                product={product}
              ></ManageProductCard>
            );
          })}
        </div>
        <div className="clearfix"></div>
        <div className="pager tertiary fright">
          {count > numberofitem ? (
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={numberofitem}
              totalItemsCount={count}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
              itemClass="pager-item"
              linkClass="page-link-class"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProducts: state.userProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProducts: payload => {
      dispatch({ type: GET_USER_PRODUCTS, payload: payload });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAds);

//export default ManageItems;
