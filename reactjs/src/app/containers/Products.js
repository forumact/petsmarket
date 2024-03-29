import React, { Component } from "react";
import HeadLine from "../components/HeadLine";
import ProductCard from "../components/Product/ProductCard";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { GET_PRODUCTS } from "../Redux/actions";
import ProductsFilter from "../components/Product/ProductsFilter";
import { numberofitem } from "../const";
import SearchResultFilter from "../components/SearchResultFilter";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      activePage: 1,
      itemsCountPerPage: numberofitem,
      totalItemsCount: 1,
      productFilter: [],
      orderby: "ASC"
    };

    //Bind this event on click method
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleProductSort = this.handleProductSort.bind(this);
  }

  handleFilterChange(filter) {
    const payload = {
      numberofitem: numberofitem,
      pagenumber: 0,
      filter: filter
    };
    this.props.getProducts(payload);
    this.setState({
      productFilter: filter
    });
  }

  handlePageChange(pageNumber) {
    const payload = {
      numberofitem: numberofitem,
      pagenumber: pageNumber - 1,
      filter: this.state.productFilter,
      sortOrder: this.state.sortOrder
    };
    console.log(`active page is ${pageNumber}`);
    this.props.getProducts(payload);
    this.setState({
      activePage: pageNumber
    });
  }

  handleProductSort(sortOrder) {
    const payload = {
      numberofitem: numberofitem,
      pagenumber: 0,
      sortOrder: sortOrder,
      filter: this.state.productFilter
    };    
    this.props.getProducts(payload);
    this.setState({
      orderby: sortOrder
    });
  }

  componentDidMount() {
    const payload = {
      numberofitem: numberofitem,
      pagenumber: 0
    };
    this.props.getProducts(payload);
  }

  render() {
    const title = "Products";
    const { products, count } = this.props.products;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="content">
              <div className="headline tertiary">
                <h4>{count} Products Found</h4>
                <SearchResultFilter
                  sortOrder={this.handleProductSort}
                ></SearchResultFilter>
                <div className="clearfix"></div>
              </div>
              <div className="product-showcase">
                <div className="product-list grid column3-4-wrap">
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
              <div className="clearfix"></div>
              <div className="pager tertiary">
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
            <div className="sidebar">
              <ProductsFilter
                filterChange={this.handleFilterChange}
              ></ProductsFilter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
