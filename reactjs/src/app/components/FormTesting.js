import React, { Component } from "react";
import SocialMediaForm from "../Forms/SocialMediaForm";

export default class FormTesting extends Component {
  socialsubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <SocialMediaForm onChange={this.socialsubmit}></SocialMediaForm>
      </div>
    );
  }
}
