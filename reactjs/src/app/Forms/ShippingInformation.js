import React, { Component } from "react";

class ShippingInformation extends Component {
  render() {
    return (
      <div>
        <h4>Shipping Information</h4>
        <hr className="line-separator" />
        <form>
          <div className="input-container half">
            <label htmlFor="first_name3" className="rl-label required">
              First Name
            </label>
            <input
              type="text"
              form="profile-info-form"
              id="first_name3"
              name="first_name3"
              placeholder="Enter your first name here..."
            />
          </div>

          <div className="input-container half">
            <label htmlFor="last_name3" className="rl-label required">
              Last Name
            </label>
            <input
              type="text"
              form="profile-info-form"
              id="last_name3"
              name="last_name3"
              placeholder="Enter your last name here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="company_name3" className="rl-label">
              Company Name
            </label>
            <input
              type="text"
              form="profile-info-form"
              id="company_name3"
              name="company_name3"
              placeholder="Enter your company name here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="email_address3" className="rl-label required">
              Email Address
            </label>
            <input
              type="email"
              form="profile-info-form"
              id="email_address3"
              name="email_address3"
              placeholder="Enter your email address here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="country3" className="rl-label required">
              Country
            </label>
            <label htmlFor="country3" className="select-block">
              <select form="profile-info-form" name="country3" id="country3">
                <option value="0">Select your Country...</option>
                <option value="1">United States</option>
                <option value="2">Argentina</option>
                <option value="3">Brasil</option>
                <option value="4">Japan</option>
              </select>
            </label>
          </div>

          <div className="input-container half">
            <label htmlFor="state_city3" className="rl-label required">
              State/City
            </label>
            <label htmlFor="state_city3" className="select-block">
              <select
                form="profile-info-form"
                name="state_city3"
                id="state_city3"
              >
                <option value="0">Select your State/City...</option>
                <option value="1">New York</option>
                <option value="2">Buenos Aires</option>
                <option value="3">Brasilia</option>
                <option value="4">Tokyo</option>
              </select>
            </label>
          </div>

          <div className="input-container half">
            <label htmlFor="zipcode3" className="rl-label required">
              Zip Code
            </label>
            <input
              form="profile-info-form"
              type="text"
              id="zipcode3"
              name="zipcode3"
              placeholder="Enter your Zip Code here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="address3" className="rl-label required">
              Full Address
            </label>
            <input
              form="profile-info-form"
              type="text"
              id="address3"
              name="address3"
              placeholder="Enter your address here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="notes3" className="rl-label">
              Aditional Notes
            </label>
            <textarea
              form="profile-info-form"
              id="notes3"
              name="notes3"
              placeholder="Enter aditional notes here..."
            ></textarea>
          </div>
          <button form="profile-info-form" className="button mid-short primary">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

export default ShippingInformation;
