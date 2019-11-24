import React, { Component } from "react";

class BillingInformation extends Component {
  render() {
    return (
      <div>
        <h4>Biling Information</h4>
        <hr className="line-separator" />
        <form>
          <div className="input-container half">
            <label htmlFor="first_name2" className="rl-label required">
              First Name
            </label>
            <input
              type="text"
              form="profile-info-form"
              id="first_name2"
              name="first_name2"
              placeholder="Enter your first name here..."
            />
          </div>

          <div className="input-container half">
            <label htmlFor="last_name2" className="rl-label required">
              Last Name
            </label>
            <input
              type="text"
              form="profile-info-form"
              id="last_name2"
              name="last_name2"
              placeholder="Enter your last name here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="company_name2" className="rl-label">
              Company Name
            </label>
            <input
              type="text"
              form="profile-info-form"
              id="company_name2"
              name="company_name2"
              placeholder="Enter your company name here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="email_address2" className="rl-label required">
              Email Address
            </label>
            <input
              type="email"
              form="profile-info-form"
              id="email_address2"
              name="email_address2"
              placeholder="Enter your email address here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="country2" className="rl-label required">
              Country
            </label>
            <label htmlFor="country2" className="select-block">
              <select form="profile-info-form" name="country2" id="country2">
                <option value="0">Select your Country...</option>
                <option value="1">United States</option>
                <option value="2">Argentina</option>
                <option value="3">Brasil</option>
                <option value="4">Japan</option>
              </select>
            </label>
          </div>

          <div className="input-container half">
            <label htmlFor="state_city2" className="rl-label required">
              State/City
            </label>
            <label htmlFor="state_city2" className="select-block">
              <select
                form="profile-info-form"
                name="state_city2"
                id="state_city2"
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
            <label htmlFor="zipcode2" className="rl-label required">
              Zip Code
            </label>
            <input
              form="profile-info-form"
              type="text"
              id="zipcode2"
              name="zipcode2"
              placeholder="Enter your Zip Code here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="address2" className="rl-label required">
              Full Address
            </label>
            <input
              form="profile-info-form"
              type="text"
              id="address2"
              name="address2"
              placeholder="Enter your address here..."
            />
          </div>

          <div className="input-container">
            <label htmlFor="notes2" className="rl-label">
              Aditional Notes
            </label>
            <textarea
              form="profile-info-form"
              id="notes2"
              name="notes2"
              placeholder="Enter aditional notes here..."
            ></textarea>
          </div>

          <div className="input-container">
            <input
              type="checkbox"
              form="profile-info-form"
              id="copy_shipping"
              name="copy_shipping"
            />
            <label htmlFor="copy_shipping" className="label-check">
              <span className="checkbox primary">
                <span></span>
              </span>
              Copy information to shipping
            </label>
          </div>
          <button form="profile-info-form" className="button mid-short primary">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

export default BillingInformation;
