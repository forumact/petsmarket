import React, { Component } from "react";
import { NewsletterFormValidation } from "../const";

import FormValidator from "../FormValidator";

class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(NewsletterFormValidation);

    this.state = {
      subscribe_email: "",
      validation: this.validator.valid()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.submitted = false;
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  }

  handleSubmit(event) {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <form className="subscribe-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="subscribe_email"
          id="subscribe_email"
          placeholder="Enter your email here..."
          value={this.state.subscribe_email}
          onChange={this.handleInputChange}
        />
        <button className="button medium dark">Subscribe!</button>
        <span className="form-error">{validation.subscribe_email.message}</span>
      </form>
    );
  }
}

export default Newsletter;
