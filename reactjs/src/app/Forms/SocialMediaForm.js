import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../helper";

const validate = values => {
  const errors = {};
  if (!values.social_fb_link) {
    errors.social_fb_link = "Required";
  }
  if (!values.social_twt_link) {
    errors.social_twt_link = "Required";
  }
  return errors;
};

let SocialMediaForm = props => {
  const { handleSocialSubmit } = props;
  return (
    <div>
      <h4>Social Media</h4>
      <hr className="line-separator" />
      <form onSubmit={handleSocialSubmit}>
        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="fb">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_fb_link"
            name="social_fb_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>

        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_twt_link"
            name="social_twt_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>
        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_twt_link"
            name="social_twt_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>
        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_twt_link"
            name="social_twt_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>
        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_twt_link"
            name="social_twt_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>
        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_twt_link"
            name="social_twt_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>
        <div className="input-container">
          <ul className="share-links">
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
          </ul>
          <Field
            id="social_twt_link"
            name="social_twt_link"
            type="text"
            component={renderField}
            placeholder="Enter your social link here..."
          />
        </div>
        <button form="profile-info-form" className="button mid-short primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

SocialMediaForm = reduxForm({
  form: "socialmedia",
  validate
})(SocialMediaForm);

export default SocialMediaForm;
