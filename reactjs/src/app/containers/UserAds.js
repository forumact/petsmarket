import React, { Component } from "react";
import HeadLine from "../components/HeadLine";
import ProductCard from "../components/Product/ProductCard";
import UserBio from "../components/UserProfile/UserBio";
import { connect } from "react-redux";
import UserActivity from "../components/UserProfile/UserActivity";
import UserReputation from "../components/UserProfile/UserReputation";
import UserProfileMeta from "../components/UserProfile/UserProfileMeta";
import { GET_USER_PRODUCTS } from "../Redux/actions";
import { getUserBasicInfo } from "../Networks";
import { numberofitem, documentTitle } from "../const";
import Pagination from "react-js-pagination";
//import { Link } from "react-router-dom";

class UserAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProducts: {},
      userbasic: {},
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
      pagenumber: pageNumber - 1,
      uid: this.props.match.params.uid
    };
    console.log(`active page is ${pageNumber}`);
    this.props.getUserProducts(payload);
    this.setState({
      activePage: pageNumber
    });
  }

  render() {
    const title = `${this.state.userbasic.username}'s Profile`;
    const { products, count } = this.props.userProducts;
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className={"author-profile-banner"}></div>
        <UserProfileMeta userbasic={this.state.userbasic}></UserProfileMeta>
        <div className="section-wrap">
          <div className="section overflowable">
            <div className="sidebar left author-profile">
              <UserBio userbasic={this.state.userbasic}></UserBio>
              <UserActivity uid={this.props.match.params.uid}></UserActivity>
              <UserReputation></UserReputation>
            </div>
            <div className="content right">
              <div className="headline buttons primary">
                <h4>
                  {count}&nbsp;
                  <span className="strtocaptalize">
                    {this.state.userbasic.username}
                  </span>
                  's Items
                </h4>
              </div>
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
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const userpayload = {
      uid: this.props.match.params.uid
    };
    getUserBasicInfo(userpayload).then(response => {
      this.setState({ userbasic: response.data });
    });

    const payload = {
      numberofitem: 9,
      pagenumber: 0,
      uid: this.props.match.params.uid
    };
    this.props.getUserProducts(payload);
    const title = "Arulraj";
    document.title = `${title} | {documentTitle}`;
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

export default connect(mapStateToProps, mapDispatchToProps)(UserAds);
