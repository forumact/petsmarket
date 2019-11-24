import React, { Component } from "react";
import { userRegister } from "../Networks";
import FileUpload from "../components/FileUpload";
import { withRouter } from "react-router-dom";
import FormValidator from "../FormValidator";
import { city, RegisterFormValidate } from "../const";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(RegisterFormValidate);

    this.state = {
      first_name: "",
      last_name: "",
      user_name: "",
      email: "",
      password: "",
      user_picture: "",
      city: "",
      validation: this.validator.valid()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    let formv = {
      [name]: value
    };
    this.setState(formv);
  }

  handleInputFileChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state);

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const file = document.querySelector(".file");
    file.value = "";

    if (validation.isValid) {
      userRegister(this.state).then(response => {
        console.log(response.data.uid);
        if (response.data.uid > 1) {
          //this.props.history.push(`/user/${response.data.uid}`);
        }
      });
    }

    return false;
  }
  render() {
    const fileApi = "/api/v1/file/upload/user/user/user_picture";

    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div className="form-popup">
        <div className="form-popup-headline secondary">
          <h2>Register Account</h2>
          <p>Register now and start making money from home!</p>
        </div>
        <div className="form-popup-content">
          <form
            id="register-form4"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <div className="input-container">
              <label htmlFor="userpciture" className="rl-label required">
                Profile Image
              </label>
              <FileUpload
                onChange={this.handleInputFileChange}
                targetField="user_picture"
                fileApi={fileApi}
              ></FileUpload>
              <input
                className="hide"
                name="user_picture"
                id="pic1"
                type="hidden"
                placeholder="Enter them item name here..."
                value={this.state.user_picture}
                onChange={this.handleInputChange}
              ></input>
              <span className="form-error">
                {validation.user_picture.message}
              </span>
            </div>
            <div className="input-container">
              <label htmlFor="first_name" className="rl-label required">
                First Name
              </label>
              <input
                name="first_name"
                type="text"
                placeholder="Enter them first name here..."
                value={this.state.first_name}
                onChange={this.handleInputChange}
                maxLength="150"
              ></input>
              <span className="form-error">
                {validation.first_name.message}
              </span>
            </div>
            <div className="input-container">
              <label htmlFor="last_name" className="rl-label required">
                Last Name
              </label>
              <input
                name="last_name"
                type="text"
                placeholder="Enter them first name here..."
                value={this.state.last_name}
                onChange={this.handleInputChange}
                maxLength="150"
              ></input>
              <span className="form-error">{validation.last_name.message}</span>
            </div>
            <div className="input-container">
              <label htmlFor="city" className="rl-label required">
                City
              </label>
              <select
                name="city"
                form="carform"
                value={this.state.city}
                onChange={this.handleInputChange}
              >
                <option />
                {city.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <span className="form-error">{validation.city.message}</span>
            </div>
            <div className="input-container">
              <label htmlFor="user_name" className="rl-label required">
                Account Name
              </label>
              <input
                name="user_name"
                type="text"
                placeholder="Enter them user name here..."
                value={this.state.user_name}
                onChange={this.handleInputChange}
                maxLength="150"
              ></input>
              <span className="form-error">{validation.user_name.message}</span>
            </div>
            <div className="input-container">
              <label htmlFor="email" className="rl-label required">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter them email here..."
                value={this.state.email}
                onChange={this.handleInputChange}
                maxLength="150"
              ></input>
              <span className="form-error">{validation.email.message}</span>
            </div>
            <div className="input-container">
              <label htmlFor="password" className="rl-label required">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter them password name here..."
                value={this.state.password}
                onChange={this.handleInputChange}
                maxLength="150"
              ></input>
              <span className="form-error">{validation.password.message}</span>
            </div>

            <button className="button mid dark">
              Register <span className="primary">Now!</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
