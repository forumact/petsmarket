import React, { Component } from "react";
//import { useTitle } from "../helper/MainHelper";
import { connect } from "react-redux";
import HeadLine from "../components/HeadLine";
import FavouriteCard from "../components/FavouriteCard";
import { GET_USER_FAVOURITES } from "../Redux/actions";
import Pagination from "react-js-pagination";
import { numberofitem } from "../const";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFavourites: {},
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
    this.props.getUserFavourites(payload);
    this.setState({
      activePage: pageNumber
    });
  }

  render() {
    const { flags, count } = this.props.userFavourites;
    const title = "Your Favourites";
    return (
      <div>
        <HeadLine title={title}></HeadLine>
        <div className="section-wrap">
          <div className="section">
            <div className="content full">
              <div className="headline primary">
                <h4>{count} Favourites Found</h4>
                <div className="clearfix"></div>
              </div>
              <div className="product-showcase">
                <div className="product-list list full">
                  {(flags || []).map(fav => {
                    return (
                      <FavouriteCard key={fav.fid} fav={fav}></FavouriteCard>
                    );
                  })}
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="pager tertiary">
                {count > 9? (
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
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const payload = {
      numberofitem: numberofitem,
      pagenumber: 0,
      uid: this.props.match.params.uid
    };
    this.props.getUserFavourites(payload);
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    userFavourites: state.userFavourites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserFavourites: payload => {
      dispatch({ type: GET_USER_FAVOURITES, payload: payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
