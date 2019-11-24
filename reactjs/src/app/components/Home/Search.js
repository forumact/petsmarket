import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { PigeonCategory, HomeSearchFormValidation } from "../../const";

import FormValidator from "../../FormValidator";

class Search extends Component {
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
      this.props.history.push(
        `/search/${this.state.categories}/${this.state.search}`
      );
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <Fragment>
        <form
          className="search-widget-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="search"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />

          <label htmlFor="categories" className="select-block">
            <select
              name="categories"
              id="categories"
              onChange={this.handleInputChange}
            >
              {PigeonCategory.map(cat => {
                return (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                );
              })}
            </select>
          </label>
          <button className="button medium dark">Search Now!</button>
        </form>
        <span className="form-error">{validation.search.message}</span>
      </Fragment>
    );
  }
}

export default withRouter(Search);
