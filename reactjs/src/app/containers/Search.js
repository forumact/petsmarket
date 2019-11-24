import React, { Component } from "react";
import { siteSeach } from "../Networks";
import HeadLine from "../components/HeadLine";
import ProductCard from "../components/Product/ProductCard";
import NoDataFound from "../components/NoDataFound";
import SearchResultFilter from "../components/SearchResultFilter";
import Pagination from "react-js-pagination";
import { numberofitem } from "../const";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: [],
      noData: 0
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    const payload = {
      key: this.props.match.params.input,
      category: this.props.match.params.category,
      numberofitem: numberofitem,
      pagenumber: pageNumber - 1
    };
    console.log(`active page is ${pageNumber}`);
    siteSeach(payload).then(response => {
      this.setState({
        searchItems: response.data.searchItems,
        noData: response.data.count ? response.data.count : 0
      });
    });
    this.setState({
      activePage: pageNumber
    });
  }

  render() {
    if (this.state.noData === 0) {
      return (
        <div>
          <HeadLine title="Search"></HeadLine>
          <NoDataFound></NoDataFound>
        </div>
      );
    }

    return (
      <div>
        <HeadLine title="Search"></HeadLine>
        <section className="section-wrap">
          <div className="section">
            <div className="content full">
              <div className="headline primary">
                <h4>{this.state.noData} Product Found</h4>
                <SearchResultFilter></SearchResultFilter>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="product-showcase">
              <div className="product-list grid column4-wrap">
                {(this.state.searchItems || []).map(product => {
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
              {this.state.noData > numberofitem ? (
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={numberofitem}
                  totalItemsCount={this.state.noData}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                  itemClass="pager-item"
                  linkClass="page-link-class"
                />
              ) : null}
            </div>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    const payload = {
      key: this.props.match.params.input,
      numberofitem: numberofitem,
      pagenumber: 0,
      category: this.props.match.params.category
    };
    siteSeach(payload).then(response => {
      this.setState({
        searchItems: response.data.searchItems,
        noData: response.data.count ? response.data.count : 0
      });
    });
  }
}

export default Search;
