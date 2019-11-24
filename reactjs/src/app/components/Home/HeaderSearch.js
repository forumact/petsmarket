import React, { Component, Fragment } from "react";
import SearchIcon from "../../../assets/search-icon.png";
import { withRouter } from "react-router-dom";

import { HomeSearchFormValidation } from "../../const";

import FormValidator from "../../FormValidator";

class HeaderSearch extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(HomeSearchFormValidation);

    this.state = {
      search: "",
      categories: "All",
      validation: this.validator.valid()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  };

  handleSubmit(e) {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      const { categories, search } = this.state;
      this.setState({
        search: ""
      });
      this.props.history.push(`/search/${categories}/${search}`);
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <Fragment>
        <form
          className="search-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="rounded"
            name="search"
            id="search_products"
            placeholder="Search products here..."
            value={this.state.search}
            onChange={this.handleInputChange}
          />
          <input type="image" src={SearchIcon} alt="search-icon" />
          <span className="form-error poistionabs">{validation.search.message}</span>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(HeaderSearch);
